FROM node:0.12

# install node packages
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]
