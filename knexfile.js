module.exports = {
    test: {
        client: 'pg',
        connection: 'postgres://localhost/zooservice_test',
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds/test'
        }
    },
    development: {
        client: 'pg',
        connection: 'postgres://localhost/zooservice',
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds/development'
        }
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds/production'
        }
    }
};
