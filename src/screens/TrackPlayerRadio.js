import TrackPlayer from 'react-native-track-player';


TrackPlayer.setupPlayer().then(() => {
    // The player is ready to be used
});


var track = {
    id: 'unique track id', // Must be a string, required
    
    url: 'https://s3.radio.co/s4137c52f5/listen', // Load media from the network
   
    title: 'GT Road FMRadio',
    artist: '',
    album: 'FMRadio',
   
};

TrackPlayer.add(track).then(function() {
    // The tracks were added
});

let state = await TrackPlayer.getState();
let trackId = await TrackPlayer.getCurrentTrack();
let trackObject = await TrackPlayer.getTrack(trackId);

// Position, buffered position and duration return values in seconds
let position = await TrackPlayer.getPosition();
let buffered = await TrackPlayer.getBufferedPosition();
let duration = await TrackPlayer.getDuration();
