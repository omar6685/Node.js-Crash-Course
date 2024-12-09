import crypto from 'crypto';

//createHash()
// const hash = crypto.createHash('sha256');
// 
// hash.update('pass12345');
// console.log(hash.digest('hex'));

// randomBytes()
// crypto.randomBytes(64, (err, buf) => {
//     if (err) throw err;
//     console.log(`${buf.toString('hex')}`);
// }
// );

// createCipheriv & createDecipheriv

const algorithm = 'aes-192-cbc';
const key = crypto.randomBytes(24);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello World', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);