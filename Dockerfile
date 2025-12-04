FROM node:21
WORKDIR "/opt/good-hamburguer"
COPY . ./
# COPY package*.json .
# RUN npm i
EXPOSE "3000"
CMD ["sleep", "infinity"]