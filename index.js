const ReadLine = require("readline");
const Chalk = require("chalk");
const RiveScript = require("rivescript");

const bot = new RiveScript();
const rl = new ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

bot.loadFile('./training-data.rive', function(){
    bot.sortReplies();
    ask();
}, function(error){
    console.log('Error reading training data: ' + error);
});

function ask() {
    rl.question('You: ', (message) => {
        var reply = bot.reply('local-user', message);
        console.log(Chalk.red('Jarvis: ' + reply));
        ask();
    });
}