# backend-challenge
Bank Finder

# The following Apis Implemented

### Login To Get JWT Token
curl --request POST \
  --url https://interview-coding-challenge.herokuapp.com/v1/login \
  --header 'content-type: application/json' \
  --header 'user-agent: vscode-restclient' \
  --data '{"username": "saif007","password": "123456"}'


###  SET JWT Token and GET Bank Details
curl --request GET \
  --url https://interview-coding-challenge.herokuapp.com/v1/banks/ABHY0065022 \
  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhaWYwMDciLCJwYXNzd29yZCI6IjEyMzQ1NiIsInJvbGUiOlsiYWRtaW4iXSwiaWF0IjoxNjI5ODgwNzEwLCJleHAiOjE2MzAzMTI3MTB9.vmqozqTplVT2Yq3IRbeI53YY_rOS74oC0tEtEt_kgk8' \
  --header 'content-type: application/json' \
  --header 'user-agent: vscode-restclient'


###  SET JWT Token and GET BANK BRANCH IN A CITY
curl --request GET \
  --url https://interview-coding-challenge.herokuapp.com/v1/list-branches/ABHYUDAYA%20COOPERATIVE%20BANK%20LIMITED/MUMBAI/1/3 \
  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhaWYwMDciLCJwYXNzd29yZCI6IjEyMzQ1NiIsInJvbGUiOlsiYWRtaW4iXSwiaWF0IjoxNjI5ODgwNzEwLCJleHAiOjE2MzAzMTI3MTB9.vmqozqTplVT2Yq3IRbeI53YY_rOS74oC0tEtEt_kgk8' \
  --header 'content-type: application/json' \
  --header 'user-agent: vscode-restclient'