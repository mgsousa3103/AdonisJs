<h2 align="center">
API RESTFull with AdonisJS
</h2>

<p align="center">This API was created with the educational purpose for learning the framework</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/github/license/mgsousa3103/AdonisJs" alt="License MIT">
  </a>
</p>

## Features

These are some resources that were used in this project

- 💹 AdonisJS
- 📄 Postgres

## Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Getting started

1. Clone this repo using `git clone https://github.com/mgsousa3103/AdonisJs.git`
2. Move yourself to the appropriate directory: `cd AdonisJs`

#### Getting started with the application

For this project you will need [Redis](https://redis.io/) and [Postgres](https://www.postgresql.org/) on your machine. I used [Docker](https://www.docker.com/) to install them.

1. Run `yarn install` to install dependencies
2. Access the `.env` file and change the settings. Look at the `.env.example` file if in doubt.
3. Run your Postgres and Redis database
4. Run `adonis migration:run` to make the migrations
5. Run `adonis serve --dev` to start the application
6. Use [Insomnia](https://insomnia.rest/) as a frontend interface to interact with the API

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) page for details
