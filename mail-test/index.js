const nodemailer = require("nodemailer");
const fs = require('fs');

const transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 587,
    secure: false,
    auth: {
        user: '1739932260@qq.com',
        pass: 'uzbrejuistnqcdbe'
    },
});

async function main() {
  const info = await transporter.sendMail({
    from: '"buchiyu" <1739932260@qq.com>',
    to: "2637653330@qq.com",
    subject: "Hello 222",
    html: fs.readFileSync('./test.html')
  });

  console.log("邮件发送成功：", info.messageId);
}

main().catch(console.error);
