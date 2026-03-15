// Get the html element that will show the video 
const video = document.getElementById("video");

// Set the volume of the video
video.volume = 0.1;

// Get from local storage the list of all videos with their IDs, names, paths to videos, and paths to poster images 
// and the ID of the video that was chosen by the user
const videos = JSON.parse(localStorage.getItem('videos'));
const clickedID = Number(localStorage.getItem('clickedID'));


// Show the title of the video
const cartoonTitleContainer = document.getElementById("cartoonTitleContainer");
const cartoonTitle = document.createElement('h3');
cartoonTitle.innerText = videos[clickedID][1];
cartoonTitleContainer.appendChild(cartoonTitle);


// Create buttons to the previous and the next videos
if (clickedID > 0) {
    const backArrow = document.createElement('button');
    backArrow.classList.add('leftRightButton');
    backArrow.id = 'buttonBack';
    backArrow.innerHTML = '<img src="../images/navigation_icons/arrowLeft.png" alt="back">';
    backArrow.addEventListener('click', function() {
        localStorage.setItem('clickedID', clickedID - 1);
        localStorage.setItem('videos', JSON.stringify(videos));
        window.location.href = "player.html";
    });
    document.body.appendChild(backArrow);
};

if (clickedID < (videos.length - 1)) {
    const forwardArrow = document.createElement('button');
    forwardArrow.classList.add('leftRightButton');
    forwardArrow.id = 'buttonForward';
    forwardArrow.innerHTML = '<img src="../images/navigation_icons/arrowRight.png" alt="forward">';
    forwardArrow.addEventListener('click', function() {
        localStorage.setItem('clickedID', clickedID + 1);
        localStorage.setItem('videos', JSON.stringify(videos));
        window.location.href = "player.html";
    });
    document.body.appendChild(forwardArrow);
};


// Set the video
video.src = videos[clickedID][2];
video.poster = videos[clickedID][3];
video.load();
video.play();