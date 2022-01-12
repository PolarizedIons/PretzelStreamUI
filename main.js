const twitchId = location.hash.substr(1);

const errorMsg = document.getElementById("error");
const artwork = document.getElementById("artwork");
const songName = document.getElementById("songName");
const artistName = document.getElementById("artistName");

const fetchDetails = () => {
    if (!twitchId) {
        errorMsg.classList.remove("hidden");
        return;
    }


    fetch(`https://api.pretzel.tv/playing/twitch/${twitchId}/json`)
        .then(res => res.json())
        .then(res => {
            artwork.src = res.track.artworkUrl;
            songName.innerText = res.track.title;
            artistName.innerText = res.track.artist;
        });

    setTimeout(() => {
        fetchDetails();
    }, 15000);
};

fetchDetails();
