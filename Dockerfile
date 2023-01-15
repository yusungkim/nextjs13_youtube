FROM node:18

# Set the Node environment to development to ensure all packages are installed
ENV NODE_ENV development
ENV USER_NAME=nextjs13_youtube
ENV TZ=Asia/Tokyo

WORKDIR /usr/src/app

RUN adduser ${USER_NAME} && \
  chown -R ${USER_NAME} /usr/src/app
USER ${USER_NAME}

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]