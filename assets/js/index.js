let musicContainer = document.getElementById("musicList-container");
let modalContainer = document.getElementById("myModal");
let modalClose = document.getElementById("modal-close");

let musicList = [
    {
        id: 1,
        musicImageLink: "assets/images/ofam.jpg",
        musicTitle: "Little talks",
        artistName: "Of Monsters and Men",
        audioLink: "assets/music/Of Monsters and Men - Little Talks_ghb6eDopW8I.mp3",
    },
    {
        id: 2,
        musicImageLink: "assets/images/hozier.jpg",
        musicTitle: "Take me to church",
        artistName: "Hozier",
        audioLink: "assets/music/Hozier - Take Me To Church_PVjiKRfKpPI.mp3"
    },
    {
        id: 3,
        musicImageLink: "assets/images/hollowCoves.jpg",
        musicTitle: "Coastline",
        artistName: "Hollow Coves",
        audioLink: "assets/music/Hollow Coves - Coastline (Lyrics)_eNMttIx5BWE.mp3"
    },
    {
        id: 4,
        musicImageLink: "assets/images/artwork-440x440.jpg",
        musicTitle: "Clancy",
        artistName: "Twenty One Pilots",
        audioLink: "assets/music/i_am_clancy_mp3_27696.mp3"
    },
    {
        id: 5,
        musicImageLink: "assets/images/bigblackcar.jpeg",
        musicTitle: "Big Black Car",
        artistName: "Gregory Alan Isakov",
        audioLink: "assets/music/big_black_car_mp3_27732.mp3"
    },
    {
        id: 6,
        musicImageLink: "assets/images/mazzy.jpeg",
        musicTitle: "Fade into you",
        artistName: "Mazzy Star",
        audioLink: "assets/music/mazzy_star_fade_into_you_mp3_27774.mp3"
    },
    {
        id: 7,
        musicImageLink: "assets/images/noahKhan.jpg",
        musicTitle: "Stick Season",
        artistName: "Noah Khan",
        audioLink: "assets/music/noah_kahan_stick_season_official_music_video_mp3_27798.mp3"
    },
    {
        id: 8,
        musicImageLink: "assets/images/richymitch.jpg",
        musicTitle: "Lake Missoula",
        artistName: "Ritchy Mitch and the Coal Miners",
        audioLink: "assets/music/lake_missoula_mp3_27829.mp3"
    },
    {
        id: 9,
        musicImageLink: "assets/images/sanLuis.jpg",
        musicTitle: "San Luis",
        artistName: "Gregory Alan Isakov",
        audioLink: "assets/music/gregory_alan_isakov_san_luis_official_video_mp3_27854.mp3"
    },
    {
        id: 10,
        musicImageLink: "assets/images/wind.jpeg",
        musicTitle: "Wind",
        artistName: "Akeboshi",
        audioLink: "assets/music/wind_mp3_27876.mp3"
    },
    {
        id: 11,
        musicImageLink: "assets/images/wind.jpeg",
        musicTitle: "Wind",
        artistName: "Akeboshi",
        audioLink: "assets/music/wind_mp3_27876.mp3"
    },
    {
        id: 10,
        musicImageLink: "assets/images/wind.jpeg",
        musicTitle: "Wind",
        artistName: "Akeboshi",
        audioLink: "assets/music/wind_mp3_27876.mp3"
    },
];

function displayMusicAlbum() {
    musicList.forEach((musicItem) => {
        let myAlbumCard = document.createElement("li");
        myAlbumCard.innerHTML = `
        <div class="card" style="width: 18rem">
          <img src="${musicItem.musicImageLink}" class="card-img-top" alt="${musicItem.artistName}">
          <div class="card-body">
            <h5 class="card-title">${musicItem.musicTitle}</h5>
            <p class="card-text">${musicItem.artistName}</p>
            <audio controls>
              <source src="${musicItem.audioLink}" type="audio/mpeg" />
            </audio>
          </div>
        </div>
        `;

        myAlbumCard.addEventListener("click", () => openModal(musicItem));
        musicContainer.appendChild(myAlbumCard);
    });
}

function openModal(musicItem) {
    let modalContent = document.getElementById("modal-info");
    modalContainer.style.display = "block";
    modalContent.innerHTML = `
    <div class="image-container">
      <img src="${musicItem.musicImageLink}" alt="${musicItem.artistName}" />
    </div>
    <div class="music-information">
        <h5>${musicItem.musicTitle}</h5>
        <p class="card-text">${musicItem.artistName}</p>
        <audio controls id="audio-controls">
            <source src="${musicItem.audioLink}" type="audio/mpeg" />
        </audio>
    </div>
    `;
}

function closeModal() {
    modalContainer.style.display = "none";
    document.getElementById("audio-controls").src = "";
}
window.onclick = function (e) {
    let modal = document.getElementById("myModal");
    if (e.target == modal) {
        modal.style.display = "none";
    }
};

modalClose.addEventListener("click", closeModal);

displayMusicAlbum();
