/* Copyright (C) 2021 Hisham Muhammed .
Git link https://github.com/Hisham-Muhammed/Sophia
Youtube : https://youtube.com/c/ICHUTECH
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Amdi = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');

// LIST
const Language = require('../language');
const Lang = Language.getString('effects');

if (Config.WORKTYPE == 'private') {

    Amdi.applyCMD({pattern: 'glitch ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=qamdi5652&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'pemoji ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
        
    var uri = encodeURI(match[1])
    
    var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=fHZpP3j61LgH80BzanBm92jch1Q&emoji=' + uri, { responseType: 'arraybuffer' })
    
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot ' })

    }));


    Amdi.applyCMD({pattern: 'fflogo ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'qr ?(.*)', fromMe: true,  deleteCommand: false,  desc: Lang.QR_DESC}, (async (message, match) => {

      if (match[1] === '') return await message.sendMessage(Lang.NEED_TEXT);
  
      var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })
  
      await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: "Copyright © 2021 | Sophia Bot "})
  
    }));

    Amdi.applyCMD({pattern: 'shadow ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
      var webimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy1/shadow?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
  
      }));

    Amdi.applyCMD({pattern: 'cup ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
    
        var webimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy1/cup?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
    
    }));

    Amdi.applyCMD({pattern: 'gneon ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
    
        var webimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/greenneon?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
    
    }));

    Amdi.applyCMD({pattern: 'wolfm ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
      var webimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy1/wolfmetal?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
  
  }));

  Amdi.applyCMD({pattern: 'ml ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/mlwall?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

  Amdi.applyCMD({pattern: 'hacker ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

  Amdi.applyCMD({pattern: 'flame ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy1/flamming?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

  }));

    Amdi.applyCMD({pattern: 'avenger ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'vintage ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
    
    var topText, bottomText;
      if (match[1].includes('/')) {
          var split = match[1].split('/');
          bottomText = split[1];
          topText = split[0];
  }
  
      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto2/realvintage?apikey=qamdi5652&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
  
      }));

    Amdi.applyCMD({pattern: 'v3d ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'holo ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
    
        var webimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/holographic?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
    
    }));
    
    Amdi.applyCMD({pattern: 'sand ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
    
        var webimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/sandsummer?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
    
    }));

    Amdi.applyCMD({pattern: 'valorant ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
     var topText, bottomText;
      if (match[1].includes('/')) {
          var split = match[1].split('/');
          bottomText = split[2];
          midText = split[1];
          topText = split[0];
  }
      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto3/valorantbanner?apikey=qamdi5652&text1=${topText}&text2=${midText}&text3=${bottomText}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
  
      }));

    Amdi.applyCMD({pattern: 'thunder ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/thundertext?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'light ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'metal ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/metallogo?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'royal ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
    
        var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/glossychrome?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
    
    }));

    Amdi.applyCMD({pattern: 'sad ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
    
        var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/wetglass?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
    
    }));

    Amdi.applyCMD({pattern: 'candy ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/sweetcandy/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'dota ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
  
    }));

    Amdi.applyCMD({pattern: 'lol ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
  
    }));

    Amdi.applyCMD({pattern: 'aov ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/aovwall?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
  
    }));

    Amdi.applyCMD({pattern: 'grafiti ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto2/cutegravity?apikey=qamdi5652&text1=${match[1]}&text2=QueenAmda`, { responseType: 'arraybuffer' })
  
     await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
  
      }));

    Amdi.applyCMD({pattern: 'harrypotter ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy1/harrypotter?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'sparkling ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy2/arcade8bit?apikey=qamdi5652&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'watercolour ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/watercolor?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'ninjalogo ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.Lang.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'neonlight ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/futureneon?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'sandwriting ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'cloud ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/cloud?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'pornhub ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'snow ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/snow3d?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'lionlogo ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

   var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}
    var webimage = await axios.get(`https://api.lolhuman.xyz/api/textprome2/lionlogo?apikey=qamdi5652&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'gaming ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/logogaming?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'fpslogo ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/fpslogo?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'lovemsg ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'blood ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/bloodfrosted?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'bplogo ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: '3dtext ?(.*)', fromMe: true,  deleteCommand: false,  dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/box3d?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Amdi.applyCMD({pattern: 'glitch ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=qamdi5652&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'cup ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
    
        var webimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy1/cup?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
    
    }));

    Amdi.applyCMD({pattern: 'v3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'dota ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
  
    }));

    
    Amdi.applyCMD({pattern: 'lol ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
  
    }));

    

    Amdi.applyCMD({pattern: 'hacker ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
  
     await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
  
      }));

    
    Amdi.applyCMD({pattern: 'sad ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/wetglass?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
  
  }));

    
    Amdi.applyCMD({pattern: 'valorant ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
     var topText, bottomText;
      if (match[1].includes('/')) {
          var split = match[1].split('/');
          bottomText = split[2];
          midText = split[1];
          topText = split[0];
  }
      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto3/valorantbanner?apikey=qamdi5652&text1=${topText}&text2=${midText}&text3=${bottomText}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
  
      }));

    Amdi.applyCMD({pattern: 'gaming ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/logogaming?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'gneon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
    
        var webimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/greenneon?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
    
    }));

    Amdi.applyCMD({pattern: 'sand ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
    
        var webimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/sandsummer?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
    
    }));

    Amdi.applyCMD({pattern: 'royal ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
    
        var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/glossychrome?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
    
    }));

    
    Amdi.applyCMD({pattern: 'fpslogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/fpslogo?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'lovemsg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));

    Amdi.applyCMD({pattern: 'ml ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/mlwall?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
  
     await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
  
      }));

    Amdi.applyCMD({pattern: 'aov ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
      var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/aovwall?apikey=qamdi5652&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})
  
    }));

    Amdi.applyCMD({pattern: 'bplogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Sophia Bot '})

    }));
}