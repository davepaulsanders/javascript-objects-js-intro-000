var playlist = { artistNam: "Sic Transit Gloria" }

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({}, [playlist], {[artistName]: songTitle })
  return obj
}
