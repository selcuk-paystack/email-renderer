const express = require('express');
const previewEmail = require('./services/emailTemplateService');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

previewEmail();
