let elements=document.querySelectorAll('.mycard');
console.log(elements);
function onMouseOver(e)
{   
    console.log("HERE")
    e.target.classList.add('services-featured');
    

}
function onMouseOut(e)
{
    e.target.classList.remove('services-featured');
}

elements.forEach(x=>x.onmouseenter=onMouseOver)
elements.forEach(x=>x.onmouseleave=onMouseOut);