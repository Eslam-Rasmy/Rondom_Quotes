var Quotes = [
    {
        'quote': 'Be yourself; everyone else is already taken.',
        'writer': 'Oscar Wilde'
    },
    {
        'quote': 'So many books, so little time.',
        'writer': 'Frank Zappa'
    },
    {
        'quote': 'A room without books is like a body without a soul.',
        'writer': 'Marcus Tullius Cicero'
    },
    {
        'quote': 'You only live once, but if you do it right, once is enough.',
        'writer': 'Mae West'
    },
    {
        'quote': 'Be the change that you wish to see in the world.',
        'writer': 'Mahatma Gandhi'
    },
    {
        'quote': 'In three words I can sum up everything I\'ve learned about life: it goes on',
        'writer': 'Robert Frost'
    },
    {
        'quote': 'If you tell the truth, you don\'t have to remember anything.',
        'writer': 'Mark Twain'
    },
    {
        'quote': 'To live is the rarest thing in the world. Most people exist, that is all.',
        'writer': 'Oscar Wilde'
    },
    {
        'quote': 'It is better to be hated for what you are than to be loved for what you are not.',
        'writer': 'Andre Gide'
    },
];

var count = -1;

function generate() {
    var sameNumber;
    do {
        sameNumber = Math.floor(Math.random() * Quotes.length);
    } while (sameNumber === count);

    document.getElementById('quote').innerHTML= `\"${Quotes[sameNumber].quote}\"`;
    document.getElementById('quote2').innerHTML= `--${Quotes[sameNumber].writer}`;

    count = sameNumber;
}