# ZooService

We've all been there. You have too many animals and too little time.
Well, intrepid reader, look no further! With this API you can keep track of all of your zoo animals and how many legs they have.

## Getting Started

You need to install PostgreSQL, nodejs, and yarn on your system
Then a simple `yarn install` will take care of your dependencies

A sample of my private zoo database has been uploaded for your convenience in `dump.sql`. You should be able to pass this to `psql` and get up and running fairly quickly, but if you want to run the migrations yourself you can:

    npx knex migrate:latest --env development
    npx knex migrate:latest --env test
    npx knex seed:run --env development
    npx knex seed:run --env test
    
That should get you up and running with a random set of quirky animals on port 3000.

### Testing

To make sure everything is koscher, you can run `yarn test` which will run some chai tests against the various features of the API.

### Running the Server

To actually run the server, simply run `yarn dev`, and the server will restart if any changes are made to source files.

## API

ZooService exposes one endpoint (/critter on port 3000) with a variety of options:

* `GET /critter` will return all critters in the table
* `GET /critter/:id` will return the critter with the provided id, if it exists
* `GET /critter?query=string` will return the subset of critters which match the user's query (keys other than "type", "legs", "color", and "name" are ignored)
* `POST /critter` accepts json input and will return snarky error messages if your critter is malformed
* `PUT /critter/:id` also accepts json input and updates the existing critter at :id to match the data sent
* `DELETE /critter/:id` removes the given critter from the database

## TODO

Some nice to haves to round this little mock service out

* Authentication
* Fuzzy search (right now it is exact)
* Handler or Staff table that relates to critters (i.e. Handler Bob is responsible for George the monkey on Tuesdays and Thursdays)
* Dockerfile
