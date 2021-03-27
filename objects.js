var playlist = { brandNew: "Sic Transit Gloria" }

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({playlist}, {artistName: songTitle})
}
