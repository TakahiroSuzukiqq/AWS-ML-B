$ express app name --view=ejs  
$ npm install  
$ npm install mongoose --save  
$ npm install dotenv --save  
$ npm install axios --save  
$ npm install aws-sdk --save  
$ touch .gitignore  
$ touch .env  
$ README.md  
  
* Unique key setup
  ````  
  index.ejs  
  var clientId = ' CLIENTID';  
  var roleArn = 'ROLEARN';  
  ````  
  ````  
  awsMLSdk.ejs  
  var ENDPOINT = "YOUR AWS MACHINE LEARNING MODEL ENDPOINT";  
  var REGION = "YOUR AWS REGION";  
  var ACCESS_KEY_ID = "YOUR AWS IAM USER ACCESS KEY ID";  
  var SECRET_ACCESS_KEY = "YOUR AWS IAM USER SECRET SCCESS KEY";  
  
  // ML model ID  
  var ML_MODEL_ID = "YOUR AWS MACHINE LEARNING MODEL ID";  
  
  // ML model Endpoint Url  
  var PREDICT_ENDPOINT = "YOUR AWS MACHINE LEARNING MODEL ENDPOINT URL";  
  ````  

* Image  
  - Prediction using AWS ML API   
    
  <URL>  
       
      
  - Prediction from node.js using aws sdk for javascript  
    
  <URL>  
    
    
  - Predicition on amazon web services machine learning  
    
  <URL>  
    
  
  
