var xhr3;
if(window.XMLHttpRequest){
    xhr3 = new XMLHttpRequest();
}else if (window.ActiveXObject){
    try{
        xhr3 = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e){
        try{
            xhr3 = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (e) {}
    }
}
if (xhr3){
    xhr3.onreadystatechange=onReadyStateChange;
    xhr3.open('GET', "https://api-eu.hosted.exlibrisgroup.com/almaws/v1/analytics/reports?path=%2Fshared%2FUniversity%20of%20Edinburgh%2FReports%2FAPI%2FBoyuan%2FTL8&limit=250&col_names=true&apikey=l7xx67f6e81af6034a39a7346f6bb7368502", true);
    xhr3.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr3.send('username=admin&password=root');
}



function onReadyStateChange(){

    console.log(xhr3.readyState);
    if (xhr3.readyState ===4){
        if (xhr3.status ===200){
            console.log(xhr3.responseText);
            var xmlDoc3 = xhr3.responseXML;
            var t = xmlDoc3.getElementsByTagName("Column1")[0].childNodes[0].nodeValue;
            document.getElementById("request").innerHTML= t

        } else {
            console.log('There was a problem');
        }
    } else {
        console.log('still not ready...');
    }
};