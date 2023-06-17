FROM node:16.14.0

WORKDIR /code

COPY . .

RUN npm install
