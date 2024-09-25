const videoList = document.getElementById('video-list');
const videoItems = videoList.getElementsByTagName('li');

for (let videoItem of videoItems) {
    videoItem.addEventListener('click', function() {
        alert('click');
    });
};
