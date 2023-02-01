require('dotenv/config');

const { SECRETKEY } = process.env;

if (SECRETKEY === '1234') {
    console.log('Success!');
}

console.log(SECRETKEY)
console.log(process.env.SECRETKEY)
console.log(process.env)