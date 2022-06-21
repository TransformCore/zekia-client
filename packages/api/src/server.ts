/*
 * © 2021 Thoughtworks, Inc.
 */

if (process.env.NODE_ENV === 'production') {
  require('module-alias/register')
}

import express from 'express'
import helmet from 'helmet'

import { createRouter } from './api'
import auth from './auth'
import { Logger } from '@cloud-carbon-footprint/common'

const port = parseInt(process.env.PORT) || 80
const host = process.env.HOSTNAME || '0.0.0.0'
const httpApp = express()
const serverLogger = new Logger('server')

if (process.env.NODE_ENV === 'production') {
  httpApp.use(auth)
}

httpApp.use(helmet())

httpApp.use('/api', createRouter())

httpApp.listen(port, host, null, () =>
  serverLogger.info(
    `Cloud Carbon Footprint Server listening at http://${host}:${port}`,
  ),
)
