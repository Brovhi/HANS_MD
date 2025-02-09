const { cmd } = require('../command');
const fetch = require('node-fetch');

cmd({
    pattern: "gdrive",
    alias: ["gdrivefile"],
    react: "📂",
    desc: "📥 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗳𝗶𝗹𝗲𝘀 𝗳𝗿𝗼𝗺 𝗚𝗼𝗼𝗴𝗹𝗲 𝗗𝗿𝗶𝘃𝗲",
    category: "📁 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱",
    filename: __filename
},
async (conn, mek, m, { from, quoted, args, q, reply }) => {
    try {
        if (!q) return reply("🌀❌ *『 𝗣𝗹𝗲𝗮𝘀𝗲 𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝗚𝗼𝗼𝗴𝗹𝗲 𝗗𝗿𝗶𝘃𝗲 𝗹𝗶𝗻𝗸! 』* ❌🌀");

        const apiUrl = `https://api.davidcyriltech.my.id/gdrive?url=${encodeURIComponent(q)}`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (!data || !data.success || !data.download_link) {
            return reply("🔮🚫 *『 𝗘𝗿𝗿𝗼𝗿 𝗳𝗲𝘁𝗰𝗵𝗶𝗻𝗴 𝗳𝗶𝗹𝗲. 𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗹𝗶𝗻𝗸 𝗼𝗿 𝗮𝗰𝗰𝗲𝘀𝘀 𝗱𝗲𝗻𝗶𝗲𝗱! 』* 🚫🔮");
        }

        let desc = `
✦♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢✦
   ✧𝗚𝗢𝗢𝗚𝗟𝗘 𝗗𝗥𝗜𝗩𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥✧
✦♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢✦

❈➤ 𝗙𝗜𝗟𝗘 𝗡𝗔𝗠𝗘 ➟ 『 𝗕𝗼𝗹𝗱 ${data.name} 』
❈➤ 𝗦𝗧𝗔𝗧𝗨𝗦 ➟ 📤 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗶𝗻𝗴...

✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦

▣ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 ➟ 𝗛𝗮𝗻𝘀 𝗕𝘆𝘁𝗲 𝗠𝗗 ༗
▣ 𝗦𝗲𝗿𝘃𝗲𝗿 ➟ 𝗖𝗹𝗼𝘂𝗱-𝗖𝗱𝗻 ༗
`;

        await conn.sendMessage(from, { text: desc }, { quoted: mek });

        await conn.sendMessage(from, { 
            document: { url: data.download_link }, 
            mimetype: "application/octet-stream", 
            fileName: `『 ✦ ${data.name} ✦ 』`, 
            caption: `
♚ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘𝗗 ♚

✧ 𝗙𝗶𝗹𝗲 ➟ ${data.name}
✧ 𝗦𝗶𝘇𝗲 ➟ ${data.size || 'N/A'}
✧ 𝗤𝘂𝗮𝗹𝗶𝘁𝘆 ➟ 𝗟𝗼𝘀𝘀𝗹𝗲𝘀𝘀

▣ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 ➟ 𝗛𝗮𝗻𝘀 𝗕𝘆𝘁𝗲 𝗠𝗗 ༗
▣ 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 ➟ 𝗖𝗹𝗼𝘂𝗱-𝗖𝗱𝗻 ༗
` 
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply("🌀⚠️ *『 𝗘𝗿𝗿𝗼𝗿 𝗽𝗿𝗼𝗰𝗲𝘀𝘀𝗶𝗻𝗴 𝗿𝗲𝗾𝘂𝗲𝘀𝘁! 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿 』* ⚠️🌀");
    }
});