# Rest-api-implementation
HTTP rest get and post api implementation. 

http://ec2-54-202-113-75.us-west-2.compute.amazonaws.com/ is the main page. 

To do a get or post api call use http://ec2-54-202-113-75.us-west-2.compute.amazonaws.com/api/people 
-Get will require no additional informaton from the user. 
-Post will require 
Header	name=Content-Type	value=application/json 
The body will require {“firstname”: “John”, “lastname”:“Doe”, “phone”:“403-555-1234”} type format. 


I used Node.js as my language and used express as well. 
I connect to a mongoDB inorder to hold the information given by the user. 
