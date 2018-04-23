console.log('The Pay Gap Bot vs The Internet, place your bets');

var Twit = require('twit');

var config = require('./config.js');

var Twitter = new Twit(config);


// FAVORITE BOT
// finds tweets with hashtags and favourites
var favoriteTweet = function(){
  var params = {
      q: '#paygap',  // Hashtags to favourite, can be several
      result_type: 'recent',
      lang: 'en'
  }

  // find the tweet
  Twitter.get('search/tweets', params, function(err,data){

    // find tweets
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet);   // pick a random tweet

    // if random tweet exists
    if(typeof randomTweet != 'undefined'){
      // Tell Twitter to favourite
      Twitter.post('favorites/create', {id: randomTweet.id_str}, function(err, response){
        // if there is an error
        if(err){
          console.log('Something went wrong, favorites do not work in the current economic system..');
        }
        else{
          console.log('The Pay Gap Bot favourites 1 - 0 The Patriarchy');
        }
      });
    }
  });
}
// grab & 'favorite' as soon as program is running...
favoriteTweet();
// 'favorite' a tweet in every 60 minutes
setInterval(favoriteTweet, 3600000);

// function to generating random tweet
function ranDom (arr) {
  var index = Math.floor(Math.random()*arr.length);
  return arr[index];
};

// TWEET @ NEW FOLLOWERS/ STERAM


var stream = Twitter.stream('user');

stream.on('follow', followed);

function followed(eventHolla) {
  console.log('Holla at your new allies, the Follow Bot is running');
  var name = eventHolla.source.name;
  var screenName = eventHolla.source.screen_name;

  Twitter.post('statuses/update', {
    status: '@' + screenName + ' Did you know the average woman in the UK earns £1.32/hr less than the average man?'}, tweeted);
}


// Figure out how big the FULL TIME pay gap is so far

var amount = formatMoney(amount);
var startDate = new Date(2018, 0, 01);
var currentDate = new Date();
var seconds = (startDate - currentDate) / 1000;
var modifier = seconds * 718.0362;
var current = modifier;

update();

function update() {
    amount = formatMoney(current);
}

setInterval(function(){
    current += 718.0362;
    update();
},1000);

function formatMoney(amount) {
    var pounds = Math.floor(amount).toString().split('');
    var cents = (Math.round((amount%1)*100)/100).toString().split('.')[1];
    if(typeof cents == 'undefined'){
        cents = '00';
    }else if(cents.length == 1){
        cents = cents + '0';
    }
    var str = '';
    for(i=pounds.length-1; i>=0; i--){
        str += pounds.splice(0,1);
        if(i%3 == 0 && i != 0) {
          str += ',';
        }
    }
    return '£' + str + '.' + cents;
}

//What to post to TWITTER
tweetStuff();
setInterval(tweetStuff, 1000*60*60);

function tweetStuff(){
var sentences = [

'Women working full time in the UK have so far missed out on ' + amount + ' this year',
'The median hourly gender pay gap in the UK is 9.1%, a total of ' + amount + ' this year',
'So far this year UK women working full time have missed out on ' + amount ,
'Women in the UK earn 9.1% less than than men, meaning ' + amount + ' in 2018 #paygap',
'The median pay gap of 9.1% means women working full time in the UK have missed out on ' + amount + ' this year',
'The gender pay gap means UK women are short of ' + amount + ' this year, but for educators the median more than doubles',
'The median gender pay gap is 9.1%, or ' + amount + ' so far this year. #paygap',
'UK full time working women has so far this year missed out on ' + amount ,
'Only 22% of companies pay women equal or more than men. The pay gap has deprived UK women of ' + amount + ' so far in 2018',
'Construction, finance and education are the sectors with the largest pay gap.',
'The median gender pay gap widens the more you earn, with £5.68 less per hour in the top 11% #paygap',
'The median gender pay gap shrinks the less you earn, with 42p less per hour in the bottom 10%',
'Full time working women in the UK have so far this year missed out on ' + amount ,
'Women are underrepresented in high paid positions, and so far this year the median pay gap in the UK equals ' + amount ,
'Around 41% of working women work part time, and the median hourly wage for part time work',
'Men are paid more than women in 78% of UK companies. So far this year women in full-time work have missed out on ' + amount ,
'The median gender pay gap means UK women are short of ' + amount + ' so far this year #paygap'

  ],
  maxSentences = sentences.length;

  function getRandomSentenceFullTime() {
      var index = Math.floor(Math.random() * (maxSentences - 1));
      return sentences[index];
  }

Twitter.post('statuses/update', { status: getRandomSentenceFullTime()}, tweeted);

}

// REPLY BOT

stream.on('tweet', tweetedAt);

function tweetedAt(eventHollaBack) {
  console.log('Holla back at your new allies, someone tweeted at you');

  // FIND THE DATA TO REPLY TO USERS
  // var fs = require('fs');
  // var json = JSON.stringify(eventHollaBack,null,2);
  // fs.writeFile("tweet.json", json);

  var replyto = eventHollaBack.in_reply_to_screen_name;
  var text = eventHollaBack.text;
  var from = eventHollaBack.user.screen_name;

  var sentencesHollaBack = [

  ' Women in the UK earn 9.1% less than than men, meaning a toal of' + amount + '  since January 2018',
  ' In 2017, the pay gap was 9.1%. Women in the UK are estimated to have missed out on' + amount + '  since January 2018',
  ' Since January 1st 2018, women in the UK have been paid ' + amount + ' less than men'

    ],
    maxSentences = sentencesHollaBack.length;

    function getRandomSentenceHollaBack() {
        var index = Math.floor(Math.random() * (maxSentences - 1));
        return sentencesHollaBack[index];
    }

  if (replyto === 'The_Pay_Gap_Bot'){
     Twitter.post('statuses/update', {
       status: '@' + from + getRandomSentenceHollaBack()}, tweeted);
  }
}


// WHEN WORKING FOR 'FREE' MONTHLY

stream.on('tweet', tweeted);

var todaymonthly = new Date();
var dd = todaymonthly.getDate();
// console.log(dd);

if (dd === 27){
  Twitter.post('statuses/update', {
    status: 'From today until the end of the month, women effectively work for free #paygap'}, tweeted);
}


// WHEN WORKING FOR FREE REST OF THE YEAR


var today = new Date().toISOString();
var cleanDate = today.slice(2,10); //To change the format of the date


var freework = '18-11-10';
var freeworkearly = '18-11-09';
var freetui = '18-07-11';
var freeeasyjet = '18-07-18';
var freebarclays = '18-07-25';
var freelloyds = '18-07-27';
var freeasos = '18-08-03';
var freeeton = '18-09-10';
var freetoyota = '18-09-13';
var freepepsi = '18-09-27';
var freetelegraph = '18-10-05';
var freekings = '18-10-26';
var freegoogle = '18-11-02';
var freecoke = '18-11-22';
var freecadbury = '18-11-26';
var freeikea = '18-12-10';
var freephase = '18-06-14';
var freemorgan = '18-06-18';
var freepearson = '18-05-25';


if (cleanDate === freework){
  // console.log('is date tweeting working? proably')
    Twitter.post('statuses/update', {
    status: 'From today, UK employers effectively stop paying women until the end of the year #paygap'}, tweeted);
} else if (cleanDate === freeworkearly){
  Twitter.post('statuses/update', {
    status: 'From tomorrow, the #paygap means women in the UK effectively work for free for the rest of the year'}, tweeted);
  } else if (cleanDate === freetui){
    Twitter.post('statuses/update', {
      status: 'Women working for TUI Airways Ltd effectively work for free from today. Just in time for summer holidays.'}, tweeted);
    } else if (cleanDate === freeeasyjet){
      Twitter.post('statuses/update', {
        status: 'Woman working for EasyJet? The company effectively stops paying women today until the end of the year #paygap'}, tweeted);
      } else if (cleanDate === freebarclays){
              Twitter.post('statuses/update', {
          status: 'It is the season for banks to stop paying female employees. Today, women at Barclays Bank effectively stop being paid #paygap'}, tweeted);
        } else if (cleanDate === freelloyds){
                Twitter.post('statuses/update', {
            status: 'Banks continue the negative numbers, from today women at Lloyds Bank effectively work for free for the rest of the year'}, tweeted);
          } else if (cleanDate === freeasos){
                  Twitter.post('statuses/update', {
              status: 'Despite the amount of female costumers, ASOS effectively stop paying women for the rest of the year from today'}, tweeted);
            } else if (cleanDate === freeeton){
                    Twitter.post('statuses/update', {
                status: 'All-boys school Eton College effectively stops paying their female employees from today #paygap'}, tweeted);
              } else if (cleanDate === freetoyota){
                      Twitter.post('statuses/update', {
                  status: 'Women working for Toyota effectively works for free from today #paygap'}, tweeted);
                } else if (cleanDate === freepepsi){
                        Twitter.post('statuses/update', {
                    status: 'Female employees at Pepsi effectively stops getting paid today #paygap'}, tweeted);
                  } else if (cleanDate === freetelegraph){
                          Twitter.post('statuses/update', {
                      status: 'Women working for the Telegraph Media Group effectively works for free from today #paygap'}, tweeted);
                    } else if (cleanDate === freekings){
                            Twitter.post('statuses/update', {
                        status: 'Women at Kings College Hospital effectively stops being paid today #paygap'}, tweeted);
                      } else if (cleanDate === freegoogle){
                              Twitter.post('statuses/update', {
                          status: 'Woman working at Google? Effectively, the company stops paying female employees today #paygap'}, tweeted);
                        } else if (cleanDate === freecoke){
                                Twitter.post('statuses/update', {
                            status: 'Soft drink giant Coca Cola effectively stops paying their female employees today #paygap'}, tweeted);
                          } else if (cleanDate === freecadbury){
                                  Twitter.post('statuses/update', {
                              status: 'Cadbury effectively stop paying their female employees from today. Not a sweet deal #paygap'}, tweeted);
                            } else if (cleanDate === freeikea){
                                    Twitter.post('statuses/update', {
                                status: 'Furniture giant IKEA effectively stops paying female employees from today'}, tweeted);
                              } else if (cleanDate === freephase){
                                      Twitter.post('statuses/update', {
                                  status: 'Although an overwhelming majority of female employees, Phase Eight stop paying women from today until the end of the year'}, tweeted);
                                } else if (cleanDate === freemorgan){
                                        Twitter.post('statuses/update', {
                                    status: 'J.P. Morgan LTD stop paying their female employees from today until the end of the year'}, tweeted);
                                  } else if (cleanDate === freepearson){
                                          Twitter.post('statuses/update', {
                                      status: 'Pearson Shared Services is the first FTSE 100 company out with stopping to pay their female employees from today'}, tweeted);
                                    }




//

function tweeted (err, data, response) {
if (err) {
 console.log('There was an error posting tweets');
}
else {
 console.log('The tweeting worked, time to close the gap');
 }
}
