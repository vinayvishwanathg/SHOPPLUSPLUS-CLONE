fetch("../data/data.json").then(response=>
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
        
