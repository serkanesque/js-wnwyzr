/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["index.html","a43745154352a66b724edb971859cace"],["src/ChevronRightMedium.svg","397e64597071d7837c143b4fa2e69f44"],["src/about-hero2.js","f3995eb20be83d50dd0881c2039e3097"],["src/advocacy.png","510cf67cc53db731ec775e4d5027fba9"],["src/article.js","162d881603e383f0efb1eafc27818b54"],["src/childrens-rights.js","f3f02341b5033f5b191e46bd34f21bbd"],["src/css/normalize.css","b19fce5ccea4287664abaf2f35e23bec"],["src/css/styles.css.css","e9832a31efad7ddf479936c2ec19f04f"],["src/css/webflow.css","fcabe572f9e3077f4745f066829abe66"],["src/facebook.svg","58ca955858e70bf8dc3f06cd86d62343"],["src/faith-groups.js","44498be6b1dbb4dd1e263d7d80eff881"],["src/fonts/AcuminPro-Bold.ttf","83e7ca7279bb028a6c31464fa3d78425"],["src/fonts/AcuminPro-Light.ttf","2851007332e87bc5a46d896749954d73"],["src/fonts/AcuminPro-Regular.ttf","de537e0b0686e0f03e74a15c57537643"],["src/fonts/AcuminProCond-Bold.ttf","08a4d99dc7b1d8d48ac15f9798de79d7"],["src/fonts/AcuminProCond-Regular.ttf","73a6bcbc0c4d17ee95f284ca1c5cc1a2"],["src/fonts/AcuminProSemiCond-ExtraLight.ttf","676117aba4eb30bd9261be3211cfc172"],["src/fonts/AcuminProSemiCond-Regular.ttf","6a1956f4a10e669379a07aee78c3e99e"],["src/fonts/AcuminProSemiCond-Semibold.ttf","c9ab2eaa692ad5a9b67408c09475dd2f"],["src/fonts/AdobeClean-Black.otf","d74e0834e41762361ffa81c468bcc4a6"],["src/fonts/AdobeClean-BlackIt.otf","0cd0974edc03aaa4aaf5cf543cb78fab"],["src/fonts/AdobeClean-Bold.otf","af494723bf6c37e03baa992dd9ae29f7"],["src/fonts/AdobeClean-BoldCond.otf","e32a875d3f2041c7eaac8805633b5301"],["src/fonts/AdobeClean-BoldCondIt.otf","d2dfa6bbbe9a206c5c8d556f8ea8011d"],["src/fonts/AdobeClean-BoldIt.otf","26bfd89eeffe310a086a694d30f2d683"],["src/fonts/AdobeClean-BoldSemiCn.otf","b3fac12b9521366dac7b5e360342d987"],["src/fonts/AdobeClean-BoldSemiCnIt.otf","3eaba4a0cf453701d9bb05a4724f8106"],["src/fonts/AdobeClean-Cond.otf","83660cf8b3a7680c1708b1337fc007f9"],["src/fonts/AdobeClean-CondIt.otf","e36e42e5b67d0ee354a4db415aa55a7a"],["src/fonts/AdobeClean-ExtraBold.otf","3e2327799bfbfd211a7d67291eb29e81"],["src/fonts/AdobeClean-ExtraBoldIt.otf","ee0ef6c13b32738cc7464716463bcd76"],["src/fonts/AdobeClean-It.otf","0e733d5d630b95c184b8ba8ddad2f882"],["src/fonts/AdobeClean-Light.otf","31a7e8bceb43df78b43ce0b422aff0c3"],["src/fonts/AdobeClean-LightIt.otf","a7292ee9565f41bf46d210c9fce21a2a"],["src/fonts/AdobeClean-Medium.otf","f5eaa9956721fcb4364febd244f2c6ca"],["src/fonts/AdobeClean-Regular.otf","5925f35755b2393ee97eda47bad605a8"],["src/fonts/AdobeClean-SemiCn.otf","cf0ca097a32428d452193331f8b85de0"],["src/fonts/AdobeClean-SemiCnIt.otf","cc6601e7f34f231a25b55c3dfd7ff4af"],["src/fonts/AdobeClean-SemiLight.otf","ab87fde2fac518677f8cbfc085fe57f8"],["src/fonts/Avenir-Black.ttf","9c1b59451194f6dbf7db650a401955e1"],["src/fonts/Avenir-BlackOblique.ttf","4ae560e7494e6b36d4e5dd70bad891e8"],["src/fonts/Avenir-Book.ttf","d9f644b72aa74e6787228a84a4edf5ca"],["src/fonts/Avenir-BookOblique.ttf","67c156b13823982de74f297037336561"],["src/fonts/Avenir-Heavy.ttf","26c0325921657d903102f652220490b3"],["src/fonts/Avenir-HeavyOblique.ttf","171458946a58f06ebcdd8bd20f4e158f"],["src/fonts/Avenir-Light.ttf","e5dd868df4bbe8841a212dc8d1efb58f"],["src/fonts/Avenir-LightOblique.ttf","debf513ba89171ead69e2572c3256186"],["src/fonts/Avenir-Medium.ttf","33f0123452491ec8dd7615000178b42c"],["src/fonts/Avenir-MediumOblique.ttf","353b81c7caae36cca333918b2e6d704e"],["src/fonts/Avenir-Oblique.ttf","0b0562e211097a9c88241de51e4501f8"],["src/fonts/Avenir-Roman.ttf","3f2cd34815cd131212962cee81f674c8"],["src/fonts/Druk-Bold.otf","022fcceb7dd6d1121a0559ff77ec0d62"],["src/fonts/Druk-WideMedium.otf","0afbafb309f127b2226ab8bbe60e9dc5"],["src/fonts/SF-Pro-Display-Black.otf","11e421ee3f03e231763aeb70962badd8"],["src/fonts/SF-Pro-Display-Bold.otf","644563f48ab5fe8e9082b64b2729b068"],["src/fonts/SF-Pro-Display-Heavy.otf","a545fc03ce079844a5ff898a25fe589b"],["src/fonts/SF-Pro-Display-Light.otf","ac5237052941a94686167d278e1c1c9d"],["src/fonts/SF-Pro-Display-Medium.otf","51fd7406327f2b1dbc8e708e6a9da9a5"],["src/fonts/SF-Pro-Display-Regular.otf","aaeac71d99a345145a126a8c9dd2615f"],["src/fonts/SF-Pro-Display-Semibold.otf","e6ef4ea3cf5b1b533a85a5591534e3e4"],["src/fonts/lineto-circular-pro-bold.ttf","2c34e4eae7a25247438484f54389a450"],["src/fonts/lineto-circular-pro-book.ttf","9d1891ccb5d7184f7c99396a8e224d05"],["src/fonts/lineto-circular-pro-medium.ttf","44d10b7173f802a0f8407111d1ba0d27"],["src/global-problem.js","c3df8880d8384d2e9fc83618d0327849"],["src/images/123-p-500.png","4de822715c0ae23b1a840f05f58634ad"],["src/images/123-p-800.png","16152282a4ba697605143535b81d8334"],["src/images/123.png","63bd0c87afcd30147c5f252b34265086"],["src/images/124-p-500.png","bb9c8c4327930a663bb0fd11ba5a6f01"],["src/images/124-p-800.png","ddc963e051b73ee17d8732161730bd11"],["src/images/124.png","3cf25e6cfac303db98ecb38eaa7aa340"],["src/images/ChevronRightMedium.svg","d1ed6b26aebe65319d816efdd69a7763"],["src/images/D3UiiIGWAAEf-o-.jpg","d4a6be58715e288f95fd8f893976de2d"],["src/images/Group 1.png","44f859f17bc11e9ce8f1789e3a0ffc58"],["src/images/Smock_Download_18_N.svg","a1de65baba8bb819ddb7e6fe5694f2fe"],["src/images/Smock_OpenIn_18_N.svg","9a1fc46a02643436e8711ec59bdcb4a5"],["src/images/TripleGripper.svg","9650db9dab0b7521a1f51ee6c6814dcd"],["src/images/Untitled-1.png","504f74b2bf46dfd6948a669074be9c6a"],["src/images/about-hero.png","3040894a3dae1e9916a261324fc4db53"],["src/images/advocacy.png","510cf67cc53db731ec775e4d5027fba9"],["src/images/charter.png","afe0a95ab9abf5b7b89d48925cba476f"],["src/images/charter54.png","61477ef6c409a32c30e8965254158069"],["src/images/custom – 1.png","fc635f19653bcf521450db06b17b8c0b"],["src/images/did-you-know-p-500.png","5740bf2bf3d7c0e4fe3c02091c31aec8"],["src/images/did-you-know.png","6260c5ca160d977a0ae92947a7fe44fb"],["src/images/did-you-know2.png","7c5519ca8ea074d2b590c5d78d149490"],["src/images/education.png","1728bf078cc1741f09b3a75df7f8be47"],["src/images/favicon.ico","5e15ef3df4e561dd3c64347d907cd395"],["src/images/hero-new-p-500.png","bb60fd573292fe26cf4cc2bc42a83a0d"],["src/images/hero-new-p-800.png","37118467e5305a2843c204275e16649b"],["src/images/hero-new.png","6e7a5eb9565f0ffd2f2d40fb28e4d1b9"],["src/images/hero2.png","0ccb0244ebc8ecb3626b907b05d879db"],["src/images/icon-person.png","1b29201ddbdf5c0d05e787ccee81d30c"],["src/images/image-102.png","1699ff3eb12071bc1ec5e959ec9ec49d"],["src/images/image-8.png","fe73f1a1846dab910839428a9b786881"],["src/images/panel1.png","2bd5e0ebb192cd21536372c63ea6676a"],["src/images/panel2.png","04cb60548b05583a6ba46a402354afe7"],["src/images/panel3.png","3431ca7d0a29640c622eef3a0e91b986"],["src/images/placeholder-m.png","cb758228a5d921c7bfebfd62beb41a85"],["src/images/progress.png","02c407061cb39a2adeb09c1bef7252a1"],["src/images/time.png","44f859f17bc11e9ce8f1789e3a0ffc58"],["src/images/time.svg","f704b85244089937d67a2a1b2896cf66"],["src/images/tree.png","4a3e479649367170f4b2791e89f849a8"],["src/images/webclip.png","5d19a6dc030c169dc83ff100058d12a5"],["src/introduction-content.js","498d4a03129ffa9707a2cfb1ac546392"],["src/introduction.js","0bf0a4bc6448a36cfc37a736f856cde8"],["src/issue-resources.js","6662ace289fd02812bc6079a1ddf4c60"],["src/js/webflow.js","f159f77e385c638619bc8829b4ded2d3"],["src/list-page.js","c197799dfa8349df136c0a088b1189cf"],["src/list.js","6b910ba66eedd6f2f847a044ab8be705"],["src/my-view1.js","b067c35b673535a3bdb91d3dfbc6639c"],["src/my-view10.js","7d6a896feabf773a60691b663e281ce9"],["src/my-view11.js","7c1e689b9b6dd4a7408f59eac90408ea"],["src/my-view2.js","bd16357bb42e65a4f56ae9375ad6a23e"],["src/my-view3-old.js","dd5e202f19344082985c435c5e6903ff"],["src/my-view3.js","b816975ed23ce01f82345512c3f8fbe5"],["src/my-view4.js","7f3c25621c71c4f01e9042e9300e2836"],["src/my-view404.js","659c6431d80fc23ae2896206ce28c698"],["src/my-view5.js","26272ea1abb12807e8f9cb26f7d57131"],["src/my-view6.js","c4d31ab83b87179e1aab80a30c46d166"],["src/my-view7.js","f837ad8b12f74dd0ea4512ef78e79405"],["src/my-view8.js","37dcf58b0d2013af619988b46548711e"],["src/my-view9.js","d20f1a09b2bef97dc8ea95d1237ed429"],["src/news-grid.js","4cfefd59d314bcb8c18432f863644df4"],["src/old-charter.js","b370f8532af635b21f2e95b6784b8a89"],["src/old-my-view3.js","18273741b382a02555fb88e0a4e3b63d"],["src/on-screen.js","e32e1d3ba0fe97ba324cb5f15b6b89e4"],["src/our-charter-old.js","f0b4e1744178795232a51205690ff090"],["src/publications.js","6725b6150fe215c2293fea485f6f3618"],["src/questions.js","6e705d1519374f28fdd4d9adc98f7f94"],["src/stories.js","587e768b5cb0f6ee01ebef21ae13691f"],["src/taking-action.js","b1448fb15fb975a3491b0e5126a42a0a"],["src/twitter.svg","6087605b58be03a1a2fe09ec128a29cc"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function (body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function (kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function (kv) {
        return ignoreUrlParametersMatching.every(function (ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function (kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function (requests) {
    return requests.map(function (request) {
      return request.url;
    });
  }).then(function (urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return setOfCachedUrls(cache).then(function (cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function (response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function (responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function () {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.keys().then(function (existingRequests) {
        return Promise.all(
          existingRequests.map(function (existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function () {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function (event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function (cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function (e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function (e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function (){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function (e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function (e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function (r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function (n){n.put(e,r).then(function (){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function (e){return g.setTimestampForUrl(e,o,a)}).then(function (e){return g.expireEntries(e,c,i,a)}).then(function (e){r("Successfully updated IDB.");var n=e.map(function (e){return t.delete(e)});return Promise.all(n).then(function (){r("Done with cache cleanup.")})}).catch(function (e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function (){return Promise.all([caches.open(e),caches.open(t)]).then(function (t){var n=t[0],r=t[1];return n.keys().then(function (e){return Promise.all(e.map(function (e){return n.match(e).then(function (t){return r.put(e,t)})}))}).then(function (){return caches.delete(e)})})})}function u(e,t){return o(t).then(function (t){return t.add(e)})}function f(e,t){return o(t).then(function (t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function (e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function (e,t,n){"use strict";function r(e){return new Promise(function (t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function (){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function (){t(r.result)},r.onerror=function (){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function (r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function (){r(e)},i.onabort=function (){o(i.error)}})}function c(e,t,n){return t?new Promise(function (r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function (e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function (){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function (n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function (){var e=a.result;e>t&&(s.openCursor().onsuccess=function (n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function (){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function (n){return s(e,t).then(function (e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function (e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function (e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function (e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function (t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function (e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function (e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function (e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function (e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function (e,r){t[e.name]=n[r+1]})}return function (e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function (e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function (e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function (){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function (e){s.prototype[e]=function (t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function (e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function (e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function (e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function (e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function (e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function (t){return t.match(e).then(function (t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function (e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function (t){return t.match(e).then(function (e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function (e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function (r,c){var s=!1,a=[],u=function (e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function (e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function (e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function (e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function (t){var s,a,u=[];if(c){var f=new Promise(function (r){s=setTimeout(function (){t.match(e).then(function (e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function (e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function (r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function (e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function (e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function (e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function (e,t,n){t.exports=Array.isArray||function (e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function (e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function (e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function (e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function (n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function (e,t,n){!function (){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function (e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function (){if(arguments.length<1)throw new TypeError;return e=e.map(function (e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function (e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function (r){if(r.some(function (e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function (t,r){return n.put(e[r],t)}))}).then(function (){})},Cache.prototype.add=function (e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/\/@webcomponents\/webcomponentsjs\//, toolbox.fastest, {});




