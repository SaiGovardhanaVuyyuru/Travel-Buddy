let transportDiv=document.querySelector('#transport');
let hotelsDiv=document.querySelector("#hotels");
let toursDiv=document.querySelector('#tours');
let transportLink=document.querySelector('#transportLink');
let hotelsLink=document.querySelector('#hotelsLink');
let toursLink=document.querySelector('#toursLink');
let divs=[transportDiv,hotelsDiv,toursDiv];

function toursFocus(){
    document.querySelectorAll('.myservices').forEach(x=>x.classList.remove('active'));
    toursLink.classList.add('active');
    divs.forEach(x=>{x.classList.add('d-none');x.classList.remove('myservicesdivactive');});
    toursDiv.classList.remove('d-none');
    setTimeout(()=>toursDiv.classList.add('myservicesdivactive'),100);
}

function hotelsFocus(){
    document.querySelectorAll('.myservices').forEach(x=>x.classList.remove('active'));
    hotelsLink.classList.add('active');
    divs.forEach(x=>{x.classList.add('d-none');x.classList.remove('myservicesdivactive');});
    hotelsDiv.classList.remove('d-none');
    setTimeout(()=>hotelsDiv.classList.add('myservicesdivactive'),100);
}

function transportFocus(){
    document.querySelectorAll('.myservices').forEach(x=>x.classList.remove('active'));
    transportLink.classList.add('active');
    divs.forEach(x=>{x.classList.add('d-none');x.classList.remove('myservicesdivactive');});
    transportDiv.classList.remove('d-none');
    
    setTimeout(()=>transportDiv.classList.add('myservicesdivactive'),100);
}
transportLink.onclick=transportFocus;

hotelsLink.onclick=hotelsFocus;

toursLink.onclick=toursFocus;
console.log(location.hash);
switch(location.hash)
{
    
    case '#toursF':
        toursFocus();
        break;
    case '#hotelsF':
        hotelsFocus();
        break;
}