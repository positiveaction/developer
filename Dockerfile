FROM node:12.10.0
WORKDIR /app/website
COPY ./ ./
RUN yarn install
RUN yarn build
ENTRYPOINT yarn serve --host 0.0.0.0

