var playlist = {
  "Dave Matthews": "Say Goodbye"
};

function updatePlaylist (obj, key, value) {
   playlist['Phil Ochs'] = "Here's to the State of Mississippi";
   
   return obj;
}

updatePlaylist(playlist, 'My Bloody Valentine', 'Sometimes' );

function removeFromPlaylist (obj, key) {
  delete playlist["My Bloody Valentine"];
  delete playlist['Phil Ochs'];
  return obj;
}





