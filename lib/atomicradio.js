const axios = require('axios');
var apiUrl = 'https://api.atomicradio.eu';

module.exports.getAllListeners = function() {
    return new Promise((resolve, reject) => {
        axios.get(apiUrl).then(response => {
            resolve(response.data.all_listeners);
        }).catch(error => {
            reject(error);
        });
    });
}

/**
 * @param {String} channel The channel name. (one, dance or trap)
 */
module.exports.getChannel = (channel) => {

    function getLive() {

        function isLive() {
            return new Promise((resolve, reject) => {
                axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                    resolve(response.data.live.is_live);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        function getStreamer() {
            return new Promise((resolve, reject) => {
                axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                    resolve(response.data.live.streamer);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        return { isLive, getStreamer };

    }

    function getSong() {

        function getArtist() {
            return new Promise((resolve, reject) => {
                axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                    resolve(response.data.song.artist);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        function getTitle() {
            return new Promise((resolve, reject) => {
                axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                    resolve(response.data.song.title);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        function getPlaylist() {
            return new Promise((resolve, reject) => {
                axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                    resolve(response.data.song.playlist);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        function getStartTimestamp() {
            return new Promise((resolve, reject) => {
                axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                    resolve(response.data.song.start_at);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        function getEndTimestamp() {
            return new Promise((resolve, reject) => {
                axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                    resolve(response.data.song.end_at);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        function getDuration() {
            return new Promise((resolve, reject) => {
                axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                    resolve(response.data.song.duration);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        function get100Artwork() {
            return new Promise((resolve, reject) => {
                axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                    resolve(response.data.song.artworks['100']);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        function get250Artwork() {
            return new Promise((resolve, reject) => {
                axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                    resolve(response.data.song.artworks['250']);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        function get500Artwork() {
            return new Promise((resolve, reject) => {
                axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                    resolve(response.data.song.artworks['500']);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        function get1000Artwork() {
            return new Promise((resolve, reject) => {
                axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                    resolve(response.data.song.artworks['1000']);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        return { getArtist,getTitle,getPlaylist,getStartTimestamp,getEndTimestamp,getDuration,get100Artwork,get250Artwork,get500Artwork,get1000Artwork };

    }

    function getSchedule() {
        return new Promise((resolve, reject) => {
            axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                resolve(response.data.schedule);
            }).catch(error => {
                reject(error);
            });
        });
    }

    function getHistory() {
        return new Promise((resolve, reject) => {
            axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                resolve(response.data.history);
            }).catch(error => {
                reject(error);
            });
        });
    }

    function getStreamUrls() {
        
        function getHighQuality() {
            return `https://listen.atomicradio.eu/${String(channel).toLowerCase()}/highquality.mp3`;
        }

        function getMiddleQuality() {
            return `https://listen.atomicradio.eu/${String(channel).toLowerCase()}/middlequality.mp3`;
        }

        function getLowQuality() {
            return `https://listen.atomicradio.eu/${String(channel).toLowerCase()}/lowquality.mp3`;
        }

        return { getHighQuality, getMiddleQuality, getLowQuality };

    }

    return { getLive, getSong, getSchedule, getHistory, getStreamUrls };

}