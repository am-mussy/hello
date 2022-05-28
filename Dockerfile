FROM node

WORKDIR /app

COPY . ./hello

RUN npm install

EXPOSE  3000

CMD ["node", "index.js"]