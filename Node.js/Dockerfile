FROM node
MAINTAINER Nammu8395@gmail.com
RUN        apt-get -y update

RUN mkdir -p /home/opc/cloud
WORKDIR /home/opc/cloud
COPY index.js /home/opc/cloud

RUN npm install mysql --save
RUN npm install express --save

EXPOSE 8080
CMD [ "node", "/home/opc/cloud/index" ]
