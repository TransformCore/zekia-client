FROM node:14-alpine
WORKDIR /usr/src/app
RUN yarn build && \
  yarn install --immutable && \
  rm -rf core

CMD [ "yarn", "start:webprod"]
