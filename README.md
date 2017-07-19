# Overview    
 *  [Description](#section1)  
 *  [Installation](#section2)  
 *  [Unique key setup](#section3)  
 *  [Image](#section4)  
      
        
# <a name="section1">Description  
  In this machine learning project, I tried to use Amazon Web Services (AWS )Machine Learning(ML).  
  Using banking and marketing datasets from [ University of California at Irvine (UCI) Machine Learning Repository ](http://archive.ics.uci.edu/ml/datasets.html), and followed by [ Amazon Machine Learning Tutorial ](http://docs.aws.amazon.com/ja_jp/machine-learning/latest/dg/tutorial.html) to create Machine Learning Models on AWS ML, do batch prediction and real time prediction.  
    
 ## To do  
  ### AWS NL realtime prediction  
     1. Store CSV data which you want to use for machine learning 
      

#  <a name="section2"> Installation
````  
  $ express app name --view=ejs  
  $ npm install  
  $ npm install dotenv --save   
  $ npm install aws-sdk --save  
  $ touch .gitignore  
  $ touch .env  
  $ README.md  
 ````  
  
          
# <a name="section3"> Unique key setup
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
  
  
# <a name="section4"> Image  
  ## Prediction using AWS ML API   
      
  <a href="https://ibb.co/eBmrua"><img src="https://preview.ibb.co/ddAHZa/Screen_Shot_2017_07_14_at_17_51_24.png" alt="Screen_Shot_2017_07_14_at_17_51_24" border="0"></a><br />    
           
  

              
  ## Prediction from node.js(localhost:3000) using aws sdk for javascript  
     
  <a href="https://ibb.co/n0WVnv"><img src="https://preview.ibb.co/kx45LF/bank_sdk_syntax.png" alt="bank_sdk_syntax" border="0"></a><br />  
        
  

            
  ## Predicition on amazon web services machine learning  
      
  <a href="https://ibb.co/kB2Wua"><img src="https://preview.ibb.co/nbv6Sv/Screen_Shot_2017_07_14_at_17_55_59.png" alt="Screen_Shot_2017_07_14_at_17_55_59" border="0"></a><br />  
  
  
  
    
  ## Data connection image  
  
  <a href="https://ibb.co/jEMCN5"><img src="https://preview.ibb.co/ce6OUk/Amazon_Web_Services.png" alt="Amazon_Web_Services" border="0"></a><br />    
  


  
    

