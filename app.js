
AskForNumber();

function ConvertTemp(temperature) {
  
    if(isNaN(temperature))
    {
        return console.log("That's not a number (NAN).");
    }
    else return ((temperature * 9) / 5 ) + 32;
  
  }

function AskForNumber()
{
    console.log("Enter Celsius temperature to convert to Fahrenheit: ");
    process.stdin.setEncoding('utf8');
    var InputTemp;
    process.stdin.on('readable', function() 
    {
        InputTemp = parseFloat(process.stdin.read());
        if(typeof InputTemp == "number")
        { 
            if (InputTemp !== null) 
            {
                console.log(ConvertTemp(InputTemp));
                process.exit();
            }
            else console.log("No entry.");
        }
        else 
        {
            console.log(typeof(InputTemp));
            console.log("That's not a number.");
        }
    })
};
