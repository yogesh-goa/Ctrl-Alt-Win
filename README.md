<<<<<<< HEAD
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

VIDEO DEMO: https://drive.google.com/drive/folders/1v5BnO44CFwhZx9RjB7Z5SBAqkGqSFe9n?usp=sharing
CODE FILE: 
https://drive.google.com/drive/folders/1ud-v_iEgPdvSsPxvzLqdKktnwmaa3SyJ?usp=sharing
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> bb43ebb (First Commit)
