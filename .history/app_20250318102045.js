const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')

const posts = [
    {title: 'Title 1', body: 'Welcome' },
    {title: 'Title 2', body: 'To' },
    {title: 'Title 3', body: 'The' },
    {title: 'Title 4', body: 'Page' },
]
const user = {
    firstName: 'Khalil',
    lastName: 'Olaes',
}
app.get('/', (req, res) => {
    res.render('pages/index', {
        user,
        title:"Home Page"
    })
})
app.get('/articles', (req, res) => {
    res.render('pages/articles', {
        articles: posts,
        title:"Home Page"
    })
})
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})