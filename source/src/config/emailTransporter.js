const config = require('config');
const mailConfig = config.get('mail');
const nodemailer = require('nodemailer');
// const nodemailerStub = require('nodemailer-stub');

const transporter = nodemailer.createTransport({ ...mailConfig });

module.exports = transporter;
