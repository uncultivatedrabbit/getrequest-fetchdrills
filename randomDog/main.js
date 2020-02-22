// gets dog breed from user and makes a fetch to the Dog API
// using that breed, then verifies it's a valid breed
// and alerts user if it is not, otherwise
// it displays a random image of that dog breed to user
function getDogBreed(dogBreed) {
  fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error(alert("Breed not found (master breed does not exist)"));
      }
    })
    .then(data => {
      // get dynamic alt test
      const altText = data.message.split("breeds/")[1].split("/")[0];
      $(".pics-container").html(`
      <div class="dog-pic">
        <img src="${data.message}" alt="${altText} dog!">
      </div>`);
    })
    .catch(err =>
      console.log("Something went wrong! (Probably a bad dog breed input).")
    );
}

// function that fires when user submits which type of dog
// breed they want to see a random photo of
function handleFormSubmit() {
  $("#dog-form").on("submit", function(e) {
    e.preventDefault();
    const dogBreed = $("#dog-pic-breed").val();
    getDogBreed(dogBreed);
  });
}

// function that fires when page loads
$(() => {
  console.log("JS loaded and ready to show you DOGS!");
  handleFormSubmit();
});
