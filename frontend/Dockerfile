FROM node:10

WORKDIR /server

COPY . /server
RUN npm install -g typescript
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]
