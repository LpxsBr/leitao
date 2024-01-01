const Express = require('express')

const path = require('path');
const { getHost, getFreeSpace, getTotalSpace, getUsedSpace } = require('./src/app.js');
// getHost

const app = Express()

const public = path.join(__dirname, 'public')

app.use(Express.json());

app.get('/', Express.static(public))

app.get('/app/host',
    (req, res) =>
        res.status(200).json(
            {
                msg: String(getHost())
            }
        )
)

app.get('/app/memory',
    (req, res) =>
        res.status(200).json(
            {
                total: String(getTotalSpace() / 1024 / 1024 / 1024),
                total: String(getUsedSpace() / 1024 / 1024 / 1024),
                free: String(getFreeSpace() / 1024 / 1024 / 1024)
            }
        )
)

app.listen(8000,
    (req, res) =>
        console.log('serving')
)