## NextJS + PrismaJS Starter with Server Side Authentication

This is just some starter files that I'm putting here for personal use, but do what ever you want with it.

### Initialize the project `/backend`

* `prisma init name_of_the_project`

* create an `.env` file with the following parameters:
  - `PRISMA_MANAGEMENT_API_SECRET`
  - `JWT_SECRET`
  - `MONGO_DB_URL` e.g.: `mongodb+srv://username:password@cluster.net/admin`

* Install the deps `yarn install`

* Start the docker container with `docker-compose up -d` 

* Start the server with `yarn dev`

### Initialize the project `/frontend`

* Install the deps `yarn install`
* Run `yarn dev`