<p align="center">
  <a href="https://atomicradio.eu">
    <img alt="atomicradio" src="https://cdn.atomicnetworks.eu/logo/coloured.png" width="150" />
  </a>
</p>
<h1 align="center">
  Node AtomicRadio 📚
</h1>
<p align="center">
   The node.js library for the <a href="https://api.atomicradio.eu">atomicradio web-api</a>.
</p>
<p align="center">
  <a href="https://gitmoji.carloscuesta.me">
      <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
  </a>  
</p>

## Installation 🔧
```npm install atomicradio```

## Example 📄
```typescript
import AtomicAPI from "atomicradio";

const api = new AtomicAPI();

async function test() {
    let value = await api.getChannel("one").getHistory();
    console.log(value);
}
test();
```

## Functions 📗
```typescript
/**
 * Get the data of our livestream.
 */
.getLive().isLive();

.getLive().getStreamer();


/**
 * Get the data of a atomicradio channel.
 * @param channel channel name
 */
.getChannel(channel).getSong().getArtist();

.getChannel(channel).getSong().getTitle();

.getChannel(channel).getSong().getPlaylist();

.getChannel(channel).getSong().getStartTimestamp();

.getChannel(channel).getSong().getEndTimestamp();

.getChannel(channel).getSong().getDuration();

.getChannel(channel).getSong().get100Artwork();

.getChannel(channel).getSong().get250Artwork();

.getChannel(channel).getSong().get500Artwork();

.getChannel(channel).getSong().get1000Artwork();


/**
 * Get the data of the next playing songs
 * @param channel channel name
 */
.getChannel(channel).getSchedule();


/**
 * Get the data of the last played songs
 * @param channel channel name
 */
.getChannel(channel).getHistory();


/**
 * Get all stream urls of atomicradio
 * @param channel channel name
 */
.getChannel(channel).getStreamUrls().getHighQuality();

.getChannel(channel).getStreamUrls().getMiddleQuality();

.getChannel(channel).getStreamUrls().getLowQuality();
```
