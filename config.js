//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349030547659";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "trye";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "trye";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUdXUmxmT2xMcUZ0QlIxWHI2MnpnNzd4NWp4U2QrT1ZBdjlSamtrOWhWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGxiVm5sL2FJMDVEMVloS3VwVlBBY1Fmc2RtSlM5UW84anZMMVZtOWlBOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Rmg3T3lhbDMxYXhZSzFSS3cwbVFiY2VUeUZ0UHVjNmM1cFBuNEFqVlZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlcERCL3dSQ2pmR3FKRW85Z0poZUFzMHN5MTlVZyt4ZisyRDBuU3EvRUJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhDRTFldFdORW9abnZaMWRJUnEycEwwdS9CUjdvbXlSN05WTk93UlhhRUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRNTEY2M09pb3l5cXVpZWlZVHd2ay9Zc3FnYlFiTU5jQ1lWZml0Mml1M0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU5hUHBBcE1lU1loVFhpcFhmd29MVDhzN2hXMXdzMGljMTdMNmJVb2puMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWNiR1J2d2F3M2N0dytrNFNrTW10a0hXSzU5WlIyckVxSTZmU0NndmxnYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxuS1E1ZEI1UEo4N3NqcEU1WThxZTVZSkVtWTJCUmlxRzdxWmQxT0dOcW9Za3RSNnZaWUc0MWJkeGl2YlJlelk2c0N4TC9kMGhNNzdGZXloejB1ckJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzUsImFkdlNlY3JldEtleSI6Ilc1eGtoQW04cllDcmZYUThQd3loSDRqL2JnRlNYMjRYVjFYbW0zMWYxWWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InFaODNwUXZXUlVXOUlPSVFBTmhNVHciLCJwaG9uZUlkIjoiNDNhNjYwOTktMjZlMy00NzcyLWI3Y2ItZDlkNGFhMjA2ZDcyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNGc1RTWVE3TWxGNkU5WjhOTnBhTm1adG43dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRWE1bnBvWXpZZm1hOTBMSEVPQnZVeU1rMXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0xUVzg5OUYiLCJtZSI6eyJpZCI6IjIzNDkwMzA1NDc2NTk6ODlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lDZXIva0JFSXJIcWJZR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImozVnFYOHcvNDJEaHpUL1R2Ym41MHFteTNPTnJlS1I0VkZUWjRnalorU0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlkwUjBlN0h1Y0dnZXREdExzOUttWG50djF6em5vWDlWbzAwTHVPemlJNTBHcy9pclR3TEZGRlp1ajJaUlZEbDlVZ01tRi9KWmhNbU11Wk0zSk90VUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIybTBIUnN2TnJiL2ptclR0Ujc1K3p6czROeEZacjFacDZkNElSMVF6ZFgrZGR2MzZRSEtoN3ZxUzFhcHhFWVVITGdVT2xjZlNRRHVKL1kyN3VydzREdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMzA1NDc2NTk6ODlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWTkxYWwvTVArTmc0YzAvMDcyNStkS3BzdHpqYTNpa2VGUlUyZUlJMmZraCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDUzOTc5OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBaTIifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "⚡",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "dutchdking",
  ownername: process.env.OWNER_NAME || "dutchdking",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
