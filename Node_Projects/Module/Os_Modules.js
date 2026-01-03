// node_os_module_operations.js
// Demonstrates commonly used operations of Node.js 'os' module

const os = require('os');

console.log('=== BASIC SYSTEM INFO ===');
console.log('OS Platform        :', os.platform());
console.log('OS Type            :', os.type());
console.log('OS Release         :', os.release());
console.log('OS Version         :', os.version());
console.log('Architecture       :', os.arch());
console.log('Hostname           :', os.hostname());

console.log('\n=== USER INFO ===');
console.log('Current User       :', os.userInfo());

console.log('\n=== CPU INFO ===');
const cpus = os.cpus();
console.log('CPU Count          :', cpus.length);
console.log('CPU Model (0)      :', cpus[0].model);
console.log('CPU Speed (MHz)    :', cpus[0].speed);

console.log('\n=== MEMORY INFO ===');
console.log('Total Memory (GB)  :', (os.totalmem() / 1024 ** 3).toFixed(2));
console.log('Free Memory (GB)   :', (os.freemem() / 1024 ** 3).toFixed(2));

console.log('\n=== SYSTEM UPTIME ===');
console.log('Uptime (seconds)   :', os.uptime());
console.log('Uptime (hours)     :', (os.uptime() / 3600).toFixed(2));

console.log('\n=== NETWORK INTERFACES ===');
const networks = os.networkInterfaces();
for (const name of Object.keys(networks)) {
  for (const net of networks[name]) {
    if (net.family === 'IPv4' && !net.internal) {
      console.log(`${name} -> IP: ${net.address}, MAC: ${net.mac}`);
    }
  }
}

console.log('\n=== DIRECTORY & PATH INFO ===');
console.log('Home Directory     :', os.homedir());
console.log('Temp Directory     :', os.tmpdir());

console.log('\n=== OS CONSTANTS ===');
console.log('End Of Line (EOL)  :', JSON.stringify(os.EOL));

console.log('\n=== LOAD AVERAGE (UNIX ONLY) ===');
console.log('Load Average       :', os.loadavg());

console.log('\n=== PRIORITY (PROCESS) ===');
try {
  console.log('Current Priority   :', os.getPriority());
  // os.setPriority(10); // Uncomment to change priority (may need permission)
} catch (err) {
  console.log('Priority Error     :', err.message);
}

console.log('\n=== END OF OS MODULE DEMO ===');
