// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import AxiosWrapper from "./AxiosWrapper"

export default function handler(req, res) {
  const { q } = req.query
  AxiosWrapper.get('/items', { params: { q } })
    .then((response) => {
      res.status(200).json(response.data).end()
    })
    .catch((error) => {
      res.status(500).json(error).end()
    })
}
