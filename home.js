//Declaration of variables


const songInput = document.getElementById("songInput")
const formSearch = document.getElementById("formSearch")
const songContainer = document.getElementById("songContainer")
const songCover = document.getElementById("songCover")
const songTitle = document.getElementById("songTitle")
const songArtist = document.getElementById("songArtist")
const songMusic = document.getElementById("songMusic")
const playSong = document.getElementById("playSong")
const pauseSong = document.getElementById("pauseSong")


//Async function for searching the song data

async function searchedSongs(searchSong){
    const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(searchSong)}&media=music&entity=song&limit=1`)
    const data = await response.json()
    console.log(data.results)
    const song = data.results[0]

    //Display the results

    songContainer.style.display = "flex"
    songTitle.textContent = song.trackName
    songCover.src = song.artworkUrl100
    songArtist.textContent = `Artist/s:  ${song.artistName}`
    
    songMusic.src = song.previewUrl
    
    playSong.addEventListener("click",()=>{
        songMusic.play()
        
        
    })

    pauseSong.addEventListener("click",()=>{
        songMusic.pause()
    })
    






}

//function for receive the user´s input and make to call the song search engine

formSearch.addEventListener("submit", (event)=>{
    event.preventDefault()

    const searchSong = songInput.value

    
    searchedSongs(searchSong)

    songInput.value = ""
})


