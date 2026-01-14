# Stage 1: Build the application using Node.js
FROM node:21-alpine3.23 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Use Nginx to serve the frontend content
FROM nginx:stable-alpine3.23
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]