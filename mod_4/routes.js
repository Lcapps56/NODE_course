const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if (url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Node webpage</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" ><button type="submit">Submit</button></form</body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/message' && method === 'POST'){
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end', () => {
            console.log(Buffer)
            const parseBody = Buffer.concat(body).toString()
            const message = parseBody.split('=')[0]
            console.log(parseBody)
            fs.writeFileSync('message.txt', message, err => {
                res.writeHead(302, {'Location': '/'})
                return res.end()

            })
        })
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Node webpage</title></head>')
    res.write('<body><h1>This is the main page</h1></body>')
    res.write('</html>')
    res.end()

}



module.exports = requestHandler