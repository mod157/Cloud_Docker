FROM node
MAINTAINER Nammu8395@gmail.com
RUN        apt-get -y update

RUN mkdir -p /var/www/html/Cloud
COPY index.js /var/www/html/Cloud
EXPOSE 8080
CMD [ "node", "/var/www/html/Cloud/index" ]
