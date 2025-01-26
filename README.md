
# Podio  

**Convert PDFs into audio for on-the-go listening.**  

Podio is an innovative application that transforms boring PDF documents into engaging audio files, allowing users to listen instead of read. Whether commuting, exercising, or multitasking, Podio makes consuming information convenient and enjoyable.  

## Features  
- **PDF to Audio Conversion**: Upload PDF files and convert them to high-quality audio.  
- **Listen Anywhere**: Access your converted audio files on the go.  
- **Intuitive Interface**: A user-friendly design for seamless navigation.  
- **Fast and Reliable**: Built with optimized backend services for quick processing.  

## Tech Stack  
- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)  
- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)  
- **Text-to-Speech**: [Google Text-to-Speech API](https://cloud.google.com/text-to-speech)  
- **Deployment**: [Vercel](https://vercel.com/)  

## Demo  
Check out the demo video below to see Podio in action:  

https://github.com/user-attachments/assets/beb8659f-5d03-4363-9620-ad42cbcb9fbe 

## Installation and Usage  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/yourusername/podio.git  
   cd podio  
   cd frontend
   npm install
   ```  
   ```bash
   cd backend
   npm install
    ``` 

2. Set up environment variables:  
   - Create a `.env` file in the root directory.  
   - Add your **Google Text-to-Speech API** credentials.  

3. Run the application:  
   ```bash  
   node index.js 
   npm run dev  
   ```  

4. Access the app at `http://localhost:3000`.  


## Future Enhancements  
- Add support for multiple languages and accents.  
- Provide options to customize the audio speed and tone.  
- Integrate cloud storage for saving audio files.  

Let me know if you need help with anything else!
