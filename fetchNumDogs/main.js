// function that takes the number of dog pics
// submitted by the user and dynamically 
// calls the Dog API for a random number 
//of that many dog pics
function getDogImages(numOfDogPics) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogPics}`)
    .then(res => res.json())
    .then(data => {
      $(".pics-container").html("");
      console.log(data)
      for (let i = 0; i < data.message.length; i++) {
        // get dynamic alt text
        const altText = data.message[i].split("breeds/")[1].split("/")[0];
        $(".pics-container").append(`
          <img style="height: 200px; width: auto;" src="${data.message[i]}" alt="${altText} dog!">
        `);
      }
    });
}

// function that fires when user submits how many dog
//pics they want to see
function handleFormSubmit() {
  $("#dog-form").submit(e => {
    e.preventDefault();
    const numOfDogPics = $("input[type=number]").val();
    getDogImages(numOfDogPics);
  });
}

// fires functions when page loads
$(() => {
  console.log("Loaded & ready for form submit...");
  handleFormSubmit();
});
