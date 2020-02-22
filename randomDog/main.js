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

function handleFormSubmit() {
  $("#dog-form").on("submit", function(e) {
    e.preventDefault();
    const dogBreed = $("#dog-pic-breed").val();
    getDogBreed(dogBreed);
  });
}

$(() => {
  console.log("JS loaded and ready to show you DOGS!");
  handleFormSubmit();
});
