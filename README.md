# STOP Russian military aggression against Ukraine 🇺🇦

If you are concerned about the security of the [web4ukraine.org](https://web4ukraine.org) project. Use this open source version of the script.

This version is hosted publicly, so you could see what you embed to your site. Script will call free API [ipapi.co](https://ipapi.co/),
which will retrive conuntry of visitor by IP lookup. If user country is `RU` script redirect user to website web4ukraine
with url of visitor page. Website web4ukraine.org redirect user back to your website after 6 seconds.

Script will remember detection result in cookie for one day.

use
```html
<script async src="https://pilotcz.github.io/web4ukraine/index.js"></script>
```

insted of
```html
<script async src="https://js.web4ukraine.org/"></script>
```

or install wia npm
```shell
npm i pilotcz-web4ukraine
```
than import module
```js
import web4ukraine from "pilotcz-web4ukraine"

web4ukraine();
```

Use freely or fork it.

![Ukraine flag](https://www.vut.cz/i/media/document_images/fotogalerie_doc/ostra/222616/FB_post__10__1600.png)
[image source](https://www.vut.cz/en/but/news-f19528/but-supports-the-independence-and-freedom-of-ukraine-d222616)
