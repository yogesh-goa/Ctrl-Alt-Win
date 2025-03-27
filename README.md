# RETROTHON-003
Team name : Ctrl-Alt-Win
Team members, contact number, email
Aditya Gaude  8767757264 ayanokj22@gmail.com
Adharsh Pagui 7219592196 adharshwork9@gmail.com
Velino Leitao 8149387705 leitaovelino19@gmail.com

What is each individual's contribution in the project
Aditya : ai model training
Adharsh : Front-end, Back-end
Velino : Front-end, Back-end

Folder structure
FRONT-END 
/src  
 ├── components  
 │      ├── Navbar.jsx  
 │      ├── Footer.jsx  
 │      ├── Sidebar.jsx  
 │      ├── EmployerDashboard.jsx  
 │      ├── CandidateDashboard.jsx  
 │      ├── VerificationForm.jsx  
 │      ├── DocumentUpload.jsx  
 │      ├── StatusTracker.jsx  
 │      ├── Feedback.jsx  
 │  
 ├── pages  
 │      ├── EmployerPortal.jsx  
 │      ├── CandidatePortal.jsx  
 │      ├── Login.jsx  
 │      ├── Signup.jsx  
 │      ├── NotFound.jsx  
 │  
 ├── App.js  
 ├── index.js  
 ├── styles.css

 AI CLASSIFIER TRAINING/ MODEL TESTING
 /ocr-ai-processing  
 ├── models  
 │      ├── __init__.py  
 │      ├── image_classifier.h5  
 ├── ocr  
 │      ├── ocr_test.py  
 │      ├── processed_data  
 ├── scripts  
 │      ├── checkfeature.py  
 │      ├── document_classifier.py  
 │      ├── evaluate_model.py  
 │      ├── parse_tfrecord.py  
 │      ├── preprocess_images.py  
 │      ├── testh5.py   
 │      ├── train_image_classifier.py  
 │      ├── train_model.py  
 │      ├── __init__.py  
 ├── main.py   
 ├── train_model.py  


What is your approach to solve the problem

To solve the AI-Powered Background Verification System problem, I would build a modular system integrating AI-driven document verification, criminal record checks, and employment history validation through APIs. The frontend will be built using React.js and Tailwind CSS, with Node.js and Django managing backend processes. AI models (using TensorFlow and PyTorch) will automate document validation and assess risk based on background data, while real-time notifications will be sent to both employers and candidates. The system will use Checkr and GoodHire APIs for criminal and employment record checks, ensuring fast, accurate, and transparent background screening.

Tech stack for your project

Frontend: React.js, Tailwind CSS
Backend: Node.js
AI & Document Verification:Tesseract.js , MicrosoftLayoutMv3,Checkr,TensorFlow
Database:MongoDB 
API Integrations:Checkr API


Build and run commands

FRONT-END 
npm start

 AI CLASSIFIER TRAINING/ MODEL TESTING
create a folder with the following files + test data(images):
image_classifier.h5
testh5.py
run : python testh5.py

CODE FILE: 
https://drive.google.com/drive/folders/1ud-v_iEgPdvSsPxvzLqdKktnwmaa3SyJ?usp=sharing
