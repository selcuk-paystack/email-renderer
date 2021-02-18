const Email = require('email-templates');
const sampleData = require('../data/sampleData');

const previewEmail = () => {
  const email = new Email({
    message: {
      from: 'elonmusk@tesla.com',
      to: 'to@email.com',
    },
    send: false,
    transport: {
      // jsonTransport: true,
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
    // When set to true, a preview will automatically open on our default browser, if you use firefox there is an
    // additional setting to configure (check email-templates docs)
    preview: true,
    views: {
      map: {
        // For data mappings, we use handlebars
        hbs: 'handlebars',
      },
      options: {
        // This refers the the file extension of our email templates, supports ejs/pug and a few others
        extension: 'hbs',
      },
      // These are the variables that we want to inject into our templates
      locals: sampleData,
    },
  });

  /**
   * Should we want to test emails in the future
   * we have nodemailer support and can extend in below
   */
  email
    .send({
      template: 'handleBarsTemplate',
      /* locals: {
            name: 'Elon'
        }, */
    })
    .then(response => {
      console.log('success', response);
    })
    .catch(console.error);
};

module.exports = previewEmail;
