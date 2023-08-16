FROM node:16.14.0

WORKDIR /code

COPY . .

RUN npm install -g jest
RUN npm install
RUN npm install --platform=linux --arch=arm64v8 sharp
