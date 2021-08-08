const quotes = [
    { quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ",
      author:"Albert Einstein",
    },
    {quote:"Be yourself; everyone else is already taken.",
    author:"Oscar Wilde",

    },
    {quote:"So many books, so little time. ",
    author:"Frank Zappa",

    },
    {quote:"You only live once, but if you do it right, once is enough.",
    author:" Mae West",

    },
    {quote:"Be the change that you wish to see in the world. ",
    author:"Mahatma Gandhi",

    },
    {quote:"In three words I can sum up everything I've learned about life: it goes on. ",
    author:"Robert Frost",

    },
    {quote:"If you tell the truth, you don't have to remember anything.",
    author:"Mark Twain",

    },
    {quote:"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    author:"Martin Luther King Jr",

    },
    {quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author:"Ralph Waldo Emerson",

    },
    {quote:"To Travel is to Live",
    author:"Hans Christian Andersen",
    },
]
const quote = document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
