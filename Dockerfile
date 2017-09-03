FROM node:6.11.0

RUN npm i -g babel-cli

WORKDIR /gittoken-database-manager

ADD . .

RUN npm install
RUN npm run build

ENTRYPOINT npm run start
