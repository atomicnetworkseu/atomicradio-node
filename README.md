<p align="center">
  <a href="https://atomicnetworks.eu">
    <img alt="AtomicNetworks" src="https://cdn.atomicnetworks.eu/atnw/logo/logo.png" width="150" />
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
```javascript
const atomicradio = require('atomicradio');

async function test() {
    let value = await atomicradio.getChannel('one').getHistory();
    console.log(value);
}
test();
```

## Functions 📗
```javascript
/**
 * Channel live informations
 * @param {String} channel The channel name. (one, dance or trap)
 */
.getChannel(channel).getLive().isLive();

.getChannel(channel).getLive().getStreamer();


/**
 * Channel song informations
 * @param {String} channel The channel name. (one, dance or trap)
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
 * Channel upcoming song informations
 * @param {String} channel The channel name. (one, dance or trap)
 */
.getChannel(channel).getSchedule();


/**
 * Channel last song informations
 * @param {String} channel The channel name. (one, dance or trap)
 */
.getChannel(channel).getHistory();


/**
 * Channel stream urls
 * @param {String} channel The channel name. (one, dance or trap)
 */
.getChannel(channel).getStreamUrls().getHighQuality();

.getChannel(channel).getStreamUrls().getMiddleQuality();

.getChannel(channel).getStreamUrls().getLowQuality();
```
