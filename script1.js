document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('#backgroundMusic');
    const loveVideo = document.getElementById('#loveVideo');
    const toggleMusicButton = document.getElementById('#toggleMusicButton');

    toggleMusicButton.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            // Play background music and pause video
            backgroundMusic.play();
            loveVideo.pause();
        } else {
            // Pause background music and play video
            backgroundMusic.pause();
            loveVideo.play();
        }
    });

    // Pause background music when video is played
    loveVideo.addEventListener('play', function() {
        backgroundMusic.pause();
    });

    // Resume background music when video is paused
    loveVideo.addEventListener('pause', function() {
        if (!backgroundMusic.paused) return;
        backgroundMusic.play();
    });
});
