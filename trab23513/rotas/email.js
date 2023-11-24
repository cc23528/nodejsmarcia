const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "seuemail@gmail.com",
        pass: "suasenha",
    },
});

const enviarEmail = (destinatario, assunto, texto) => {
    const mailOptions = {
        from: "seuemail@gmail.com",
        to: destinatario,
        subject: assunto,
        text: texto,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("E-mail enviado: " + info.response);
        }
    });
};

module.exports = enviarEmail;
