fetch("https://kolarenuka.github.io/javascript-ecomerce/data/data.json").then(response=>
    {
        return response.json()
    }).then(data=>
        {
          displayData(data)
        })
        function displayData(info)
        {
          /*-- var elelment=document.getElementsByTagName("div");--/*getElementsByIdName,getElementsByClassName*/
           /*console.log(elelment[1])*/

           /*--var element=document.querySelectorAll(".div")--*//* to select all information*/
           /*--console.log(element[1])--*/

           /*--var nodeData=document.querySelectorAll(".element")
           console.log(nodeData[0])--*/

           /*create element*/
           /*--var newElement=document.createElement("h2")
           console.log(newElement)--*/ /*displays new variable--element is variable name*/
           /*--var newElement=document.createElement("p")
           newElement.textContent="hi this is renu" /* to write text */
           /*--console.log(newElement)*--/

                             /*to display text in body*/
        //    var bodyElement=document.querySelector("body");
        //    bodyElement.append(newElement)

        //                        /*to create img element*/
        //    var sampleElement=document.createElement("img");
        //    sampleElement.src="images/max.jpg";
        //    sampleElement.classList.add("class1","class2","class3")
        //    sampleElement.classList.remove("class3")
        //                           /*appending img to body*/
        //     var bodyElement=document.querySelector("body");   
        //     bodyElement.append(sampleElement);
        // 
                        /*grid system*/
var bodyElement=document.querySelector("body");
var row=document.createElement("section");
row.classList.add("row","justify-content-center");
bodyElement.append(row)
                          /*to display elements in the body*/
info.mobiles.map(value=>
  {
   var column=document.createElement("article")
   column.classList.add("col-sm-10","col-md-6","col-lg-3");
   row.append(column)

/*card*/
  var card=document.createElement("div");
  card.classList.add("card","mt-3")
                         /*card body*/
  var cardBody=document.createElement("div");
  cardBody.classList.add("card-body");
                            /*image*/
var imageElement=document.createElement("img");
imageElement.src=value.image;
imageElement.classList.add("img-responsive")
imageElement.alt=value.name;
                      /*NAME*/
var name=document.createElement("h2");
name.textContent=value.name;
name.classList.add("text-center", "text-primary")
  /*PRICE*/
var price=document.createElement("p") /*strike--"s" ,p*/
price.classList.add("text-danger","text-center","text-block");
price.innerHTML="<s>₹"+value.price+ "/-</s>";

var oprice=document.createElement("p");
oprice.classList.add("text-primary","text-center");
oprice.textContent="₹"+value.originalPrice+"/-";
  /*BUTTON*/
  var buttonParent=document.createElement("div");
  buttonParent.classList.add("d-grid","gap-2");

var button=document.createElement("button");
button.classList.add("btn","btn-info","btn-block");
button.textContent="Add to cart";
buttonParent.append(button);


// var button1=document.createElement("button");
// button1.classList.add("btn","btn-primary","btn-block","ms-3");
// button1.textContent="  Buy Now  ";
var buttonParent1=document.createElement("div");
buttonParent1.classList.add("d-grid","gap-2");

var button=document.createElement("button");
button.classList.add("btn","btn-primary","btn-block","mt-3");
button.textContent="Buy Now";
buttonParent1.append(button);


cardBody.append(imageElement);
cardBody.append(price);
cardBody.append(oprice);
cardBody.append(buttonParent);
cardBody.append(buttonParent1);
// cardBody.append(button1);
                           /*append cardbody to card*/
  card.append(cardBody);
  column.append(card);


  })


        }
        

var shoppingCart = (function () {

    cart = [];

    function Item(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }

    // Save cart
    function saveCart() {
      localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
      cart = JSON.parse(localStorage.getItem('shoppingCart'));
    }
    if (localStorage.getItem("shoppingCart") != null) {
      loadCart();
    }


    var obj = {};

    // Add to cart
    obj.addItemToCart = function (name, price, count) {
      for (var item in cart) {
        if (cart[item].name === name) {
          cart[item].count++;
          saveCart();
          return;
        }
      }
      var item = new Item(name, price, count);
      cart.push(item);
      saveCart();
    }
    // Set count from item
    obj.setCountForItem = function (name, count) {
      for (var i in cart) {
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.removeItemFromCart = function (name) {
      for (var item in cart) {
        if (cart[item].name === name) {
          cart[item].count--;
          if (cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
      }
      saveCart();
    }

    // Remove all items from cart
    obj.removeItemFromCartAll = function (name) {
      for (var item in cart) {
        if (cart[item].name === name) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    }

    // Clear cart
    obj.clearCart = function () {
      cart = [];
      saveCart();
    }

    // Count cart 
    obj.totalCount = function () {
      var totalCount = 0;
      for (var item in cart) {
        totalCount += cart[item].count;
      }
      return totalCount;
    }

    // Total cart
    obj.totalCart = function () {
      var totalCart = 0;
      for (var item in cart) {
        totalCart += cart[item].price * cart[item].count;
      }
      return Number(totalCart.toFixed(2));
    }

    // List cart
    obj.listCart = function () {
      var cartCopy = [];
      for (i in cart) {
        item = cart[i];
        itemCopy = {};
        for (p in item) {
          itemCopy[p] = item[p];
        }
        itemCopy.total = Number(item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy)
      }
      return cartCopy;
    }
    return obj;
  })();


  // Add item
  $('.default-btn').click(function (event) {
    // alert('working');
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
  });

  // Clear items
  $('.clear-cart').click(function () {
    shoppingCart.clearCart();
    displayCart();
  });


  function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    for (var i in cartArray) {
      output += "<tr>"
        + "<td>" + cartArray[i].name + "</td>"
        + "<td>(" + cartArray[i].price + ")</td>"
        + "<td><div class='input-group'>"
        + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
        + "</div></td>"
        + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
        + " = "
        + "<td>" + cartArray[i].total + "</td>"
        + "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }

  // Delete item button

  $('.show-cart').on("click", ".delete-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
  })

  // Item count input
  $('.show-cart').on("change", ".item-count", function (event) {
    var name = $(this).data('name');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
  });
  displayCart();

//////// ui script start /////////
// Tabs Single Page
$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
$('.tab ul.tabs li a').on('click', function (g) {
    var tab = $(this).closest('.tab'), 
    index = $(this).closest('li').index();
    tab.find('ul.tabs > li').removeClass('current');
    $(this).closest('li').addClass('current');
    tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
    tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
    g.preventDefault();
});

// search function
$('#search_field').on('keyup', function() {
  var value = $(this).val();
  var patt = new RegExp(value, "i");

  $('.tab_content').find('.col-lg-3').each(function() {
    var $table = $(this);
    
    if (!($table.find('.featured-item').text().search(patt) >= 0)) {
      $table.not('.featured-item').hide();
    }
    if (($table.find('.col-lg-3').text().search(patt) >= 0)) {
      $(this).show();
      document.getElementById('not_found').style.display = 'none';
    } else {
      document.getElementById("not_found").innerHTML = " Product not found..";
      document.getElementById('not_found').style.display = 'block';
    }
    
  });
  
});
