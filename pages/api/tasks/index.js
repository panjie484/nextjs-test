export default async function handler(req, res) {
  const { body, url } = req
  let result = 'index.ok'

  switch (req.method) {
    case 'GET':
      res.status(200).json({result, url, message: 'GET', body})
      break
    case 'POST':
      res.status(200).json({result, url, message: 'POST', body})
      break
    default:
      res.status(405).end()
      break
  }
}
