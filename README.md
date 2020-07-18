# actions-qywx-bot

> 企业微信机器人

## Usage

| option | required | description                                          |
| ------ | -------- | ---------------------------------------------------- |
| key    | true     | 企业微信 key                                         |
| body   | true     | 企业微信 API 支持的合法 body, 和扩展 message, 见下文 |

## Example

### send markdown

```json
{
  "msgtype": "markdown",
  "markdown": {
    "content": "实时新增用户反馈<font color=\"warning\">132例</font>，请相关同事注意。\n> 类型:<font color=\"comment\">用户反馈</font>\n> 普通用户反馈:<font color=\"comment\">117例</font>\n> VIP用户反馈:<font color=\"comment\">15例</font>"
  }
}
```

## 扩展 message

### imageFile 发送图片文件

body 参数:

| option   | required | description      |
| -------- | -------- | ---------------- |
| msgtype  | true     | 写死 `imageFile` |
| filePath | true     | 图片路径         |

```json
{ "msgtype": "imageFile", "filePath": "./static/image.jpg" }
```

### fileByName 发送文件

body 参数:

| option   | required | description       |
| -------- | -------- | ----------------- |
| msgtype  | true     | 写死 `fileByName` |
| filePath | true     | 文件路径          |
| filename | false    | 文件名, 可选      |

```json
{ "msgtype": "fileByName", "filePath": "./README.md", "filename": "README.md" }
```

## License

MIT &copy; zcong1993
