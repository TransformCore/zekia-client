# to build typescript
FROM node:20-alpine as build
COPY ../../ .
RUN cd ./packages/api && \
    yarn install --prod --immutable && \
    yarn build && \
    rm -rf core

# to run the api
FROM node:20-alpine
WORKDIR /usr/app
COPY --from=build ./packages/api/dist ./dist
COPY --from=build ./packages/api/package.json .
RUN yarn install --immutable --prod

CMD [ "yarn", "start:webprod"]
