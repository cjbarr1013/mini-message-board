require('dotenv').config();
const { Client } = require('pg');
const { argv } = require('node:process');

const SQL = `
DELETE FROM messages; 
`;

async function main() {
  console.log('seeding...');
  console.log('connection string:', argv[2]);
  const client = new Client({
    connectionString: argv[2],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
