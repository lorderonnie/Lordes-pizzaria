function TotalAmount(size, crust, toppings) {
    this.sizeName = size;
    this.crustName = crust;
    this.toppingsName = toppings;
}
    var pizzaSize;
    var pizzaCrust;
    var pizzaToppings=[];
    var delivery;
    var totaltopping;
    
    function getToppingPrice(){
      return pizzaToppings.length * 100
    };
    function getTotal(){
        return pizzaCrust + pizzaSize + delivery + getToppingPrice();
    };

    // ui logic
    

$(document).ready(function () {
  
    $(".pro").click(function(){ 
         pizzaSize=parseInt($("input[name='select']:checked").val());
        pizzaCrust=parseInt($("input[name='choose']:checked").val());
        $("input[type=checkbox]:checked").each(function(){
            pizzaToppings.push(parseInt($(this).val()));  
        });
      
        delivery= parseInt($("input[name='del']:checked").val());  
            var complete= getTotal();
            $("#jay").append(
                '<ul>'+
                '<li>'+
                '<p>Your pizza size:</p>'+ pizzaSize+
                '</li>'+
                '<li>'+
                '<p>Your pizza crust:</p>'+ pizzaCrust+
                '</li>'+
                '<li>'+
                '<p>Your pizza toppings:</p>'+ pizzaToppings+
                '</li>'+
                '<li>'+
                '<p>Delivery cost =400:</p>'+ delivery+
                '</li>'+
                '<li>'+
                '<p>totalamount:</p>'+ complete +
                '</li>'+
                '</ul>'
            )
        });

        $(".ron").click(function(){
            var loc = prompt("enter ur location");
            alert("your order will be delivered to" +" "+ loc);
            alert("your order has been received");
        });

        $("#get").click(function() {
            $("#all").append('<h2>Choose your size...</h2><br>' +
                '<div class="row">' +
                '<div class="col-md-3">' +
                '<div class="front">' +
                '<img src="./images/pizza3.jpeg" alt="an image of a pizza " width="250px"  height="200px">' +
                '<p id="right">INDIVIDUAL SIZE</p>' +
                '<p id="right">4 SLICES</p>' +
                '<p>ksh.200</p>' +
                '<div id="turn">' +
                '<label><input type="radio" name="select" ></input></label>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-3">' +
                '<div class="front">' +
                '<img src="./images/pizza4.jpeg" alt="an image of a pizza " width="250px"  height="200px">' +
                '<p id="right">SMALL SIZE</p>' +
                '<p id="right">6 SLICES</p>' +
                '<p>ksh.400</p>' +
                '<div id="turn">' +
                '<label><input type="radio" name="select" ></input></label>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-3">' +
                '<div class="front">' +
                '<img src="./images/pizza5.jpeg" alt="an image of a pizza " width="250px"  height="200px">' +
                '<p id="right">MEDIUM SIZE</p>' +
                '<p id="right">8 SLICES</p>' +
                '<p>ksh.600</p>' +
                '<div id="turn">' +
                '<label><input type="radio" name="select" ></input></label>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-3">' +
                '<div class="front">' +
                '<img src="./images/pizza2.jpeg" alt="an image of a pizza " width="250px"  height="200px">' +
                '<p id="right">MEGA SIZE</p>' +
                '<p id="right">10 SLICES</p>' +
                '<p>ksh.800</p>' +
                '<div id="turn">' +
                '<label><input type="radio" name="select" ></input></label>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div><br>' +
                '<center><h2>Pick your crust...</h2></center><br>' +
                '<div class="row">' +
                '<div class="col-md-3">' +
                '<div class="front">' +
                '<img src="./images/pexelpizza.jpeg" alt="an image of a pizza crust" width="250px"  height="200px">' +
                '<p id="right">CRUST THIN</p>' +
                '<p>ksh.50</p>' +
                '<div id="turn">' +
                '<label><input type="radio" name="choose" ></input></label>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-3">' +
                '<div class="front">' +
                '<img src="./images/crust.jpeg" alt="an image of a pizza crust" width="250px"  height="200px">' +
                '<p id="right">CRUST THICK</p>' +
                '<p>ksh.100</p>' +
                '<div id="turn">' +
                '<label><input type="radio" name="choose" ></input></label>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-3">' +
                '<div class="front">' +
                '<img src="./images/crust 2.jpeg" alt="an image of a pizza crust" width="250px"  height="200px">' +
                '<p id="right">CRUST STUFFED</p>' +
                '<p id="right">(CHEESE)</p>' +
                '<p>ksh.120</p>' +
                '<div id="turn">' +
                '<label><input type="radio" name="choose"></input> </label>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-3">' +
                '<div class="front">' +
                '<img src="./images/crust3.jpeg" alt="an image of a pizza crust" width="250px"  height="200px">' +
                '<p id="right">CRUST STUFFED</p>' +
                '<p id="right">(HOT-DOG)</p>' +
                '<p>ksh.150</p>' +
                '<div id="turn">' +
                '<label><input type="radio" name="choose"></input> </label>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div><br>' +
                '<h2>Select your toppings...</h2><br>' +
                '<table>' +
                '<tr>' +
                '<th>MEAT:</th>' +
                '<th>VEGGIES:</th>' +
                '<th>OPTIONAL:</th>' +
                '</tr>' +
                '<tr>' +
                '<td>' +
                '<div class="front">' +
                '<img src="./images/pepperoni.jpeg" alt="image of pepperoni" width="100px;">' +
                '<p>PEPPERONI</p>' +
                '<p>ksh.120</p>' +
                '<div id="font">' +
                '<label><input type="checkbox" name="check"></input> </label>' +
                '</div>' +
                '</div>' +
                '</td>' +
                '<td>' +
                '<div class="front">' +
                '<img src="./images/tomatoes.jpeg" alt="image of tomatoes" width="130px;">' +
                '<p>TOMATOES</p>' +
                '<p>ksh.50</p>' +
                '<div id="font">' +
                '<label><input type="checkbox" name="check"></input> </label>' +
                '</div>' +
                '</div>' +
                '</td>' +
                '<td>' +
                '<div class="front">' +
                '<img src="./images/cheese.jpeg" alt="image of cheese" width="130px;">' +
                '<p>CHEESE(EXTRA)</p>' +
                '<p>ksh.100</p>' +
                '<div id="font">' +
                '<label><input type="checkbox" name="check"></input> </label>' +
                '</div>' +
                '</div>' +
                '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>' +
                '<div class="front">' +
                '<img src="./images/beef.jpeg" alt="image of beef" width="130px;">' +
                '<p>BEEF</p>' +
                '<p>ksh.100</p>' +
                '<div id="font">' +
                '<label><input type="checkbox" name="check"></input> </label>' +
                '</div>' +
                '</div>' +
                '</td>' +
                '<td>' +
                '<div class="front">' +
                '<img src="./images/onions.jpeg" alt="image of onions" width="130px;">' +
                '<p>ONIONS</p>' +
                '<p>ksh.50</p>' +
                '<div id="font">' +
                '<label><input type="checkbox" name="check"></input> </label>' +
                '</div>' +
                '</div>' +
                '</td>' +
                '<td>' +
                '<div class="front">' +
                '<img src="./images/pinapple.jpeg" alt="image of pinapple" width="130px;">' +
                '<p>PINAPPLE</p>' +
                '<p>ksh.70</p>' +
                '<div id="font">' +
                '<label><input type="checkbox" name="check"></input> </label>' +
                '</div>' +
                '</div>' +
                '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>' +
                '<div class="front">' +
                '<img src="./images/bacon.jpeg" alt="image of bacon" width="130px;">' +
                '<p>BACON</p>' +
                '<p>ksh.150</p>' +
                '<div id="font">' +
                '<label><input type="checkbox" name="check"></input> </label>' +
                '</div>' +
                '</div>' +
                '</td>' +
                '<td>' +
                '<div class="front">' +
                '<img src="./images/spinach.jpeg" alt="image of chopped-spinach" width="130px;">' +
                '<p>SPINACH</p>' +
                '<p>ksh.80</p>' +
                '<div id="font">' +
                '<label><input type="checkbox" name="check"></input> </label>' +
                '</div>' +
                '</div>' +
                '</td>' +
                '<td>' +
                '<div class="front">' +
                '<img src="./images/olives.jpeg" alt="image of olives" width="130px;">' +
                '<p>OLIVES</p>' +
                '<p>ksh.130</p>' +
                '<div id="font">' +
                '<label><input type="checkbox" name="check"></input> </label>' +
                '</div>' +
                '</div>' +
                '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>' +
                '<div class="front">' +
                '<img src="./images/chicken.jpeg" alt="image of chicken" width="130px;">' +
                '<p>CHICKEN</p>' +
                '<p>ksh.150</p>' +
                '<div id="font">' +
                '<label><input type="checkbox" name="check"></input> </label>' +
                '</div>' +
                '</div>' +
                '</td>' +
                '<td>' +
                '<div class="front">' +
                '<img src="./images/bell peppers.jpeg" alt="image of bell-peppers" width="130px;">' +
                '<p>BELL-PEPPERS</p>' +
                '<p>ksh.60</p>' +
                '<div id="font">' +
                '<label><input type="checkbox" name="check"></input> </label>' +
                '</div>' +
                '</div>' +
                '</td>' +
                '<td>' +
                '<div class="front">' +
                '<img src="./images/mushroom.jpeg" alt="image of mushrooms" width="130px;">' +
                '<p>MUSHROOMS</p>' +
                '<p>ksh.120</p>' +
                '<div id="font">' +
                '<label><input type="checkbox" name="check"></input> </label>' +
                '</div>' +
                '</div>' +
                '</td>' +
                '</tr>' +
                '</table><br>');
        });
    
    });