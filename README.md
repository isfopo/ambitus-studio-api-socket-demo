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

## Single Client Demo

To connect to a Project, input a ProjectId into the ProjectId field and an authorization token in the Token field. The simplest way to do this is to use the ProjectId "3a4639f8-77b6-11eb-9439-0242ac130002" and get a token from the "Login" request as explained in ambitus-studio-api repo's README.md. When connected, "Connected to MyFirstProject" show appear underneath, replacing "Not connected." Making sure that the console on your client is open, use Insomina or Postman (and using a valid token, like the one used to connect to the Project) to change a part of the Project via a POST or a PUT request. In the client yo will see that the change has been printe to the console.

## Two Client Demo

To see an instance of two client communication, stop the single client and with the Ambitus Studio API still running, follow this command:

```shell
npm run start-two-clients
```

This will open two instances of the client-side demo, runnning on different ports. 

Start by connecting one client the same as you did above, using the ProjectId "3a4639f8-77b6-11eb-9439-0242ac130002" and a token from the "Login" request. Then repeat the process for the other client. You can use the same token for each client instance. Once the second client is connected, the other client will be notified of the other's entrance. While they are connected any change to the Project via a POST or PUT request will be broadcast to both clients. Disconnecting either will notify the other that the client has disconnected.

This real-time update can be used to create an interface in which users can collaborate in easily and effectively while always seeing the most up-to-date version of the project.
