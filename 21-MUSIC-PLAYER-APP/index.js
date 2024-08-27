const musicContainer = document.querySelector('.music-player');
const playBtn = document.querySelector('.play');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const audio = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const titleEl = document.getElementById('title');

// Song titles and file paths
const songs = [

    { title: 'Song 1', path: './sound/1.mp3' },
    { title: 'Song 2', path: './sound/2.mp3' },
    { title: 'Song 3', path: './sound/3.mp3' }
];

let songIndex = 0;

// Load initial song
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    titleEl.textContent = song.title;
    audio.src = song.path;
}

// Play song
function playMusic() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i').classList.remove('fa-play');
    playBtn.querySelector('i').classList.add('fa-pause');
    audio.play();
}

// Pause song
function pauseMusic() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i').classList.remove('fa-pause');
    playBtn.querySelector('i').classList.add('fa-play');
    audio.pause();
}

// Previous song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playMusic();
}

// Next song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playMusic();
}

// Update progress bar and time display
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    // Update current time display
    let minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    currentTimeEl.textContent = `${minutes}:${seconds}`;

    // Update duration display
    if (duration) {
        let totalMinutes = Math.floor(duration / 60);
        let totalSeconds = Math.floor(duration % 60);
        if (totalSeconds < 10) {
            totalSeconds = `0${totalSeconds}`;
        }
        durationEl.textContent = `${totalMinutes}:${totalSeconds}`;
    }
}

// Set progress
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong);
