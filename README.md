# Overview    
 *  [Description](#section1)  
 *  [Installation](#section2)  
 *  [Unique key setup](#section3)  
 *  [Issue & future plan](#section4)  
 *  [Image](#section5)  
      
        
# <a name="section1">Description  
  In this machine learning project, I tried to use Amazon Web Services (AWS )Machine Learning(ML).  
  Using banking and marketing datasets from [University of California at Irvine (UCI) Machine Learning Repository](http://archive.ics.uci.edu/ml/datasets.html), and followed by [Amazon Machine Learning Tutorial](http://docs.aws.amazon.com/ja_jp/machine-learning/latest/dg/tutorial.html) to create Machine Learning Models on AWS ML, do batch prediction and real time prediction.  
  In this project, I tried Binary classification method. The model trains its accuracy by using dank data and with the data it predict the user input (request) and output (send back) the prediction.  
  When you input the data about a customer, the machine predict whether the cusctomer will make financial contract with the bank or not by returning binary number(0, 1) and its accuracy.  
        
 ### Machine learning  
   ## Caution  
     Using AWS ML may cost you especcially when you do batch prediction and real-time prediction.  
     Regarding the cost by trying this project, I don't take any responsibility.  
     So refert to [Amazon Machine Learning Pricing](https://aws.amazon.com/machine-learning/pricing/) do your own responsibility.    
     Plus, each AWS services has its each pricing system so if you try other AWS to use machine learning refer to [Cloud Services Pricing](https://aws.amazon.com/jp/pricing/services/?nc1=h_ls) and do your own responsibility, I don't take any responsibility.    
     For further AWS info. including cost, please visit [aws.amazon.com](https://aws.amazon.com/?nc1=h_ls).  

            
  ### AWS ML on AWS  
     1. Stored CSV data which you want to use for machine learning.   
     2. Created AWS Model.    
     3. Did batch prediction or real-time prediction by using the model.  
     4. [Image reference](#section6)  
       
  ###  API     
     0. To implement AWS ML to existing  project, generated API by using AWS API Gateway.  
     1. Created User authorization, role in AWS IAM.  
     2. Created AWS Lambda function.  
     3. Created API Gateway function.  
     4. Test the API from POSTMAN  
     5. [Image reference](#section7)  
         
  ### Node.js implementation using AWS SDK for JavaScript  
     0. Referred to [AWS SDK for JavaScript in Node.js](https://aws.amazon.com/sdk-for-node-js/) to set up.  
     1. Coded AWS SDK syntax to the VIEW page in the existing Node.js project.  
     2. [Image reference](#section8)      
      
     
       
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
    
    
      
# <a name="section4"> Issue & future plan  
  * In Node.js project inplementation, Sometimes error happens when inputting a customer data by hard coding and try to see the result,  
    it shows NaN (Not a Number). Assuming it is related with the customer age and sex so currently I'm trying to fix.
    
  * In Node.js project inplementation for now I need to hard code to input so I'm trying to create user input field for the browser.  
  
  * In Node.js project I need to input all of the customer data in the meantime it is not necessariry for AWS ML and API to input all the data.  
  
  * The model accuracy is too low so I need to train the model.  
    
  
    
# <a name="section5"> Image  
    
   ## <a name="section6"> Predicition on Amazon Web Services Machine Learning  
      
  <a href="https://ibb.co/kB2Wua"><img src="https://preview.ibb.co/nbv6Sv/Screen_Shot_2017_07_14_at_17_55_59.png" alt="Screen_Shot_2017_07_14_at_17_55_59" border="0"></a><br /> 
    
  
    
  ## <a name="section7"> Prediction using AWS ML API   
        
  <a href="https://ibb.co/eBmrua"><img src="https://preview.ibb.co/ddAHZa/Screen_Shot_2017_07_14_at_17_51_24.png" alt="Screen_Shot_2017_07_14_at_17_51_24" border="0"></a><br />    
               
      
              
  ## <a name="section8"> Prediction from node.js(localhost:3000) using aws sdk for javascript  
       
  <a href="https://ibb.co/n0WVnv"><img src="https://preview.ibb.co/kx45LF/bank_sdk_syntax.png" alt="bank_sdk_syntax" border="0"></a><br />  
          
    
              
  ## Data connection image  
  
  <a href="https://ibb.co/jEMCN5"><img src="https://preview.ibb.co/ce6OUk/Amazon_Web_Services.png" alt="Amazon_Web_Services" border="0"></a><br />    
  


  
    

