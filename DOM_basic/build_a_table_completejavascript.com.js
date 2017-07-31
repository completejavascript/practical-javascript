<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
</style>

<script>
  function buildTable(data) {
    var table = document.createElement("table");
    
    var tr1 = document.createElement("tr");
    Object.keys(data[0]).forEach(function(key) {
      var th = document.createElement("th");
      var txt = document.createTextNode(key);
      th.appendChild(txt);
      tr1.appendChild(th);
    });
    table.appendChild(tr1);
    
    data.forEach(function(rowData) {
      var tri = document.createElement("tr");
      for(var key in rowData) {
        var td = document.createElement("td");
        var txt = document.createTextNode(rowData[key]);
        if(key == "height") td.style.textAlign = "right";
        td.appendChild(txt);
        tri.appendChild(td);
      }
      table.appendChild(tri);
    });
    
    return table;
  }

  var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
  ];
  
  document.body.appendChild(buildTable(MOUNTAINS));
</script>
