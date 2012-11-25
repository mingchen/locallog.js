# locallog.js

## Introduction

`locallog.js` is a client persistent log by HTML5 localStorage.

Are you tired client js debug when a page refresh, 
all console log will be flush.
With `locallog.js` you can persistent your client log to HTML5 localStorage,
and view the persitent log later.

### Supported Browsers

Desktop browsers:

* Chrome 6+
* Firefox 3.6+
* Safari 5.0+
* Opera 10.00+
* IE 8+
* Android 2.1+
* iOS 3.1+

Mobile browsers:

* Firefox Mobile 10+
* Opera Mobile 11.10+
* WebOS 1.4+
* Windows Phone 7+
* Bada 1.0+
* BlackBerry OS 6+
* WebOS 1.4+

## Installation

1. Add following script link to your &lt;head&gt; section.

    <script src="jquery/jquery.js"></script>
    <script src="modernizr/modernizr.js"></script>
    <script src="js/locallog.js"></script>

2. Include on your &lt;html&gt; tag a class of “no-js”:

    <html class="no-js">

## API

* LocalLog.debug(msg)
  Write a debug `msg` to local storage.
* LocalLog.lastLineNo
  Get the last line number of log message.
* LocalLog.getItem(msg)
  Get the log item for `id`.
* LocalLog.clear()
  Clear all local logs.

## Example

To write a log, just call `LocalLog.debug()`, here is an example:

    LocalLog.debug('hello, HTML5 localStorage');

To view local log, please visit `locallog.html`.

## References

* [modernizr](http://modernizr.com/)
* [jQuery](http://jquery.com/)
* [How to use modernizr](http://webdesignernotebook.com/css/how-to-use-modernizr/)
* [HTML5 localStorage feature compare](http://html5test.com/compare/feature/storage-localStorage.html)

