FROM node
MAINTAINER Nammu8395@gmail.com
RUN        apt-get -y update

RUN mkdir -p /usr/src/cloud
COPY index.js /usr/src/cloud
EXPOSE 8080
CMD [ "node", "/usr/src/cloud/index" ]
