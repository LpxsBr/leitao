const os = require('os')

module.exports = {
    getHost: () => os.hostname(),
    getFreeSpace: () => os.freemem(),
    getTotalSpace: () => os.totalmem(),
    getUsedSpace: () => Number(os.totalmem()) - Number(os.freemem()),
    getCPUS: () => os.cpus(),
    getPlatform: () => os.platform(),
}