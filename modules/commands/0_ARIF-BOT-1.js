const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "ARIF BOT",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "prem bot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

var tl = ["Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karunga" , "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya?😜" , "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , " Arif babu Ko Bol Dunga Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bejjati Karne Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Ib Aja Yahan Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jara Tu 😈" , "Aagye Salle Kabab Me Haddi 😏" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao 😒" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Karen Rahul JaNu Ke SaTh Busy Hun 🤭🐒" , "Main flirty logo Sy Bt Nhi karti 😉😝😋🤪" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki 😶🤍" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahike🤐🤣 " , "Haa ji boliye kya kam he hamse 🙈" , "Aree band kar band Kar" , "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye" , "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h" , " mera owner Ake tera bf/gf Ko Chura le Jayega" , "Bot bot hi karta rahna tu bas" , "Tujhe Apna Bejjati Karne Ka Saukh hai?🥹" , "Abhi Bola Toh Bola Dubara Mat Bolna🙄" , "Teri to Watt lagani padegi " , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "IB Aja Yahan Nhi B0ol Sakti 🙈😋" , "Mujhe Mat BuLao Na Main buSy h0 Now" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bolo 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎kya likha tumne mene nahi dikha🤣" ,  "Pahale NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahi hoon kya hua sweetheart🥂🙈💞 ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor Dunga🤣✊" , "yes my love 💘" , "kya hua baby ko 😘😘" , "mujhe sharam ati hai aise aap bolte hai tho 🤭😝" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho 😂" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️" , "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂" , "ary ary bolo meri jaan kia haal hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪 " , "kyun Bulaya hamen..😾🔪"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("yah sab mat bhejo mere sir mein Dard hota ha", threadID);
   };

     if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("𝐒𝐚𝐝 𝐍𝐚𝐡 𝐡𝐨 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧.🫂 𝐉𝐨 𝐃𝐚𝐫𝐝 𝐃𝐢𝐤𝐡𝐭𝐞 𝐍𝐚𝐡𝐢 𝐕𝐨 𝐃𝐮𝐤𝐡𝐭𝐞 𝐁𝐚𝐡𝐮𝐭 𝐇𝐚𝐢 🤧", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️𝐇𝐌𝐌 𝐇𝐌𝐌 𝐍𝐀 𝐊𝐀𝐑𝐊𝐄 𝐒𝐈𝐃𝐇𝐀 𝐒𝐈𝐃𝐇𝐀 𝐁𝐎𝐋𝐎 𝐇𝐄𝐘 𝐌𝐀𝐑𝐑𝐘 𝐌𝐄 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "🥺🥺🥺") || (event.body.toLowerCase() == "🥺🥺") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺🥺🥺")) {
     return api.sendMessage("️𝐊𝐘𝐀 𝐊𝐘𝐀 , 𝐑𝐎 𝐊𝐘𝐔 𝐑𝐄𝐇𝐄 𝐇𝐎 , 𝐌𝐄 𝐇𝐔 𝐍𝐀 𝐓𝐎 𝐅𝐇𝐈𝐑 𝐊𝐘𝐔 𝐑𝐎𝐍𝐀 . 𝐑𝐔𝐊𝐎 𝐌𝐄 𝐀𝐁𝐇𝐈 𝐂𝐇𝐎𝐂𝐎𝐋𝐀𝐓𝐄 𝐃𝐄𝐓𝐀 𝐇𝐔 𝐋𝐈𝐊𝐇𝐎 🍫  ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("️𝐊𝐘𝐀 𝐇𝐔𝐀 𝐁𝐀𝐁𝐔 🤔🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️𝐊𝐘𝐀 𝐇𝐔𝐀 𝐁𝐇𝐎𝐎𝐓 𝐃𝐄𝐊𝐇 𝐋𝐈𝐘𝐀 𝐊𝐘𝐀 👻👻", threadID);
   };

  if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("️️️𝐓𝐢𝐫𝐜𝐡𝐢 𝐧𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐦𝐨𝐫𝐢 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 🙈", threadID);
   };

  if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
     return api.sendMessag("itna mast haso Babu 🤣🙄", threadID);
   };

   if ((event.body.toLowerCase() == "🤦") || (event.body.toLowerCase() == "🤦🤦")) {
     return api.sendMessage("𝐀𝐑𝐄 𝐀𝐏𝐍𝐄 𝐌𝐔𝐇 𝐏𝐄 𝐊𝐘𝐔 𝐌𝐀𝐀𝐑 𝐑𝐀𝐇𝐄 𝐇𝐎 𝐌𝐔𝐉𝐇𝐄 𝐁𝐀𝐓𝐀𝐎 𝐊𝐘𝐀 𝐇𝐔𝐀 ?😬", threadID);
   };

  if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎")) {
     return api.sendMessage("𝐇𝐘𝐄 𝐀𝐀𝐏𝐊𝐀 𝐂𝐇𝐀𝐒𝐇𝐌𝐀 𝐁𝐈𝐋𝐊𝐔𝐋 𝐁𝐄𝐊𝐀𝐑 𝐇𝐀𝐈  🤣", threadID);
   };

  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂") || (event.body.toLowerCase() == "😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂😂")) {
     return api.sendMessage("𝐉𝐘𝐀𝐃𝐀 𝐌𝐀𝐓 𝐇𝐀𝐍𝐒𝐎 𝐕𝐀𝐑𝐍𝐀 𝐃𝐀𝐍𝐓 𝐓𝐎𝐃 𝐃𝐔𝐍𝐆𝐀 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😄") || (event.body.toLowerCase() == "😆")) {
     return api.sendMessage("𝐄𝐍𝐍𝐈 𝐇𝐀𝐒𝐈 𝐊𝐘𝐔 𝐀𝐀 𝐑𝐄𝐇𝐈 𝐇𝐀𝐈 🤣 𝐄𝐒 𝐇𝐀𝐒𝐈 𝐊𝐀 𝐑𝐀𝐀𝐙 𝐊𝐘𝐀 𝐇𝐀𝐈𝐍 𝐁𝐀𝐓𝐀𝐎", threadID);
   };

   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍😍😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "😍😍")) {
     return api.sendMessage("Haaye Rabba inna pyar🙊🙊", threadID);
   };

   if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯") || (event.body.toLowerCase() == "🤯🤯🤯") || (event.body.toLowerCase() == "🤯🤯🤯🤯") || (event.body.toLowerCase() == "🤯🤯🤯🤯🤯")) {
     return api.sendMessage("AAPKI SIR DHAKKAN KHOL GAYA 🙄🙄", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("𝐒𝐀𝐀𝐋𝐎 𝐂𝐇𝐈𝐃𝐃𝐀 𝐑𝐀𝐇𝐄 𝐇𝐎 𝐌𝐔𝐉𝐇𝐄 🙁👈", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️𝐊𝐘𝐀 𝐇𝐔𝐀 𝐓𝐀𝐁𝐈𝐘𝐀𝐓 𝐊𝐇𝐀𝐑𝐀𝐁 𝐇𝐀𝐈 𝐊𝐘𝐀 𝐌𝐔𝐉𝐇𝐄 𝐁𝐀𝐓𝐀𝐎 𝐌𝐄 𝐀𝐁𝐇𝐈 𝐌𝐄𝐃𝐈𝐂𝐈𝐍𝐄 💊💉𝐋𝐄 𝐀𝐀𝐓𝐀 𝐇𝐔 😇", threadID);
   };

   if ((event.body.toLowerCase() == "😒😒") || (event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒😒")) {
    return api.sendMessage("️️️𝐓𝐢𝐫𝐜𝐡𝐢 𝐧𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐦𝐨𝐫𝐢 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("𝐊𝐇𝐔𝐃 𝐁𝐀𝐍𝐀 𝐋𝐎 𝐓𝐔𝐌𝐊𝐎 𝐊𝐔𝐂𝐇 𝐍𝐀𝐇𝐈 𝐀𝐀𝐓𝐀 𝐊𝐘𝐀 😏👈", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("️𝐌𝐀𝐍 𝐓𝐎𝐇 𝐀𝐂𝐂𝐇𝐀 𝐍𝐀𝐇𝐈 𝐊𝐀𝐌 𝐒𝐄 𝐊𝐀𝐌 𝐒𝐇𝐀𝐊𝐀𝐋 𝐓𝐎 𝐀𝐂𝐂𝐇𝐀 𝐊𝐀𝐑 𝐋𝐎 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 😝", threadID);
   };

  if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("️𝐌𝐀𝐍 𝐓𝐎𝐇 𝐀𝐂𝐂𝐇𝐀 𝐍𝐀𝐇𝐈 𝐊𝐀𝐌 𝐒𝐄 𝐊𝐀𝐌 𝐒𝐇𝐀𝐊𝐀𝐋 𝐓𝐎 𝐀𝐂𝐂𝐇𝐀 𝐊𝐀𝐑 𝐋𝐎 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 😝", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥🤥")) {
     return api.sendMessage("️𝐁𝐇𝐀𝐈 𝐓𝐄𝐑𝐈 𝐓𝐎 𝐍𝐀𝐀𝐊 𝐇𝐈 𝐄𝐓𝐍𝐈 𝐋𝐀𝐌𝐁𝐈 𝐇𝐀𝐈 𝐔𝐒𝐊𝐈 𝐉𝐀𝐑𝐔𝐑𝐀𝐓  𝐇𝐈 𝐍𝐀𝐇𝐈 𝐏𝐀𝐃𝐓𝐈 𝐇𝐎𝐆𝐈 𝐓𝐔𝐉𝐇𝐄 𝐓𝐎 🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("️𝐀𝐀𝐍𝐊𝐇 𝐊𝐘𝐔 𝐌𝐀𝐀𝐑 𝐑𝐀𝐇𝐄 𝐇𝐎 𝐌𝐄 𝐁𝐇𝐔𝐓 𝐒𝐇𝐀𝐑𝐄𝐄𝐅 𝐇𝐔 🥺🤟", threadID);
   };

  if ((event.body.toLowerCase() == "🙆") || (event.body.toLowerCase() == "🤦")) {
     return api.sendMessage("🤦🤦🤦", threadID);
   };

   if ((event.body.toLowerCase() == "name kya h") || (event.body.toLowerCase() == "naam kya hai") || (event.body.toLowerCase() == "naam kiya hai")) {
     return api.sendMessage("️𝐍𝐀𝐌𝐄 𝐌 𝐊𝐘𝐀 𝐑𝐀𝐊𝐊𝐇𝐀 𝐇𝐀𝐈 𝐓𝐔𝐌 𝐊𝐀𝐌 𝐏𝐄 𝐃𝐇𝐘𝐀𝐍 𝐃𝐎 😝👈", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("️𝐊𝐘𝐀 𝐊𝐘𝐀 , 𝐑𝐎 𝐊𝐘𝐔 𝐑𝐄𝐇𝐄 𝐇𝐎 , 𝐌𝐄 𝐇𝐔 𝐍𝐀 𝐓𝐎 𝐅𝐇𝐈𝐑 𝐊𝐘𝐔 𝐑𝐎𝐍𝐀 . 𝐑𝐔𝐊𝐎 𝐌𝐄 𝐀𝐁𝐇𝐈 𝐂𝐇𝐎𝐂𝐎𝐋𝐀𝐓𝐄 𝐃𝐄𝐓𝐀 𝐇𝐔 𝐋𝐈𝐊𝐇𝐎 🍫  ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️𝐌𝐀𝐓 𝐃𝐄𝐊𝐇𝐎 𝐌𝐄𝐑𝐈 𝐏𝐇𝐎𝐓𝐎 𝐌𝐀𝐈𝐍 𝐁𝐇𝐔𝐓 𝐊𝐀𝐋𝐀 𝐇𝐔 😢👈", threadID);
   };

   mess = "{name}"

  if (event.body.indexOf("BABU") == 0 || (event.body.indexOf("babu") == 0)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

       }

module.exports.run = function({ api, event, client, __GLOBAL }) { }

