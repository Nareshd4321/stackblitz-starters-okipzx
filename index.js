const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));
/*
app.get("/shout", (req, res) => {

  let name = req.query.name;
  let UpperCaseName = name.toUpperCase();
  res.send(UpperCaseName);

});

app.get("/fullname",(req,res) => {
 
  let firstname = req.query.firstname;
  let lastname = req.query.lastname;
  let fullname = firstname + " " + lastname;
  res.send(fullname);

});

app.get("/date", (req,res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formatteddate = month + ", " + year;
  res.send(formatteddate);
});

app.get("/greet",(req,res) => {
let greetname = "Namaste, " + req.query.name +"!";
res.send(greetname);
});

app.get("/address",(req,res) => {

  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let address = street+", "+city+","+state;
  res.send(address);
});

app.get("/email",(req,res) => {
let name = req.query.name;
let domain = req.query.domain;
let email =name+"@"+domain+".com";
res.send(email);

});

app.get("/totaldistance",(req,res) => {
let distance1 = parseFloat(req.query.distance1);
let distance2 = parseFloat(req.query.distance2);
let totaldistance = distance1+distance2;
res.send(totaldistance.toString());

app.get("/totaltime",(req,res) => {
let time1 = parseFloat(req.query.time1);
let time2 = parseFloat(req.query.time2);
let time3 = parseFloat(req.query.time3);
let time = time1+time2+time3;
res.send(time.toString());
});

app.get("/avgspeed",(req,res) => {
let distance = parseFloat(req.query.distance);
let time = parseFloat(req.query.time);
let avgsped = distance / time;
res.send(avgsped.toString());
}
);

app.get("/eta",(req,res) => {
  let distance = parseFloat(req.query.distance);
  let speed = parseFloat(req.query.speed);
  let eta = distance / speed;
  res.send(eta.toString());
});

app.get("/checknumber",(req,res) => {
let number = parseFloat(req.query.number);
let result;
if(number >=0) {
result = 'positive';
}else {result = 'Negative';
}
res.send("number is "+result);
}); 

app.get("/evenodd",(req,res) => {

  let number = parseFloat(req.query.number);
  let result;
  if (number%2 == 0){
    result = "number is even";}
    else {
      result = "number is odd";
    }
    res.send(result);
  }
);
app.get("/checklogin",(req,res) => {
let isloggin = req.query.isloggin === 'true';
let result;
if (isloggin){ result = "user logged in";}
else { result = "user not logged in";
} 
res.send(result);
}
);

app.get("/checkdiscount",(req,res) => {
  let userage = parseFloat(req.query.userage);
  let result;
   if (userage > 65){ result = "user not eligible for discount";}
  else { result = "user eligible for discount";
  } 
  res.send(result);
  }
  );

  app.get("/checknum",(req,res) => {
    let number = parseFloat(req.query.number);
    let result;
     if (number > 0){ result = "number is positive";}
    else if(number < 0) { result = "number is negative";}
    else {result = "number is zero";}
     res.send(result);
    }
    );

    app.get("/checktemp",(req,res) => {
      let number = parseFloat(req.query.number);
      let result;
       if (number < 15){ result = "Temp is Cold";}
      else if(number > 15 && number < 25)        
        { result = "Temp is warm";}
      else {result = "Temp is hot";}
       res.send(result);
      }
      );
      
      app.get("/checksteps",(req,res) => {
        let steps = parseFloat(req.query.steps);
        let result;
         if (steps < 5000){ result = "Activity is low";}
        else if(steps > 5000 && steps < 10000)        
          { result = "Activity is moderate";}
        else {result = "Activity is high";}
         res.send(result);
        }
        );
        
        app.get("/checkengagement",(req,res) => {
          let likes = parseFloat(req.query.likes);
          let result;
           if (likes < 100){ result = "Engagement is low";}
          else if(likes > 100 && likes < 500)        
            { result = "Engagement is moderate";}
          else {result = "Engagement is high";}
           res.send(result);
          }
          );
 function getwelcomemessage()
 {
   return "welcome to our service!"
 }
          app.get("/welcome",(req,res) => {
            res.send(getwelcomemessage())
          });
          
function greet(name)
{
return "Hello "+name+"!"
}
app.get("/greetfun",(req,res) => {
  let name = req.query.name;
res.send(greet(name))
});  

function passwordstrength(password)
{
  console.log(password.length)
  if (password.length >=15 ) { return "Password is strong"}
  else if (password.length <15) {return "Password is weak"}
  else {return "Password is ok"}
  }

app.get("/checkpasswordstrength",(req,res) => {
  let password = req.query.password;
  res.send(passwordstrength(password))
}); 

function add2num(num1, num2) {
  let result = num1 + num2
  return result.toString()
  }

app.get("/sum2num",(req,res) => {
  let num1 = parseFloat(req.query.num1)
  let num2 = parseFloat(req.query.num2)
  res.send(add2num(num1, num2));
}) */
app.get("/cart-total",(req,res) => {
  let newItemPrice  = parseFloat(req.query.newItemPrice );
  let cartTotal = parseFloat(req.query.cartTotal);
  let result;
 if (newItemPrice < 0 || cartTotal < 0) { result = 'Enter proper Item price and cart total(cannot be negative)' }
 else {
  let total = newItemPrice + cartTotal;
  result = total.toString();
  } res.send(result);
  });

//}
//);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
