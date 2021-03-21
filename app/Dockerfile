FROM node:15-alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache python g++ make
RUN yarn install --production
CMD ["node", "src/index.js"]
