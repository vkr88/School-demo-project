import contectModul from "../Modul_schema/Contect_me.js";


export const Contect = async (req, res) => {
  const { Full_Name, Number, email, message } = req.body;

  try {
    const newEntry = new contectModul({ Full_Name, Number, email, message });
    await newEntry.save();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'your_email@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${Full_Name}\nEmail: ${email}\nPhone: ${Number}\nMessage: ${message}`
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, msg: 'Message sent & saved' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
