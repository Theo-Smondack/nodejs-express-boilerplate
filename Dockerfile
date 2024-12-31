FROM node:22-alpine

WORKDIR /home/node/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npx tsc

CMD ["npm", "start"]
