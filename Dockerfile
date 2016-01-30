FROM node:0.12

# work dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install bower
RUN npm install -g bower

# install node packages
COPY package.json /usr/src/app/
RUN npm install

# install bower packages
COPY bower.json /usr/src/app/
COPY .bowerrc /usr/src/app/
RUN bower install --allow-root

# copy and build front-end stuff
COPY public /usr/src/app/public
COPY client /usr/src/app/client
COPY shared /usr/src/app/shared
COPY node_modules /usr/src/app/node_modules
COPY gulpfile.js /usr/src/app/
RUN node_modules/gulp/bin/gulp.js build

# copy app into work dir
COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]
