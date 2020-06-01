var postmark = require("postmark");

const { 
    FROM_EMAIL,
    KEY,
    TO_EMAIL,
 } = process.env

module.exports = {
    name: '@netlify/plugin-emailplugin',
    onEnd: async () => {
        if (!FROM_EMAIL) {
            throw new Error('No sender email present')
          }
          if (!TO_EMAIL) {
            throw new Error('No recipient email present')
          }
          if (!KEY) {
            throw new Error('No KEY present')
          }

          const client = new postmark.ServerClient(KEY);
          const message = 'Hello Boss, we just deployed some bug fixes'
          const { alert } = await client.sendEmail({
            From: FROM_EMAIL,
            To: TO_EMAIL,
            Subject: "New Deploy",
            TextBody: message,
          }) 
          console.log(alert)
    },
}