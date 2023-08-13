let spotifySongs = [];


// add song to que
const addSongToQue = (songName) => {
    spotifySongs.push(songName);
}

addSongToQue('On The Road');
addSongToQue('Baby Powder');
addSongToQue('Heaven All Around Me');
addSongToQue('90 Proof');
addSongToQue('Up');

// list songs in que
const listSongs = () => {
    if (spotifySongs.length === 0) {
        console.log('The song list is empty. Add some songs!')
    } else if (spotifySongs.length >= 1) {
        for (i = 0; i < spotifySongs.length; i++) {
            const songs = spotifySongs[i];
            const songNumbers = i + 1
            console.log(`${songNumbers}. ${songs}`)
        }
    }
}

// remove first song
const removeFirstSong = () => {
    if (spotifySongs.length === 0) {
        console.log('The song list is empty. Add some songs!')
    } else if (spotifySongs.length >= 1) {
        spotifySongs.shift()
    }
}

//check if the song is in your list
const songIsInQue = (song) => {
    for (i=0; i < spotifySongs.length; i++) {
        // console.log(spotifySongs[i])
        if (song === spotifySongs[i]) {
            return true
        }
        // we are not adding a false because we want it to go through entire array. because the value of the song would be false, it will not return anything, thus allowing us to go through entire array. 
    }
    // we are putting this return here because if the statement is true, it will return and no further code will be run.
    return false
}

//remove specific song
    const removeThisSong = (song) => {
        //passing result of the function call to determine if song is in que
        const toBeRemoved = songIsInQue(song)
        if (toBeRemoved) {
            spotifySongs.splice(i, 1)
        } else {
            console.log('This song is not in your que.')
        }
    }

// removeThisSong('kdksnajc');
// listSongs()