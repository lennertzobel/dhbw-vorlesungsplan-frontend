FROM node:alpine AS node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --configuration=production

FROM nginx:stable-alpine
COPY --from=node /app/dist/dhbw-vorlesungsplan /usr/share/nginx/html
COPY --from=node  /app/nginx.conf /etc/nginx/conf.d/default.conf
