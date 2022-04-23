# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jonathan Dieu**

Time spent: **7** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
- [x] Implemented a xylaphone-like interface with keys that map to respective notes/frequencies matching an octave on a piano >:)
- [x] Added songs to play randomized each time the game starts (Heart & Soul, Home on the Range, My Country Tis of Thee)
- [x] 



## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- CSS Color Codes: https://www.quackit.com/css/css_color_codes.cfm
- Musical Note Frequency Chart: https://producelikeapro.com/blog/note-frequency-chart/
- Text formatting in JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
So, one infuriating bug that had me go down a ridiculous rabbit hole after another was the issue that was occuring where  In order to finally sleep soundly at night, I resorted to learning how to use the Glitch Debugger, where I was able to observe the all local and global variables that existed within the scope of my program.
Doing so resulted in me quickly realizing that the value of the current pattern was changing each time due to me not placing the logic for choosing a song in the correct scope. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
After completing this mini-project, I'm extremely curious as to just how in-depth actual web-developers go in creating sites that are much more complicated than this one. I'm wondering about all the different ways that people in the industry are able to manage all of the knowledge and experience they've gained and apply it to new projects working with new tools that they may have never even heard of before. I would love to see just how complex a project can get when professionals work on a product that eventually has to go to market within a certain timeframe.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a couple more hours to work on this project, I think I would like to come up with a more intuitive way for the user to interact with the site a opposed to just making them play the song from scratch over and over again. That being said, I think I could also take that idea and run with it in the direction of an educational platform where students can plug in a MIDI instrument of some kind (probably a keyboard) and learn to play songs interactively by just watching the screen play back notes. In that respect, I could potentially add note annotations, and in the future maybe even sheet music to display on the screen for the user to read.



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright Jonathan Dieu

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.