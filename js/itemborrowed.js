var xhr2;
if(window.XMLHttpRequest){
    xhr2 = new XMLHttpRequest();
}else if (window.ActiveXObject){
    try{
        xhr2 = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e){
        try{
            xhr2 = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (e) {}
    }
}
if (xhr2){
    xhr2.onreadystatechange=onReadyStateChange;
    xhr2.open('GET', "https://api-eu.hosted.exlibrisgroup.com/almaws/v1/analytics/reports?path=%2Fshared%2FUniversity%20of%20Edinburgh%2FReports%2FAPI%2FBoyuan%2FTL3&limit=250&col_names=true&apikey=l7xx67f6e81af6034a39a7346f6bb7368502", true);
    xhr2.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr2.send('username=admin&password=root');
}

function onReadyStateChange(){
    console.log(xhr2.readyState);
    if (xhr2.readyState ===4){
        if (xhr2.status ===200){
            console.log(xhr2.responseText);
            var xmlDoc2 = xhr2.responseXML;
            var z = xmlDoc2.getElementsByTagName("Column2")[0].childNodes[0].nodeValue;
            document.getElementById("borrowed").innerHTML= z

        } else {
            console.log('There was a problem');
        }
    } else {
        console.log('still not ready...');
    }
};