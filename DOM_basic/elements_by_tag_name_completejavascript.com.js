<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {
    function check(node, tagName) {
      if (node.nodeType !== document.ELEMENT_NODE) return;
      for (var i = 0; i < node.childNodes.length; i++) {
        var nodeChild = node.childNodes[i];
        if (nodeChild.nodeType == document.ELEMENT_NODE) {
          if (nodeChild.tagName.toLowerCase() === tagName.toLowerCase())
            elements.push(nodeChild);
          check(nodeChild, tagName);
        } 
      }  
    }
    
    var elements = [];
    check(node, tagName);
    return elements;
  }

  console.log(byTagName(document.body, "h1").length);
  // => 1
  console.log(byTagName(document.body, "span").length);
  // => 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // => 2
</script>

/*
<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {
    var elements = [];
    var all = document.getElementsByTagName(tagName);
    
    Array.prototype.forEach.call(all, function(element){
    	if(node.contains(element)) {
          elements.push(element);
        }
    });
    
    return elements;
  }

  console.log(byTagName(document.body, "h1").length);
  // => 1
  console.log(byTagName(document.body, "span").length);
  // => 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // => 2
</script>
*/
