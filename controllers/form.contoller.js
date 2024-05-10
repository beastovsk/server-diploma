const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "madymarovakylbek01@gmail.com",
		pass: "bthj lxbv udlx kzfk",
	},
});

const formController = {
	sendUserData: async (req, res) => {
		try {
			const { name, phone } = req.body;
			let text = `Имя: ${name}\nТелефон: ${phone}`;

			if (req.body.target && req.body.deviceCounter) {
				text = `Имя: ${name}\nТелефон: ${phone}\nДля чего нужен интернет: ${req.body.target}\nКоличество девайсов: ${req.body.deviceCounter}`;
			}

			const mailOptions = {
				from: "madymarovakylbek01@gmail.com",
				to: "madymarovakylbek01@gmail.com",
				subject: "Заявка от клиента",
				text,
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
