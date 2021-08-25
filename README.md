# backend-challenge
Bank Finder

# The following Apis Implemented

### Login To Get JWT Token
POST https://interview-coding-challenge.herokuapp.com/v1/login HTTP/1.1
content-type: application/json

{
    "username": "demo",
    "password": "123456"
}


###  SET JWT Token and Get Bank Details
GET https://interview-coding-challenge.herokuapp.com/v1/banks/SBIN0004722 HTTP/1.1
content-type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhaWYwMDciLCJwYXNzd29yZCI6IjEyMzQ1NiIsInJvbGUiOlsiYWRtaW4iXSwiaWF0IjoxNjI5ODc2NjM0LCJleHAiOjE2MzAzMDg2MzR9.BWOXsytMJ5eOQAOi0DSqxQFLhBbspthTMYef67VTRNs`


###  SET JWT Token and GET BANK BRANCH IN A CITY
POST https://interview-coding-challenge.herokuapp.com/v1/list-branches HTTP/1.1
content-type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhaWYwMDciLCJwYXNzd29yZCI6IjEyMzQ1NiIsInJvbGUiOlsiYWRtaW4iXSwiaWF0IjoxNjI5ODc2NjM0LCJleHAiOjE2MzAzMDg2MzR9.BWOXsytMJ5eOQAOi0DSqxQFLhBbspthTMYef67VTRNs

{
    "bank_name": "STATE BANK OF INDIA",
    "city": "PALAKKAD",
    "page": "10",
    "limit": "3"
}