FROM node:latest as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:latest
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

EXPOSE 3000 

CmD [ "npm", "run" , "dev"]
