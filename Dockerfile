FROM node:boron

WORKDIR /opt/app

# Install Caddy Webserver
ADD https://devops.bt.siemens.com/artifactory/libs-external/linux-software/caddy/caddy_linux_amd64 .
RUN chmod 0755 caddy_linux_amd64

# Expose Port
EXPOSE 8100

# Start Application
CMD ["./caddy_linux_amd64", "-port", "8100", "-root", "./dist", "tls off"]

# Reduce log level
ENV NPM_CONFIG_LOGLEVEL warn

# Install SiMPL Tools
RUN npm install simpl-cli --global --registry https://devops.bt.siemens.com/artifactory/api/npm/npm-all && \
    simpl config

# Install Dependencies
COPY package.json .
# Copy README.md to prevent warning about missing README
COPY README.md .
RUN npm install

# Copy Sources
COPY . .

# Build and cleanup everything but the result
RUN npm run build && \
    find -maxdepth 1 -not -name dist -not -name caddy_linux_amd64 -not -name . -exec rm -rf {} \;
