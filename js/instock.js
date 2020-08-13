var xhr1;
if(window.XMLHttpRequest){
    xhr1 = new XMLHttpRequest();
}else if (window.ActiveXObject){
    try{
        xhr1 = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e){
        try{
            xhr1 = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (e) {}
    }
}
if (xhr1){
    xhr1.onreadystatechange=onReadyStateChange;
    xhr1.open('GET', "https://api-eu.hosted.exlibrisgroup.com/almaws/v1/analytics/reports?path=%2Fshared%2FUniversity%20of%20Edinburgh%2FReports%2FAPI%2FBoyuan%2FTL4&limit=250&col_names=true&apikey=l7xx67f6e81af6034a39a7346f6bb7368502", true);
    xhr1.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr1.send('username=admin&password=root');
}

function onReadyStateChange(){
    console.log(xhr1.readyState);
    if (xhr1.readyState ===4){
        if (xhr1.status ===200){
            console.log(xhr1.responseText);
            var xmlDoc1 = xhr1.responseXML;
            var y = xmlDoc1.getElementsByTagName("Column1")[0].childNodes[0].nodeValue;
            document.getElementById("stock").innerHTML= y

        } else {
            console.log('There was a problem');
        }
    } else {
        console.log('still not ready...');
    }
};

