const getSettings = (): {
  whatsAppLink: string;
  facebookLink: string;
  instagramLink: string;
  correoLink: string;
} => {
  const whatsAppLink = process.env.WHATSAPP_LINK;
  const facebookLink = process.env.FACEBOOK_LINK;
  const instagramLink = process.env.INSTAGRAM_LINK;
  const correoLink = process.env.CORREO_LINK;

  if (
    whatsAppLink === undefined ||
    facebookLink === undefined ||
    instagramLink === undefined ||
    correoLink === undefined
  ) {
    throw Error("Faltaron links por agregar en el ambiente");
  }
  return {
    whatsAppLink,
    facebookLink,
    instagramLink,
    correoLink,
  };
};

const Settings = getSettings();

export default Settings;
