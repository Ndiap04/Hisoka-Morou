/**
   * Create By SendiAp.
   * Contact Me on wa.me/6285894831504
   * Follow https://github.com/SendiAp
*/

const fs = require('fs')
const chalk = require('chalk')

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id',
}

// Free Apikey
global.APIs = {
	riy: 'https://api-xriy04.herokuapp.com',
}

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

// Website Api
global.APIs = {
	zenz: 'https://api.zahwazein.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.zahwazein.xyz': 'Your Key',
}

// Other
global.owner = ['6285894831504']
global.ownernomer = ['6285313937918','6285894831504']
global.pro = ['6285894831504']
global.premium = ['6285894831504']
global.voice = ['6285894831504']
global.packname = 'BottyCu-Bot'
global.author = 'WhatsApp Bot'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    pro: 'Fitur ini khusus pengguna premium',
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    voice: 'Kamu belum membeli fitur ini!',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 20
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
