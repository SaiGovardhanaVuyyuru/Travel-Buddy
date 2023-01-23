let serviceContainer=document.querySelector("#service-container");
function renderCard(serviceName,serviceIcon,serviceDescription)
{

    return (`<div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
        <div class="icon flex-shrink-0"><i class="fa-solid ${serviceIcon}"></i></div>
        <div>
          <h4 class="title">${serviceName}</h4>
          <p class="description">${serviceDescription}</p>
          <a href="service-details.html#${serviceName}F" class="readmore stretched-link"><span>Learn More</span><i class="bi bi-arrow-right"></i></a>
        </div>
      </div>`

    );
}

function renderCards(services)
{
 let renderedString="";
 for(let [key,value] of Object.entries(services))   
 {
    renderedString+=renderCard(key,value["service-icon"],value["service-description"]);
 }

return renderedString;

}

let xyz={
    "Transport":
    {
        "service-description":"Reach your destinations with ease. Choose from various modes Of transport that satisfy your needs.",
        "service-icon":"fa-cab"   
    },
    "Hotels":
    {   
        "service-description":"Choose from a variety of hotels for accomidations that best suits your requirements.",
        "service-icon":"fa-hotel"
    }


};

serviceContainer.innerHTML= renderCards(xyz);
