require('dotenv/config');

const { secretKey } = process.env;

if (secretKey === '1234') {
    console.log('Success!');
} else {
    console.log('Failure :(');
}