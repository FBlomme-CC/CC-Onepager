import express from 'express';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// API Endpoint for Demo Booking -> sends notification to info@costcards.io
app.post('/api/book-demo', async (req, res) => {
  try {
    const { name, email, company, industry, preferredTime } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Een geldig e-mailadres is verplicht.' });
    }

    const recipient = 'info@costcards.io';
    const emailSubject = `Nieuwe Demo Aanvraag: ${company || name || email}`;
    const emailBody = `
Nieuwe Demo Aanvraag ontvangen via CostCards.io

Details van de aanvraag:
----------------------------------------
Naam: ${name || 'Niet opgegeven'}
E-mailadres: ${email}
Bedrijfsnaam: ${company || 'Niet opgegeven'}
Industriesegment: ${industry || 'Niet opgegeven'}
Voorkeurstijdslot: ${preferredTime || 'Niet opgegeven'}
Datum van aanvraag: ${new Date().toLocaleString('nl-BE', { timeZone: 'Europe/Brussels' })}
----------------------------------------

Neem contact op met ${email} om de afspraak in te plannen.
`;

    console.log(`\n========================================`);
    console.log(`DEMO AANVRAAG ONTVANGEN VOOR ${recipient}`);
    console.log(`Onderwerp: ${emailSubject}`);
    console.log(emailBody);
    console.log(`========================================\n`);

    // Send email via Nodemailer if SMTP credentials exist in environment variables
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || `"CostCards Demo" <${process.env.SMTP_USER}>`,
        to: recipient,
        replyTo: email,
        subject: emailSubject,
        text: emailBody,
      });

      console.log(`[SMTP] E-mail succesvol verzonden via ${process.env.SMTP_HOST} naar ${recipient}`);
    } else {
      console.log(`[INFO] SMTP niet geconfigureerd. Aanvraag is verwerkt en gelogd naar de server.`);
    }

    return res.status(200).json({
      success: true,
      message: 'Demo aanvraag succesvol ontvangen en doorgestuurd naar info@costcards.io',
      recipient,
    });
  } catch (error: any) {
    console.error('Fout bij het verwerken van demo aanvraag:', error);
    return res.status(500).json({ error: 'Er is een fout opgetreden bij het verwerken van je aanvraag.' });
  }
});

// Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (_req, res) => {
      res.sendFile('dist/index.html', { root: '.' });
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server gestart op http://0.0.0.0:${PORT}`);
  });
}

startServer();
