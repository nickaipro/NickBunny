const songInput = document.getElementById("songInput")
const formSearch = document.getElementById("formSearch")

formSearch.addEventListener("submit", (event)=>{
    event.preventDefault()

    const searchSong = songInput.value

    
    console.log(searchSong)

    songInput.value = ""
})