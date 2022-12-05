/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


//Travel Itinerary Section

//Query Selectors
let addTravelButton = document.querySelector('#addTravelButton')
let travelText = document.querySelector('#travelText')
let emptyTravelList = document.querySelector('#ulTravelList')

// Event Listener to add travel

addTravelButton.addEventListener('click', function(event){
    event.preventDefault();
    //want to add text to current empty list
    //console.log("event working")
    let travelItem = document.createElement('li');
    travelItem.innerText = travelText.value;
    ulTravelList.appendChild(travelItem)
    travelText.value = ""
})


//Places to go & Meeting Section

//Query Selectors

let addPlaceMeetingButton = document.querySelector('#addPlacesMeetingButton')
let placeMeetingText = document.querySelector('#placesMeetingText')
let emptyPlacesMeetingList = document.querySelector('#ulPlacesMeetings')

//Event Listener to add Places and Meetings

addPlaceMeetingButton.addEventListener('click', function (){
    //want to add text to currently empty list
    //console.log("event working")
    let placeMeetingItem = document.createElement ('li')
    placeMeetingItem.innerText = placeMeetingText.value;
    emptyPlacesMeetingList.appendChild(placeMeetingItem);
    placeMeetingText.value = ""
})


//Packing list Section

//Query Selectors

let addPackingListButton = document.querySelector('#addPackingListButton')
let packingListText = document.querySelector('#packingListText')
let emptyPackingList = document.querySelector('#ulPackingList')

//Event Listener to add items and line through

addPackingListButton.addEventListener('click', function(){
    //want to add items to the current empty list
    let packingItem = document.createElement('li');
    packingItem.innerText = packingListText.value;
    emptyPackingList.appendChild(packingItem);
    packingListText.value = ""
})