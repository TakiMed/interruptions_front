FROM node:16.8-alpine AS builder

RUN mkdir /app

WORKDIR /app
COPY package.json package-lock.json ./

COPY . ./
RUN $(npm bin)/ng build


FROM nginx:1.17-alpine
COPY ../data/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/academy2021 /usr/share/nginx/html