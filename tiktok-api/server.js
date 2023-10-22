import { exec } from 'child_process';
import express from 'express'

const app = express()
app.post('/api/hashtag/:hashtag', (req, res) => {
  exec(`python server.py ${req.params.hashtag}`, (err, stdout, stderr) => {
    if (err) {
         console.log(err);
         res.sendStatus(500);
         return;
    }

    let data = stdout.split('\r\n');
    console.log(data)
    data.pop();
    res.json({ data: data })
})
})

app.listen(8080, () => console.log('Server ready'))

