// Get every galery button
let buttons = document.getElementsByClassName("galery-picture-btn");
// Store the galery from which the visualizer has been called
let originGalery = null;

// Add an event listener to the 'escape' key to hide the visualizer
document.addEventListener('keyup', function (e) {
    // If the key is 'escape'
    if (e && e.key === 'Escape') {
        hideVisualizer();
    }
})
// For each button
for (let i = 0; i < buttons.length; i++) {
    // add event listener on click
    buttons[i].addEventListener('click', popVisualizer);
}
// Visualize the picture
function popVisualizer(e) {
    // If the event path is empty
    if (e.path.length === 0)
        return;
    // Set the image
    $("#imagepreview").attr("src", e.path[0].src);
    // Show the visualizer
    $('#galery-visualizer').css('visibility', 'visible').css('opacity', 1);
    // Save the images in the selected galery
    if (e.path.length >= 4)
        originGalery = e.path[4].getElementsByTagName('img');
}

// Hide the visualizer
function hideVisualizer() {
    $('#galery-visualizer').css('visibility', 'hidden').css('opacity', 0);

}

function nextPicture() {
    if (!originGalery || !$("#imagepreview"))
        return;

    // for each image in this galery
    for (let i = 0; i < originGalery.length; i++) {
        // if this image is the one that is displayed in the modal
        if (originGalery[i].src === $("#imagepreview").attr("src")) {
            // Display the next one
            let newImg;
            if (i + 1 >= originGalery.length) {
                // if it's the last image of the galery, display the first one
                newImg = originGalery[0];
            }
            else {
                // display the next one
                newImg = originGalery[i + 1];
            }
            // update the image
            $("#imagepreview").attr("src", newImg.src);
            return;
        }
    }
}

function previousPicture() {
    if (!originGalery || !$("#imagepreview"))
        return;

    // for each image in this galery
    for (let i = 0; i < originGalery.length; i++) {
        // if this image is the one that is displayed in the modal
        if (originGalery[i].src === $("#imagepreview").attr("src")) {
            // Display the next one
            let newImg;
            if (i - 1 < 0) {
                // if it's the first image of the galery, display the last one
                newImg = originGalery[originGalery.length - 1];
            }
            else {
                // display the previous one
                newImg = originGalery[i - 1];
            }
            // update the image
            $("#imagepreview").attr("src", newImg.src);
            return;
        }

    }
}