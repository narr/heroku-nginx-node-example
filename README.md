# heroku-nginx-node-example
[![Build Status](https://travis-ci.org/Narr-/heroku-nginx-node-example.svg?branch=master)](https://travis-ci.org/Narr-/heroku-nginx-node-example)

An example of using Nginx as Reverse Proxy for Node server on Heroku
Check out <http://nginx-node-example.herokuapp.com/>

You will see the X-Powered-By(Express) header at the response for the request of http://nginx-node-example.herokuapp.com/. Other paths(Static contents) are just from Nginx.
<br>

## By Heroku Toolbet

Make sure you have [Heroku Toolbelt](https://toolbelt.heroku.com/) installed and locate Nginx config(nginx.conf.erb) in config folder and Procfile at the project root path.

```sh
$ cd "to your Project Folder"
$ heroku create [APP NAME] --buildpack https://github.com/ddollar/heroku-buildpack-multi.git
$ git remote add heroku https://git.heroku.com/[APP NAME].git
$ echo "https://github.com/ryandotsmith/nginx-buildpack.git" >> .buildpacks
$ echo "https://github.com/heroku/heroku-buildpack-nodejs.git" >> .buildpacks
$ git add -A
$ git commit -m "init"
$ git push heroku master
$ heroku logs -t
```

Your app should now be running on http://[APP NAME].herokuapp.com/.
<br>

## Deploying to Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
<br>

## References

- http://stackoverflow.com/questions/17745308/have-you-managed-to-make-your-node-nginx-proxy-setup-on-heroku-work
- https://github.com/ryandotsmith/nginx-buildpack
