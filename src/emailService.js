import { Resend } from 'resend';

const apiKey = 're_VoArj5TF_JnfnBrg1UXjGNpR7vRQzUc55';
const resend = new Resend(apiKey);

const sendEmail = async (formData) => {
  const { name, email, phone, work, quantity, size, location, message } = formData;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'arenadoslucho@hotmail.com', 
      subject: `Solicitud de Presupuesto (${name} de ${location})`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Trabajo a Arenar:</strong> ${work}</p>
        <p><strong>Cantidad:</strong> ${quantity}</p>
        <p><strong>Medidas:</strong> ${size}</p>
        <p><strong>Ubicación:</strong> ${location}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    console.log('Correo electrónico enviado exitosamente');
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
  }
};

export default sendEmail;
