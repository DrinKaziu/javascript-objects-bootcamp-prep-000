var playlist = {
  "Dave Matthews": "Say Goodbye"
};

function updatePlaylist (obj, key, value) {
   playlist['Phil Ochs'] = "Here's to the State of Mississippi";
   
   return obj;
}

function removeFromPlaylist (obj, key) {
  delete playlist["Phil Ochs"];
  
  return obj;
}

updatePlaylist(playlist, 'My Bloody Valentine', 'Sometimes' );