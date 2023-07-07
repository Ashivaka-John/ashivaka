var b = document.getElementsByTagName("BODY")[0];  

b.addEventListener("mousemove", function(event) {
  parallaxed(event);

});

function parallaxed(e) {
      var amountMovedX = (e.clientX * -0.3 / 8);
      var amountMovedY = (e.clientY * -0.3 / 8);
      var x = document.getElementsByClassName("parallaxed");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
      }
}


// about

/**
 * recursively get all text nodes as an array for a given element
 */
function getTextNodes(node) {
  var childTextNodes = [];

  if (!node.hasChildNodes()) {
    return;
  }

  var childNodes = node.childNodes;
  for (var i = 0; i < childNodes.length; i++) {
    if (childNodes[i].nodeType == Node.TEXT_NODE) {
      childTextNodes.push(childNodes[i]);
    } else if (childNodes[i].nodeType == Node.ELEMENT_NODE) {
      Array.prototype.push.apply(childTextNodes, getTextNodes(childNodes[i]));
    }
  }

  return childTextNodes;
}

/**
 * given a text node, wrap each character in the
 * given tag.
 */
function wrapEachCharacter(textNode, tag) {
  var text = textNode.nodeValue;
  var parent = textNode.parentNode;

  var characters = text.split('');
  var elements = [];
  var i = 0;
  characters.forEach(function(character) {
    i++;
    var element = document.createElement(tag);
    var characterNode = document.createTextNode(character);

    element.appendChild(characterNode);

    parent.insertBefore(element, textNode);
  });

  parent.removeChild(textNode);
}

var str = document.getElementById("text");

var allTextNodes = getTextNodes(str);

// wrap each character in each text node thus gathered.
allTextNodes.forEach(function(textNode) {

  wrapEachCharacter(textNode, 'span');

});

var spans = str.children;
var spanList = [];

for (var i = 0; i < spans.length; i++) {
  spanList.push(spans[i]);
}
    
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

document.onscroll = function() {
  var i = 0;
  spanList.forEach(function(span) {
    i++;
    var dsoctop = document.onscroll.all ? iebody.scrollTop : pageYOffset;
    
    if( i % 2 ) {
        span.style.webkitTransform = "rotate(" + dsoctop/i/4 + "deg) translate3d(" + dsoctop/30 * i/30 + "px, " + dsoctop/30 * i/30 + "px, " + dsoctop * i + "px)";
    } else if( i % 5 ) {
        span.style.webkitTransform = "rotate(" + -dsoctop/i/2 + "deg) translate3d(" + -dsoctop/10 * i/10 + "px, " + -dsoctop/10 * i/10 + "px, " + dsoctop * i + "px)";
    } else {
        span.style.webkitTransform = "rotate(" + dsoctop/i/3+ "deg) translate3d(" + -dsoctop/20 * i/20 + "px, " + -dsoctop/20 * i/20 + "px, " + dsoctop * i + "px)";
    }

  });
}








// contact



const contactForm = document.getElementById("contact-form");
const messageInput = document.getElementById("message-input");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the form from submitting normally

  const message = messageInput.value;
  const email = "johnashivaka@gmail.com";
  const subject = "New message from your portfolio";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  window.location.href = mailtoLink;

  alert("Message sent!");
  
  messageInput.value = "";
});

