FROM nikolaik/python-nodejs:python3.8-nodejs10-alpine
#FROM node:current-alpine
RUN apk --no-cache add git

RUN apk --no-cache add curl

ENV app="/home/app"

WORKDIR "$app"

COPY ["package.json","yarn.lock", "$app/"]

RUN yarn install

COPY ["/","$app/"]

RUN yarn build

EXPOSE 3000

CMD yarn start
