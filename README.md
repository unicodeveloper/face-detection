
# Face Overlay App
<p align=“center”><a href=“LICENSE”><img alt=“GitHub license” src="https://img.shields.io/github/license/laravelnigeria/website.svg"></a></p>

👨 👩  An app to detect facial attributes (with focus on the eyes), on a human and append a pair of glasses or harlequin mask.

<div>
<img style="width:50%" src="http://res.cloudinary.com/og-tech/image/upload/v1507395290/demo_a_gefjqp.png" />
<img style="width:50%" src="http://res.cloudinary.com/og-tech/image/upload/v1507395294/demo_b_uerqes.png" />
</div>

## Setting things up

### Clone the repository
```sh
$ git clone git@github.com:unicodeveloper/face-detection.git
```

### Install Dependencies 

Before continuing, this app requires  [node](https://nodejs.org/en/) $ [npm](https://www.npmjs.com/) installed on your machine.
Once you have confirmed your node installation,

- Change directory into the server directory of the app
```sh
$ cd face-detection/server
```

- Install npm packages
```sh
$ npm install
```

- Set up http server 
To render our static html files, you could use a simple http server like [http-server](https://www.npmjs.com/package/http-server). To install run the command 

```sh
$ npm install http-server -g
```

### Working with Cloudinary
This application is dependent on [Cloundary's API](https://cloudinary.com/).
To continue, you will need to [sign up](https://cloudinary.com/users/register/free) here. Once that's done, on your [console](https://cloudinary.com/console) fetch your `cloud_name`, `api_key`, `api_secret` and then add them to your `index.js` file located in the `server/` directory.

NB: 
- You also need to activate [Advanced Facial Attributes](https://cloudinary.com/console/addons#adv_face) on your cloudinary account - don't worry it's 'kinda' free 😜 .
- You need to upload the images from the `assets` directory to your [media library](https://cloudinary.com/console/media_library) and rename them to `glasses` and `harlequinmask` since those are the two masks we are considering

## Running things
To run the app, in the root directory of our app we start our backend server with this command
```sh
$ node server
```

You'll get a response like 
```sh
Listening on localhost:3333
```

This means your backend server is running on `http://localhost:3333/`

You also need to run your `http-server` by using the command
```sh
$ http-server
```
 
Once that's done, you get a response like 
```sh
Starting up http-server, serving ./public
Available on:
  http://127.0.0.1:8080
  http://172.20.10.9:8080
```

Now you can navigate to `http://127.0.0.1:8080/` to see the app at work 😇

License
----

MIT