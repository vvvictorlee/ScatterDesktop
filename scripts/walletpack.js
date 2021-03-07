const childProcess = require('child_process');


const packages = [
	'core',
	'roxe',
	'eosio',
	'tron',
	'bitcoin',
	'ethereum',
];

const args = process.argv.slice(2);
const isLocal = args[0] || false;

let installString = `yarn add `;

packages.map(pack => {
    let p = '@vvvictorlee2020/';
    if (pack == "roxe") {
        p = '@vvvictorlee2020/';
    }
	installString += `${isLocal ? 'file:../../Libraries/@vvvictorlee2020/packages/' : p}${pack} `
});

console.log(installString);
const p = childProcess.exec(installString);
p.on('error', function (err) { console.error(err); });
p.on('exit', function (code) { console.log('exited', code); });

