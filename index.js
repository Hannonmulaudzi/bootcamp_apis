import express from 'express';
import longestWord from './bootcamp/longestWord.js'
import shortestWord from './bootcamp/shortestWord.js'
import wordLengths from './bootcamp/wordLengths.js'
import greet from './bootcamp/greet.js'
import greetWidget from './bootcamp/greet-widget.js'
import bill from './bootcamp/bill.js'
import billWidget from './bootcamp/billWidget.js'
import totalPhoneBill from './bootcamp/totalPhoneBill.js'
import enoughAirtime from './bootcamp/enoughAirtime.js'
import enoughAirtimeWidget from './bootcamp/enoughAirtimeWidget.js'
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))

app.get('/api/word_game', function (req, res) {
    const sentence = req.query.sentence;
    console.log(sentence);
    if (!sentence) {
        res.json({
            error: 'please send in a sentence to analyse'
        })
    }


    res.json({
        "longestWord": longestWord(sentence),
        "shortestWord": shortestWord(sentence),
        "wordLengths": wordLengths(sentence),
        "status": 'success'
    });

}); 

app.post('/api/phonebill/total', function (req, res) {
    const string = req.body.string;

    console.log( req.body);
    res.json({
        "totalPhoneBill": totalPhoneBill(string),
    })

});

app.get('/api/phonebill/prices')

app.get('/api/getting', (req, res) => {
    console.log('request received');
})

app.post('/api/greet', (req, res) => {
    const name = req.body.name;
    console.log(req.body);
    res.json({
        message: greet(name)
    })
})

const PORT = process.env.PORT || 6007
app.listen(PORT, function () {
    console.log('api started on ', PORT)

})

