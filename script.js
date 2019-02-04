/* window.onload = function() {
    init();
    myFunction();
  }; */
  document.addEventListener("DOMContentLoaded", function() {
    loadIncludeFilesFunction();
  });

  function loadIncludeFilesFunction() {
     try{
        var filepath="file://C:/Users/nlilhare/Desktop/Neha's%20task/My%20stuff/Angular_prjcts/Assignments/includeAss/";
        
    var fileArray = document.querySelectorAll("include");

    for (let i = 0; i < fileArray.length; i++) {
        var parentDiv=fileArray[i].parentNode;
      
        var fileName= filepath+fileArray[i].getAttribute("src");
        readTextFile(fileName);
        var allText="";
        function readTextFile(file)
     {
         var rawFile = new XMLHttpRequest();
         rawFile.open("GET", file, false);
         rawFile.onreadystatechange = function ()
         {
             if(rawFile.readyState === 4)
             {
                 if(rawFile.status === 200 || rawFile.status == 0)
                 {
                      allText = rawFile.responseText;
                      parentDiv.innerHTML=allText;
                    // alert(allText);
                 }
             }
         }
         rawFile.send(null);
     }
               
    }

     }
     catch(error){
        alert("Opps...an error occure"+ error);
     }

  }

  