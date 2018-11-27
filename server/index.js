const booksData = require('./books');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
const express = require('express');

const { 
    max, 
    map, 
    isString
} = require('lodash');

function* idSequence(initial) {
  let i = initial;
  while (true) { yield i++; } // eslint-disable-line no-constant-condition, no-plusplus
}

const booksIdGen = idSequence(max(map(booksData, 'id')) + 1);

const isBook = (book) => !!book.title && isString(book.title) && !!book.authors && isString(book.authors);
const hasBook = (req, res, next) => {
    if (isBook(req.body)) {
        next();
    } else {
        res.status(404).json({ error: 'invalid payload structure' });
    }
}
const byId = (id) => (book) => book.id === +id;


 // ----------  EXPRESS ----------

const app = express();
app.use(bodyParser.json()); 
app.use(morgan('combined'));
app.use(compression({
    filter: (req, res) => {
      // First condition from default implementation
      const isCompressedByContentType = /json|text|javascript|dart|image\/svg\+xml|application\/x-font-ttf|application\/vnd\.ms-opentype|application\/vnd\.ms-fontobject/.test(res.getHeader('Content-Type'));
      const isAnImage = req.url.startsWith('/static/media') || req.url.startsWith('/image'); 
      return isCompressedByContentType || !isAnImage;
    }
  }));

app.get('/api/books', (req, res) => {
  res.json(booksData);
});

app.post('/api/book', hasBook, (req, res) => {
    if (req.body.id) {
        const book = booksData.find(byId(req.body.id));
        if (book) {
            const updatedBook = req.body;
            Object.assign(book, updatedBook);
            res.json(book);
        } else {
            res.status(404).json({ error: 'book not found' });
        }
    } else {
        const newBook = req.body;
        newBook.id = booksIdGen.next().value;
        booksData.push(newBook);
        res.json(newBook);
    }
});



app.get('/api/book/:id', (req, res) => {
  const book = booksData.find(byId(req.params.id));
  book ? res.json(book) : res.status(404).json({ error: 'book not found' });
});


function matchBooksForQuery(query) {
    const text = query.text ? query.text.toLowerCase() : null;
    const bookObjToStr = (book) => JSON.stringify(book).toLowerCase();
    return booksData
        .map(({title, authors}) => ({title, authors})) // expose fields available for search (here hde id)
        .filter((book) => bookObjToStr(book).includes(text));
}

app.get('/api/search', (req, res) => {
  res.json(matchBooksForQuery(req.query));
});

let delayedRequest = false;
app.get('/api/search/delay', (req, res) => {
  const matches = matchBooksForQuery(req.query);
  
  if (delayedRequest) {
    console.log(`Serving delayed for search query: ${req.query.text}`);
    setTimeout(() => res.json(matches), 2000)
  } else {
    console.log(`Serving instantly for search query: ${req.query.text}`);
    res.json(matches);
  }
  delayedRequest = !delayedRequest;
});


app.listen(8080, () => console.log('Books REST API running on port 8080'));