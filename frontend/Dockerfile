FROM nginx:alpine
FROM node:10

WORKDIR /server

COPY . /server
COPY /public/index.html usr/share/nginx/html

RUN npm install -g typescript
RUN npm install react-responsive-modal --save
RUN npm install


EXPOSE 3000
CMD [ "npm", "start" ]
