#################Stage1######################
# Use Node.js 18.x official
FROM node:18 as builder

# Setup working dir inside container
WORKDIR /app

# Copying package.json + package-lock.json then install dependencies
COPY package*.json ./

#Run npm and install all from package.json
RUN npm install

# Copying all app's files
COPY . .

# Build IBS-Test-SPA app
RUN npm run build

#################Stage2######################
# Use NGINX official
FROM nginx:alpine

# Overide default NGINX config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copying IBS-Test-SPA App into NGINX
COPY --from=builder /app/dist/* /usr/share/nginx/html/

# NGINX will listen 80 port
EXPOSE 80
