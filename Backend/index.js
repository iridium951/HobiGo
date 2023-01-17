const mongoose = require('mongoose');
const express = require('express');
const validator = require('validator');
const JsonWebToken = require('jsonwebtoken');
const cors = require('cors')
const UserModel = require('./models/user-model.js');
const EventModel = require('./models/event-model.js');
//const LocationModel = require('./models/location-model.js');

const mongoUrl = "mongodb://127.0.0.1:27017/Habby";
const serverPort = 3000;
const SecretPassword = "ioyJhbG5iOiJIUzI1NiJ9";

async function initMongoose() {
    mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
}

function verifyToken(request, response, next) {
    const header = request.headers['authorization'];
    if (typeof header !== 'undefined') {
        console.log('verify token: ' + header);
        const headerToken = header.split(' ')[1];
        JsonWebToken.verify(headerToken, SecretPassword, function (error, decoded) {
            if (error) {
                return response.sendStatus(403).send('Invalid token: ' + error);
            }
            console.log('decoded token: ' + JSON.stringify(decoded));
            request.token = headerToken;
            request.tokenEmail = decoded.email;
            UserModel.find({ 'EmailAddress': request.tokenEmail }, (error, result) => {
                if (error) {
                    return response.status(403).send('User not found: ' + error);
                }
                const user = result[0];
                if (!user.token.includes(headerToken)) {
                    return response.sendStatus(403).send('Token not found');
                }
                request.tokenUserId = user.UserId;
                console.log('token UserId: ' + request.tokenUserId);
                next();
            });
        });
    }
    else {
        response.sendStatus(403).send('Invalid authorization');
    }
}

async function initServer() {
    const server = express();
    server.use(cors());

    // GET all users
    server.get("/users", (request, response) => {
        console.log('get /users');
        UserModel.find((error, result) => {
            if (error) {
                return response.status(500).send(error);
            }
            response.send(result);
        });
    });

    // GET user by id
    server.get("/users/:id", (request, response) => {
        if (request.params.id) {
            console.log('get /users/id: ' + request.params.id);
            UserModel.find({ 'UserId': request.params.id }, (error, result) => {
                if (error) {
                    return response.status(500).send(error);
                }
                if (result.length !== 1) {
                    return response.status(404).send("Data not found " + result.length);
                }
                response.send(result);
            });
        }
        else {
            response.status(500).send("Invalid parameter id");
        }
    });

    // POST user (Hier NOCH KEINE REGISTRIERUNG, nur allgemeines POST zum Testen in Postman)
    server.post("/users", (request, response) => {
        console.log('post /users: ' + JSON.stringify(request.body));
        if (!validator.isEmail(request.body.EmailAddress)) {
            return response.status(403).send("Invalid Email format");
        }
        const user = new UserModel(request.body);
        user.save((error) => {
            if (error) {
                return response.status(500).send(error);
            }
            response.send();
        });
    });

    // POST user login
    server.post("/users/login", (request, response) => {
        console.log('post /users/login: ' + JSON.stringify(request.body));
        if (!request.body.EmailAddress || !request.body.Password) {
            return response.status(403).send("Invalid Email or Password params");
        }
        UserModel.find({ 'EmailAddress': request.body.EmailAddress, 'Password': request.body.Password }, (error, result) => {
            if (error) {
                return response.status(403).send("Invalid Email or Password params");
            }
            if (result.length !== 1) {
                return response.status(403).send("Invalid Email or Password params");
            }
            const user = result[0];
            const token = JsonWebToken.sign({ email: request.body.EmailAddress }, SecretPassword);
            user.token.push(token);
            UserModel.findByIdAndUpdate(user._id, user, { upsert: true }, (error) => {
                if (error) {
                    return response.status(500).send(error);
                }
                response.send({ 'token': token });
            });
        });
    });

    // POST user logout
    server.post("/users/logout", verifyToken, (request, response) => {
        console.log('post /users/logout: ' + request.token);
        UserModel.find({ 'UserId': request.tokenUserId }, (error, result) => {
            if (error) {
                return response.status(403).send(error);
            }
            const user = result[0];
            user.token = user.token.filter(t => t !== request.token);
            console.log('Token removed: ' + user.token);
            UserModel.findByIdAndUpdate(user._id, user, { upsert: true }, (error) => {
                if (error) {
                    return response.status(500).send(error);
                }
                response.send('Logout success');
            });
        });
    });

    // PATCH user
    server.patch("/users", (request, response) => {
        console.log('patch /users: ' + JSON.stringify(request.body));
        if (request.body.UserId) {
            if (request.body.EmailAddress && !validator.isEmail(request.body.EmailAddress)) {
                return response.status(403).send("Invalid Email format");
            }
            UserModel.findOneAndUpdate({ 'UserId': request.body.UserId }, request.body, { upsert: true }, (error) => {
                if (error) {
                    return response.status(500).send(error);
                }
                response.send();
            });
        }
        else {
            response.status(500).send("Invalid parameter UserId");
        }

    });

    // DELETE user by id
    server.delete("/users/:id", (request, response) => {
        if (request.params.id) {
            console.log('delete /users/id: ' + request.params.id);
            UserModel.findOneAndDelete({ 'UserId': request.params.id }, (error, result) => {
                if (error) {
                    return response.status(500).send(error);
                }
                response.send("User deleted: " + result);
            });
        } else {
            response.status(500).send("Invalid parameter id");
        }
    });

    // GET all events (only visible for user with appropriate token)
    server.get("/events", verifyToken, (request, response) => {
        console.log('get /events ' + request.tokenUserId);
        EventModel.find({ 'UserId': request.tokenUserId }, (error, result) => {
            if (error) {
                return response.status(500).send(error);
            }
            response.send(result);
        });
    });

    // GET event by id (only visible for user with appropriate token)
    server.get("/events/:id", verifyToken, (request, response) => {
        if (request.params.id) {
            console.log('get /events/id: ' + request.params.id + ' ' + request.UserId);
            EventModel.find({ 'UserId': request.tokenUserId, 'EventId': request.params.id }, (error, result) => {
                if (error) {
                    return response.status(500).send(error);
                }
                if (result.length !== 1) {
                    return response.status(404).send("Data not found " + result.length);
                }
                response.send(result);
            });
        }
        else {
            response.status(500).send("Invalid parameter id");
        }
    });

    // POST event (using token)
    server.post("/events", verifyToken, (request, response) => {
        console.log('post /events: ' + JSON.stringify(request.body));
        request.body.UserId = request.tokenUserId;
        const user = new EventModel(request.body);
        user.save((error) => {
            if (error) {
                return response.status(500).send(error);
            }
            response.send();
        });
    });

    // PATCH event (only usable for user with appropriate token)
    server.patch("/events", verifyToken, (request, response) => {
        console.log('patch /events: ' + JSON.stringify(request.body));
        if (request.body.EventId) {
            EventModel.findOneAndUpdate({ 'UserId': request.tokenUserId, 'EventId': request.body.EventId }, request.body, { upsert: true }, (error) => {
                if (error) {
                    return response.status(500).send(error);
                }
                response.send();
            });
        }
        else {
            response.status(500).send("Invalid parameter EventId");
        }

    });

    // DELETE event by id (only usable for user with appropriate token)
    server.delete("/events/:id", verifyToken, (request, response) => {
        if (request.params.id) {
            console.log('delete /events/id: ' + request.params.id);
            EventModel.findOneAndDelete({ 'UserId': request.tokenUserId, 'EventId': request.params.id }, (error, result) => {
                if (error) {
                    return response.status(500).send(error);
                }
                response.send("Event deleted: " + result);
            });
        } else {
            response.status(500).send("Invalid parameter id");
        }
    });

    server.listen(3000, () => {
        console.log('Server up on port ' + serverPort)
    })

}

initMongoose();
initServer();