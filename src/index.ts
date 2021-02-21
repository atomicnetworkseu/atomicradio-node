import axios from 'axios';
const apiUrl = 'https://api.atomicradio.eu';

export default class AtomicAPI {

    /**
     * Get the current total of listeners
     */
    getAllListeners(): Promise<number> {
        return new Promise((resolve, reject) => {
            axios.get(apiUrl + '/channels').then(response => {
                resolve(response.data.listeners.all);
            }).catch(error => {
                reject(error);
            });
        });
    }

    /**
     * Get the data of our livestream.
     */
    public getLive() {

        /**
         * Get the status of our livestream.
         */
        function isLive(): Promise<boolean> {
            return new Promise((resolve, reject) => {
                axios.get(apiUrl + '/channels/one').then(response => {
                    resolve(response.data.live.is_live);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        /**
         * Get the streamer of our livestream.
         */
        function getStreamer(): Promise<string> {
            return new Promise((resolve, reject) => {
                axios.get(apiUrl + '/channels/one').then(response => {
                    resolve(response.data.live.streamer);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        return { isLive, getStreamer }

    }

    /**
     * Get the data of a atomicradio channel.
     * @param channel channel name
     */
    public getChannel(channel: string) {

        /**
         * Get the data from the currently playing song
         */
        function getSong() {

            /**
             * Get the artist from the currently playing song
             */
            function getArtist(): Promise<string> {
                return new Promise((resolve, reject) => {
                    axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                        resolve(response.data.song.artist);
                    }).catch(error => {
                        reject(error);
                    });
                });
            }

            /**
             * Get the title from the currently playing song
             */
            function getTitle(): Promise<string> {
                return new Promise((resolve, reject) => {
                    axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                        resolve(response.data.song.title);
                    }).catch(error => {
                        reject(error);
                    });
                });
            }

            /**
             * Get the playlist from the currently playing song
             */
            function getPlaylist(): Promise<string> {
                return new Promise((resolve, reject) => {
                    axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                        resolve(response.data.song.playlist);
                    }).catch(error => {
                        reject(error);
                    });
                });
            }

            /**
             * Get the start timestamp in seconds from the currently playing song
             */
            function getStartTimestamp(): Promise<number> {
                return new Promise((resolve, reject) => {
                    axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                        resolve(response.data.song.start_at);
                    }).catch(error => {
                        reject(error);
                    });
                });
            }

            /**
             * Get the end timestamp in seconds from the currently playing song
             */
            function getEndTimestamp(): Promise<number> {
                return new Promise((resolve, reject) => {
                    axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                        resolve(response.data.song.end_at);
                    }).catch(error => {
                        reject(error);
                    });
                });
            }

            /**
             * Get the duration from the currently playing song
             */
            function getDuration(): Promise<number> {
                return new Promise((resolve, reject) => {
                    axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                        resolve(response.data.song.duration);
                    }).catch(error => {
                        reject(error);
                    });
                });
            }

            /**
             * Get the 100x100 artwork from the currently playing song
             */
            function get100Artwork(): Promise<string> {
                return new Promise((resolve, reject) => {
                    axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                        resolve(response.data.song.artworks['100']);
                    }).catch(error => {
                        reject(error);
                    });
                });
            }

            /**
             * Get the 250x250 artwork from the currently playing song
             */
            function get250Artwork(): Promise<string> {
                return new Promise((resolve, reject) => {
                    axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                        resolve(response.data.song.artworks['250']);
                    }).catch(error => {
                        reject(error);
                    });
                });
            }

            /**
             * Get the 500x500 artwork from the currently playing song
             */
            function get500Artwork(): Promise<string> {
                return new Promise((resolve, reject) => {
                    axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                        resolve(response.data.song.artworks['500']);
                    }).catch(error => {
                        reject(error);
                    });
                });
            }

            /**
             * Get the 1000x1000 artwork from the currently playing song
             */
            function get1000Artwork(): Promise<string> {
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

        /**
         * Get the data of the next playing songs
         */
        function getSchedule(): Promise<any> {
            return new Promise((resolve, reject) => {
                axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                    resolve(response.data.schedule);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        /**
         * Get the data of the last played songs
         */
        function getHistory(): Promise<any> {
            return new Promise((resolve, reject) => {
                axios.get(apiUrl + '/channels/' + String(channel)).then(response => {
                    resolve(response.data.history);
                }).catch(error => {
                    reject(error);
                });
            });
        }

        /**
         * Get all stream urls of atomicradio
         */
        function getStreamUrls() {

            function getHighQuality(): string {
                return `https://listen.atomicradio.eu/${String(channel).toLowerCase()}/highquality.mp3`;
            }

            function getMiddleQuality(): string {
                return `https://listen.atomicradio.eu/${String(channel).toLowerCase()}/middlequality.mp3`;
            }

            function getLowQuality(): string {
                return `https://listen.atomicradio.eu/${String(channel).toLowerCase()}/lowquality.mp3`;
            }

            return { getHighQuality, getMiddleQuality, getLowQuality };

        }

        return { getSong, getSchedule, getHistory, getStreamUrls };

    }

}