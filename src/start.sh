#!/bin/bash
echo Starting Container

#load the i2c kernel module
modprobe i2c-dev

#start our node.js process
node /usr/src/app/main.js
