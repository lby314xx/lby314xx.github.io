var xhr;
if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
}else if (window.ActiveXObject){
    try{
        xhr = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e){
        try{
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (e) {}
    }
}
if (xhr){
    xhr.onreadystatechange=onReadyStateChange;
    xhr.open('GET', "https://api-eu.hosted.exlibrisgroup.com/almaws/v1/analytics/reports?path=%2Fshared%2FUniversity%20of%20Edinburgh%2FReports%2FAPI%2FBoyuan%2FBOYUAN_ONE_B&limit=250&col_names=true&apikey=l7xx67f6e81af6034a39a7346f6bb7368502", true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send('username=admin&password=root');
}

function onReadyStateChange(){
    console.log(xhr.readyState);
    if (xhr.readyState ===4){
        if (xhr.status ===200){
            console.log(xhr.responseText);
            var i;
            var xmlDoc = xhr.responseXML;
            var table="<tr><th>Year</th><th>Month</th><th>Month</th><th>Count</th></tr>";
            var x = xmlDoc.getElementsByTagName("Row");
            for (i = 0; i <x.length; i++) { 
              table += "<tr><td>" +
              x[i].getElementsByTagName("Column1")[0].childNodes[0].nodeValue +
              "</td><td>" +
              x[i].getElementsByTagName("Column2")[0].childNodes[0].nodeValue +
              "</td><td>" +
              x[i].getElementsByTagName("Column3")[0].childNodes[0].nodeValue +
              "</td><td>" +
              x[i].getElementsByTagName("Column4")[0].childNodes[0].nodeValue +
              "</td></tr>";
            }
            document.getElementById("demo").innerHTML = table;


        } else {
            console.log('There was a problem');
        }
    } else {
        console.log('still not ready...');
    }
};

