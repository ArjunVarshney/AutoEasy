#!/bin/bash

#  if the build is passed then re build the project otherwise run the app as it is.
if [ "$1" == "build" ]
then
   echo "Building you app"
   docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
   # docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --scale app=3 -d --build
else
   echo "Starting"
   docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
   # docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --scale app=3 -d
fi