
function onMouseOver(e)
{   
    console.log("HERE")
    e.target.classList.add('services-featured');
    

}
function onMouseOut(e)
{
    e.target.classList.remove('services-featured');
}


let serviceContainer=document.querySelector("#service-container");
function renderCard(serviceName,serviceImg,serviceDescription)
{

    return (`<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
    <div class="mycard card">
      <div class="card-img">
        <img src="${serviceImg}" alt=""  class="card-img-top">
      </div>
      <h3><a href="service-details.html#${serviceName}F" class="stretched-link">${serviceName}</a></h3>
      <p>${serviceDescription}</p>
    </div>
  </div><!-- End Card Item -->`

    );
}

function renderCards(services)
{
 let renderedString="";
 for(let [key,value] of Object.entries(services))   
 {
    renderedString+=renderCard(key,value["service-img"],value["service-description"]);
 }

return renderedString;

}

let xyz={
    "Transport":
    {
        "service-description":"Reach your destinations with ease. Choose from various modes Of transport that satisfy your needs.",
        "service-icon":"fa-cab",   
        "service-img":"./assets/img/bus.jpg"
    },
    "Hotels":
    {   
        "service-description":"Choose from a variety of hotels for accomidations that best suits your requirements.",
        "service-icon":"fa-hotel",
        "service-img":"./assets/img/hotels.jpg"
    }


};

serviceContainer.innerHTML= renderCards(xyz);
let elements=document.querySelectorAll('.mycard');
console.log(elements);
elements.forEach(x=>x.onmouseenter=onMouseOver);
elements.forEach(x=>x.onmouseleave=onMouseOut);