FROM node:14-alpine as build
COPY ../../ .
RUN cd ./packages/api && yarn install --immutable && yarn build && rm -rf core

FROM node:14-alpine
WORKDIR /usr/app
COPY --from=build ./packages/api/dist /usr/app/dist
COPY package.json /usr/app/

CMD [ "yarn", "start:webprod"]
