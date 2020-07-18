import * as core from '@actions/core'
import { Bot } from 'qiyeweixin-bot'

const IMAGE_FILE_TYPE = 'imageFile'
const FILE_BY_NAME = 'fileByName'

const getMsgType = (body: string): string => {
  const reg = /"msgtype": "(?<msgtype>[a-zA-Z]+)"/
  const groups = body.match(reg).groups
  return groups.msgtype
}

async function run(): Promise<void> {
  try {
    const key = core.getInput('key')
    const body = core.getInput('body')
    core.info(`Send body: ${body}`)

    const bot = new Bot({ key })

    try {
      const msgType = getMsgType(body)
      if (msgType === IMAGE_FILE_TYPE) {
        const data = JSON.parse(body)
        await bot.sendImageFile(data.filePath)
      } else if (msgType === FILE_BY_NAME) {
        const data = JSON.parse(body)
        await bot.sendFile(data.filePath, data.filename)
      } else {
        await bot.send(body as any)
      }
    } catch (requestErr) {
      core.error(
        `send request error, status: ${requestErr.response?.status}, data: ${requestErr.response?.data}`
      )
      core.warning(requestErr.message)
      return
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
