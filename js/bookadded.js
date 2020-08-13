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
    xhr.open('GET', "https://api-eu.hosted.exlibrisgroup.com/almaws/v1/analytics/reports?path=%2Fshared%2FUniversity%20of%20Edinburgh%2FReports%2FAPI%2FBoyuan%2FTL7&limit=250&col_names=true&apikey=l7xx67f6e81af6034a39a7346f6bb7368502", true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send('username=admin&password=root');
}

function onReadyStateChange(){
    console.log(xhr.readyState);
    if (xhr.readyState ===4){
        if (xhr.status ===200){
            console.log(xhr.responseText);
            var xmlDoc = xhr.responseXML;
            var x = xmlDoc.getElementsByTagName("Column1")[0].childNodes[0].nodeValue;
            document.getElementById("add").innerHTML= x

            console.log(x);

        } else {
            console.log('There was a problem');
        }
    } else {
        console.log('still not ready...');
    }
};

