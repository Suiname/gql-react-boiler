# base image
FROM node

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
COPY ./hab/package.json .
# install and cache app dependencies
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

COPY ./hab .
# start app
CMD ["npm", "start"]