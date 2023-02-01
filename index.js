require('dotenv/config');

const { SECRETKEY } = process.env;

if (SECRETKEY === '1234') {
    console.log('Success!');
} else {
    console.log(SECRETKEY)
    console.log('Failure :(');
}