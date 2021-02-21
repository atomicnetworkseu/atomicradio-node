export default class AtomicAPI {
    /**
     * Get the current total of listeners
     */
    getAllListeners(): Promise<Number>;
    /**
     * Get the data of our livestream.
     */
    getLive(): {
        isLive: () => Promise<Boolean>;
        getStreamer: () => Promise<String>;
    };
    /**
     * Get the data of a atomicradio channel.
     * @param channel channel name
     */
    getChannel(channel: string): {
        getSong: () => {
            getArtist: () => Promise<String>;
            getTitle: () => Promise<String>;
            getPlaylist: () => Promise<String>;
            getStartTimestamp: () => Promise<Number>;
            getEndTimestamp: () => Promise<Number>;
            getDuration: () => Promise<Number>;
            get100Artwork: () => Promise<String>;
            get250Artwork: () => Promise<String>;
            get500Artwork: () => Promise<String>;
            get1000Artwork: () => Promise<String>;
        };
        getSchedule: () => Promise<any>;
        getHistory: () => Promise<any>;
        getStreamUrls: () => {
            getHighQuality: () => String;
            getMiddleQuality: () => String;
            getLowQuality: () => String;
        };
    };
}
