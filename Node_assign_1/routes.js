
const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if (url === "/"){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>This is the main page</h1>')
        res.write('<form action="/create-user" method="POST">')
        res.write('<input type="text" name="message" /><button type="submit">Submit</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    if(url === "/users"){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<body><ul><li>User 1</li></ul></body>')
        res.write('</html>')
        return res.end()
    }
    if(url === "/create-user" && method === "POST"){
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end', () => {
            console.log(Buffer)
            const parseBody = Buffer.concat(body).toString()
            const message = parseBody.split('=')[1]
            console.log(parseBody)
        })
    }
}

module.exports = requestHandler