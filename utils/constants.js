const whatsappMessages = [
  "I hope this message finds you well. I promise I'm not a bot!",
  "Hello there! I've ventured through the labyrinthine depths of your website to find a way to contact you. Success!",
  "Greetings, fellow internet dweller! I come in peace, and I come via your website.",
  "I'm not a tech wizard, but I managed to navigate your website and find this chat button. Please tell me there's a prize for my achievement!",
];

module.exports = {
  BASE_URL: process.env.REACT_APP_BASE_URL,
  DRIBBBLE_AUTH_KEY: process.env.DRIBBBLE_AUTH_KEY,
  ARUN_IMAGE_DESKTOP: process.env.REACT_APP_ARUN_IMAGE_DESKTOP,
  MEDIUM_PROFILE_FEED: process.env.REACT_APP_MEDIUM_PROFILE_FEED,
  WHATSAPP_LINK: process.env.REACT_APP_WHATSAPP_LINK,
  RESUME_LINK: process.env.REACT_APP_RESUME_LINK,
  ARUN_IMAGE_MOBILE: process.env.REACT_APP_ARUN_IMAGE_MOBILE,
  whatsappMessages,
};
