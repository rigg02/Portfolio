var timeoutEnterId;

// Change image with mouse hover to gif
function changeImage(projectId, imageUrl) {

    timeoutEnterId = setTimeout(function () {

        var projectElement = document.getElementById(projectId);
        if (projectElement) {
            projectElement.src = imageUrl;
        }
    }, 500);

}

// Change image with mouse hover to gif
function returnImage(projectId, imageUrl) {

    clearTimeout(timeoutEnterId);
    setTimeout(function () {

        var projectElement = document.getElementById(projectId);
        if (projectElement) {
            projectElement.src = imageUrl;
        }
    }, 200);

}