const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "diplom735@gmail.com",
		pass: "bthj lxbv udlx kzfk",
	},
});

const formController = {
	sendUserData: async (req, res) => {
		try {
			const { name, phone } = req.body;

			const mailOptions = {
				from: "diplom735@gmail.com",
				to: "diplom735@gmail.com",
				subject: "Тема письма",
				text: `Имя: ${name}\nТелефон: ${phone}`,
			};

			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					res.status(500).json({
						error: "Ошибка отправки электронной почты",
					});
				} else {
					res.json({ message: "Данные успешно отправлены на почту" });
				}
			});
		} catch (error) {
			console.error("Ошибка при отправке данных на почту:", error);
			res.status(500).json({
				error: "Ошибка при отправке данных на почту",
			});
		}
	},
};

module.exports = formController;
