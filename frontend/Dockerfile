FROM node:10-alpine

WORKDIR /server

COPY . /server

RUN npm install -g typescript
RUN npm install react-responsive-modal --save
RUN npm install


EXPOSE 3000
CMD [ "npm", "start" ]
