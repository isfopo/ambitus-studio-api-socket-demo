# Ambitus Studio API - Socket Demo

This is a demonstration for the real-time update feature of the Ambitus Studio API. This simple React app shows how any client connected to a Project will receive automatic updates when any aspect of that project is changed. 

## Setup

To start the demo, be sure to have the Ambitus Studio API running then follow these commands:

```shell
git clone https://github.com/isfopo/ambitus-studio-api-socket-demo.git
cd ambitus-studio-api-socket-demo
npm install
npm start
```

This will open an instance of the client-side demo. 

To connect to a Project, input a ProjectId into the ProjectId field and an authorization token in the Token field. The simplest way to do this is to use the ProjectId "3a4639f8-77b6-11eb-9439-0242ac130002" and get a token from the "Login" route as explained in ambitus-studio-api repo's README.md. 
