FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json* ./
COPY yarn.lock* ./

RUN npm ci || npm install

COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
