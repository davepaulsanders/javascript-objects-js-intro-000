var playlist = { brandNew: "Sic Transit Gloria" }

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({}, [playlist], {[artistName]: songTitle })
  return playlist.artistName
}
