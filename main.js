//Travel Itinerary Section

//Query Selectors
let addTravelButton = document.querySelector('#addTravelButton');
let travelText = document.querySelector('#travelText');
let emptyTravelList = document.querySelector('#ulTravelList');

// Event Listener to add travel

addTravelButton.addEventListener('click', function(event){
    event.preventDefault();
    //want to add text to current empty list
    //console.log("event working")
    let travelItem = document.createElement('li');
    travelItem.innerText = travelText.value;
    ulTravelList.appendChild(travelItem);
    travelText.value = "";
})

emptyTravelList.addEventListener('click', function (event){
    let element = event.target
    element.style.textDecoration = "line-through"
})


//Places to go & Meeting Section

//Query Selectors

let addPlaceMeetingButton = document.querySelector('#addPlacesMeetingButton');
let placeMeetingText = document.querySelector('#placesMeetingText');
let emptyPlacesMeetingList = document.querySelector('#ulPlacesMeetings');

//Event Listener to add Places and Meetings

addPlaceMeetingButton.addEventListener('click', function (event){
    event.preventDefault();
    //want to add text to currently empty list
    //console.log("event working")
    let placeMeetingItem = document.createElement ('li');
    placeMeetingItem.innerText = placeMeetingText.value;
    emptyPlacesMeetingList.appendChild(placeMeetingItem);
    placeMeetingText.value = "";
})

emptyPlacesMeetingList.addEventListener('click', function (event){
    let element = event.target
    element.style.textDecoration = "line-through"
})


//Packing list Section

//Query Selectors

let addPackingListButton = document.querySelector('#addPackingListButton');
let packingListText = document.querySelector('#packingListText');
let emptyPackingList = document.querySelector('#ulPackingList');

//Event Listener to add items and line through

addPackingListButton.addEventListener('click', function(event){
    event.preventDefault();
    //want to add items to the current empty list
    let packingItem = document.createElement('li');
    packingItem.innerText = packingListText.value;
    emptyPackingList.appendChild(packingItem);
    packingListText.value = "";
})

emptyPackingList.addEventListener('click', function (event){
    let element = event.target
    element.style.textDecoration = "line-through"
})