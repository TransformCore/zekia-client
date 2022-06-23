/*
 * © 2021 Thoughtworks, Inc.
 */

if (process.env.NODE_ENV === 'production') {
  require('module-alias/register')
}

import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

import { createRouter } from './api'
import auth from './auth'
import { Logger } from '@cloud-carbon-footprint/common'

const port = parseInt(process.env.PORT) || 80
const httpApp = express()
const serverLogger = new Logger('server')

const corsOptions = {
  origin: 'https://zekia.io',
  optionsSuccessStatus: 200
}

if (process.env.NODE_ENV === 'production') {
  httpApp.use(auth)
}

httpApp.use(helmet())
httpApp.use(cors(corsOptions))
httpApp.use('/', createRouter())

httpApp.listen(port, () =>
  serverLogger.info(
    `Zekia Server listening on port ${port}.`,
  ),
)
