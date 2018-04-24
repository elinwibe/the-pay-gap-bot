# the-pay-gap-bot

<a href="https://twitter.com/The_Pay_Gap_Bot">This is the Pay Gap twitter bot</a>, a bot created with JavaScript and Node.js which run on Heroku. It tweets and favourites on intervals, tweets at specific dates and days, replies to mentions and greets new followers.

In order to make the bot run you need your Twitter API keys (add under config.js) and the twit package installed. 

To run it on Heroku, have Git and the Heroku toolbelt installed. You'll also need a Procfile (in the case of this bot, it reads: worker: node bot.js), to avoid Heroku running the code as a web app rather than a worker. 

An info page for the bot can be found <a href="http://igor.gold.ac.uk/~eespm001/thePayGap/PayGapBot.html">here</a>
