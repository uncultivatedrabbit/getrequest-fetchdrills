function getDogImages(numOfDogPics) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogPics}`)
    .then(res => res.json())
    .then(data => {
      $(".pics-container").html("");
      console.log(data)
      for (let i = 0; i < data.message.length; i++) {
        const altText = data.message[i].split("breeds/")[1].split("/")[0];
        $(".pics-container").append(`
          <img style="height: 200px; width: auto;" src="${data.message[i]}" alt="${altText} dog!">
        `);
      }
    });
}

function handleFormSubmit() {
  $("#dog-form").submit(e => {
    e.preventDefault();
    const numOfDogPics = $("input[type=number]").val();
    getDogImages(numOfDogPics);
  });
}

$(() => {
  console.log("Loaded & ready for form submit...");
  handleFormSubmit();
});
