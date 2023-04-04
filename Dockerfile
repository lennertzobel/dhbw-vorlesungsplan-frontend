FROM nginx:stable-alpine
COPY /dist/dhbw-vorlesungsplan /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
