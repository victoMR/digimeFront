import React from 'react';
import ClientTemplate from '../templates/ClientTemplate';

const Victormanuelrangelmejia = () => {
  const contactInfo = {
    phone: '4426039356',
    phoneCode: '+52',
    email: 'vmrmtoweb@gmail.com',
    whatsapp: 'https://wa.me/4426039356',
    twitter: 'https://x.com/undefined',
    linkedin: 'https://linkedin.com/in/victorrangelm',
    instagram: 'https://instagram.com/undefined',
  };

  const content = `Estudiante de desarrollo de software`;

  // Genera la URL de la imagen desde el servidor backend
  const imageUrl = `https://media.licdn.com/dms/image/v2/D4E35AQGz1N8RXmWXdg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1709495636771?e=1735952400&v=beta&t=Ozv00odjEGquKtLJfJ4L_yU8dTVtfTjt3IIKBAoQedY`;

  return (
    <ClientTemplate
      name="Victor Manuel Rangel Mejia"
      phone={contactInfo.phone}
      phoneCode={contactInfo.phoneCode}
      email={contactInfo.email}
      whatsapp={contactInfo.whatsapp}
      twitter={contactInfo.twitter}
      linkedin={contactInfo.linkedin}
      instagram={contactInfo.instagram}
      content={content}
      specialization="Desarrollo de software"
      imageUrl={imageUrl}
      terms={true}
      pdfUrl={'https://portfoliovmrmaws.s3.amazonaws.com/docs/Curriculum%20Vitae%20VMRM%20V2.pdf'}

    />
  );
};

export default Victormanuelrangelmejia;
