/* eslint-disable */

const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()

require('dotenv').config()

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname,
  remoteRoot: process.env.REMOTE_ROOT,
  include: [
    'styles/css/*',
    'styles/css/*/**',
    'scripts/*',
    'scripts/*/**',
    'utils/*',
    'utils/*/**',
    'websites/*.php',
    'websites/*/**.php',
    'index.php'
  ],
  deleteRemote: false,
  forcePasv: true
}

ftpDeploy
  .deploy(config)
  .then(() => console.log('DEPLOY COMPLETED'))
  .catch(err => console.log(err))

ftpDeploy.on('uploading', function(data) {
  console.log(`Total Files: ${data.totalFilesCount}`)
  console.log(`Transfered Files: ${data.transferredFileCount}`)
  console.log(`Current File: ${data.filename}`)
})

/* eslint-enable */
