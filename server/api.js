import express from 'express';
const router = express.Router();

router.get('/data', (req, res) => {
  const data = {
    data: {
      name: 'bar-ssr'
    }
  };

  res.json(data);
});


export default router;
