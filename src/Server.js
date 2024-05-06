const express = require('express');
const TTS = require('@voidvoxel/windows-tts');

class Server {
    constructor () {
        const app = express();
        const tts = new TTS();

        app.get(
            '/',
            async (request, response) => {
                let message = request.query.message;

                await tts.speak(message);

                message = TTS.encodeMessage(message);

                let html = `<html><body style="background-color: black; color: white;"><p id="result">${message}</p></body></html>`;

                response.send(html);
            }
        );

        app.listen(42083);
    }
}

module.exports = Server;
