const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348129362224";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_21_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMsXG4gICAgICAgIDg4LFxuICAgICAgICA3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxLFxuICAgICAgICA5NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODksXG4gICAgICAgIDQwLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNixcbiAgICAgICAgMTEyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc1LFxuICAgICAgICA2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODksXG4gICAgICAgIDc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgNzksXG4gICAgICAgIDQxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDk1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk4LFxuICAgICAgICA1MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM2LFxuICAgICAgICA0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMCxcbiAgICAgICAgNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODEsXG4gICAgICAgIDY0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkk5Q0o5OTd4WEx2SlVSb1dvM3Ziekc2cHBBdVRRMzY2Nk56MExWQUV1Tnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJ0UkNQV0xCVHNtbDkzM3NpYVUwZ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmUxMTQ0MjQtMjQ2My00NzkwLTk2NmMtY2UwNzg1YTc1OWM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDEzMyxcbiAgICAgIDEzMixcbiAgICAgIDIwNyxcbiAgICAgIDEyNixcbiAgICAgIDIzMCxcbiAgICAgIDEwMixcbiAgICAgIDE1MixcbiAgICAgIDE0MSxcbiAgICAgIDE0LFxuICAgICAgMTkzLFxuICAgICAgMjQ3LFxuICAgICAgNDQsXG4gICAgICAyNDMsXG4gICAgICAxNjEsXG4gICAgICAxMzYsXG4gICAgICAxMixcbiAgICAgIDIzNCxcbiAgICAgIDE1OSxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDUzLFxuICAgICAgMTI3LFxuICAgICAgNjUsXG4gICAgICA1MSxcbiAgICAgIDY3LFxuICAgICAgMTgyLFxuICAgICAgMzMsXG4gICAgICAyNTEsXG4gICAgICAyMDYsXG4gICAgICAxMDgsXG4gICAgICA2MSxcbiAgICAgIDEwNixcbiAgICAgIDEzNixcbiAgICAgIDEyNyxcbiAgICAgIDIwNCxcbiAgICAgIDQ3LFxuICAgICAgMTk2LFxuICAgICAgMTczLFxuICAgICAgMjAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhLNUdHN1I3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTI5MzYyMjI0OjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWlyYWNsZSBFZGV0IE9rb25cIixcbiAgICBcImxpZFwiOiBcIjEzNTYzMDg3MjkyODM4OTo0NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMNkt1VGNRMy9MU3N3WVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFwSjdCZHlmVm1iU0FQTmpOVHEwZ2hNandGWnRTTVVPLy9sOUxJRklxeTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRVNhTERvdWFObElLL1A5cWVRZk9OMDZZREh6Tmh6MnQ3cGJBK0RiNzhUbS9vNGd2ZW9IdVpQYU9uWEo5QWY0WmNlcDJjQW1KUGJEUkN5aUxSRWpCQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidnlNRFBZVlM3TWM1MFdrZjV2WUpPaHBPYkJzanBhK2ZVQ2l6SFo0WmJCWmxjcFRoZTI4WHJFaEUyb3RsZ0lraUpaTVVqdGdFMXhXTGE0Uml1VWo3Z2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyOTM2MjIyNDo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg5MjU2NjZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
