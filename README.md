* Installation
````  
  $ express app name --view=ejs  
  $ npm install  
  $ npm install dotenv --save   
  $ npm install aws-sdk --save  
  $ touch .gitignore  
  $ touch .env  
  $ README.md  
 ````  
    
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
      
  <a href="https://ibb.co/eBmrua"><img src="https://preview.ibb.co/ddAHZa/Screen_Shot_2017_07_14_at_17_51_24.png" alt="Screen_Shot_2017_07_14_at_17_51_24" border="0"></a><br />    
       
      
  - Prediction from node.js(localhost:3000) using aws sdk for javascript  
    
  <a href="https://ibb.co/n0WVnv"><img src="https://preview.ibb.co/kx45LF/bank_sdk_syntax.png" alt="bank_sdk_syntax" border="0"></a><br />  
    
    
  - Predicition on amazon web services machine learning  
    
  <a href="https://ibb.co/kB2Wua"><img src="https://preview.ibb.co/nbv6Sv/Screen_Shot_2017_07_14_at_17_55_59.png" alt="Screen_Shot_2017_07_14_at_17_55_59" border="0"></a><br />  
    
  
  
