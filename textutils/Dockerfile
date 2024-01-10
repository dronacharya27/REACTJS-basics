FROM node:latest

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install --save-dev nodemon

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev"]

