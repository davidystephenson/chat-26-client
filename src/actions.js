import request from 'superagent'

export function sendMessage (message) {
  console.log('sendMessage test:', message)

  const body = { message }

  request
    .post('http://localhost:4000/message')
    .send(body)
    .then()

  return { type: 'MESSAGE_SENT' }
}
