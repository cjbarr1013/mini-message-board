require('dotenv').config();
const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  username VARCHAR ( 255 ),
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username)
VALUES
  ('Hi there!', 'Amando'),
  ('Hello World!', 'Charles'); 
`;

async function main() {
  console.log('seeding...');
  console.log('process.env.DATABASE_URL', process.env.DATABASE_URL);
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
