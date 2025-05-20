var timeoutEnterId;


// Change image with mouse hover to gif
function changeHeaderImage(imageUrl) {

    timeoutEnterId = setTimeout(function () {

        var projectElement = document.getElementById("header-image");
        if (projectElement) {
            projectElement.src = imageUrl;
        }
    }, 100);

}

// Change image with mouse hover to gif
function returnHeaderImage(imageUrl) {

    clearTimeout(timeoutEnterId);
    setTimeout(function () {

        var projectElement = document.getElementById("header-image");
        if (projectElement) {
            projectElement.src = imageUrl;
        }
    }, 200);

}

