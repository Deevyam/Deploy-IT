FROM ubuntu:focal

RUN apt-get update
RUN apt-get install -y curl 
# curl for api calling cli tool 
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
# Installing Node Js 20    
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

RUN apt-get install git -y

WORKDIR /home/app
#Main.sh is shell script  that will be executed when the container starts up
#COPY ./main.sh . means copy main
COPY main.sh main.sh
COPY script.js script.js
COPY package*.json .

RUN npm install

RUN chmod +x main.sh
RUN chmod +x script.js

ENTRYPOINT [ "/home/app/main.sh" ]