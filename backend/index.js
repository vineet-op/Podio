const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");
const Model = require('./Schema')
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

// Middleware
app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(express.static('public'));


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
})


process.env.GOOGLE_APPLICATION_CREDENTIALS = 'podio.json'
const client = new textToSpeech.TextToSpeechClient();

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the API");
});


app.post("/send", async (req, res) => {

    const { title } = req.body;
    const file = req.files.file;

    if (!req.files || !req.body.title) {
        return res.status(400).json({
            message: "Title or File missing"
        });
    }

    // Check file type
    if (file.mimetype !== "application/pdf") {
        return res.status(400).json({
            message: "Invalid file type. Only PDF files are allowed."
        });
    }

    try {
        const data = await pdfParse(file.data);
        const extractedText = data.text;

        // Store file in database (consider alternatives for large files)
        const responsefromDB = await Model.create({
            title,
            file: extractedText
        });


        const request = {
            input: { text: extractedText },
            voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
            audioConfig: { audioEncoding: 'MP3' },
        }

        const [response] = await client.synthesizeSpeech(request);
        console.log(response);
        const writeFile = util.promisify(fs.writeFile);
        await writeFile('public/output.mp3', response.audioContent, 'binary');
        console.log('Audio content written to file: output.mp3');

        const audioUrl = `http://localhost:5000/output.mp3`

        res.status(201).json({
            message: "File Created",
            data: responsefromDB,
            audiourl: audioUrl
        });


    }
    catch (error) {
        console.error("Error creating file:", error);
        res.status(500).json({
            message: "Error creating file",
            error: error.message
        });
    }
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
