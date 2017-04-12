# Some Historic Background
It is a contingency. A prolly&#45;fill of sorts. Once support for __*IE8*__ and relics such as __*attachEvent*__ are gone, then, a lot of the pain can be eased. You won&rsquo;t find __*JQuery*__ here. You may discover that this page is based off of a standard JQuery for desktop tutorial called [Nike Better World &#45; &lsquo;Behind the scenes&rsquo;](https://www.smashingmagazine.com/2011/07/behind-the-scenes-of-nike-better-world/ "Link to Nike Better World lesson at Smashing Magazine") taught at Smashing Magazine.


## Please visit
You can see [the project](https://donLucho.github.io/parallax "the project at github") for yourself and decide whether it is really for you or not. 


## JQuery is not javascript
Three seconds. That is the threshhold limit of time at which point a common website visitor decides to pull stakes and bail if your content is not fully loaded or interactive. I have __*always*__ maintained that JQuery (with CDN or otherwise) increases the likelihood of another fleeing customer. 


## Banana Nutcake Plus
This was constructed in 2011 or thereabouts. Fortunately, today in 2017 I can strip any references to documentElement.attachEvent type of code. Most importantly, I culled for the most part code that depended on browser sniffing even when it applied to progressive enhancement&#45;friendly devices. Today, on the other hand, even if it is anti&#45;pattern, I have limited browser sniffing to graceful degradation&#45;dependent devices such as the case with an iOS4 device which will never respond to __*window.matchMedia*__. And, I have thrown in some additional __*media&#45;queries*__ that are based on __*(max-width)*__ values as opposed to __*(max-device-width)*__. To express it in another way, viewport dimensions are more inclusive than screen dimensions.


### Unexpected surprises
I have no time at the present moment, but when I do one day maybe I will revisit this page with new image assets that do not choke when it is time for them to be minified. Until then I will only pipe them from one place to the other. And, I am supporting the __*last 6 versions*__ because of my partiality for iOS4 as I have explained. Otherwise, I would have been happy with the normal __*last 2 versions*__ that I normally apply.


### Plus
If I were to refer to this project as parallax for mobile&#45;devices, that would be a fallacy on my part. I added the mobile portion years after I had originally composed the original desktop version for each __*w3c&#45;compliant browsers*__ and __*IE8*__ at the time. Good timing helped, too. I saw Paul Irish in a youtube video and he obliquely referred to a [writeup of his own](http://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/) professing the benefits of css translations. Thank you, Paul &#45;&#45; I learned a lot on the subject.


## Reduce the number of calls with document fragments
If a browser is capable and expected to pick a media extension it will do so on its own. When audio and video are served, it is best to serve only what is necessary so that any other impertinent items are not stored in browser cache. This is my motive for, first, serving a single media extension, then, to apply the element in phases for only one reflow in contrast to multiple reflows courtesy of the __*createDocumentFragment*__ directive. I learned this from Nick Zakas on [youtube](https://www.youtube.com/watch?v=mHtdZgou0qU "Link to external Youtube video featuring Nick Zakas"). Thanks, dude! :)


## Some Personal Background
As if you cannot tell, indeed, I am a One Piece fan! But I had not always imagined the parallax project to be centered around the two characters you see. When, I imagined parallax, I imagined something similar to the 1980s video for &quot;Silent Lucidity&quot; by Queensryche. I was always impressed by the drummers set up in that video, thus, I will always associate those drums especially with a parallax effect figured prominently against a dark background. Today, however, the content contained within the project is based on an actual love-letter I received when I was 16 years old from my girlfriend who would like to joke around. This was __*before*__ the internet and e&#45;mail between the years of 1985 and 1989.