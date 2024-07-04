// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var maxopentab  = document.getElementById("maxopentab")
maxopentab.addEventListener("input",function(evt) {
    chrome.runtime.sendMessage({
        'type': 'change-max-open-tab',
        'value':this.value ? this.value : 20
    })
})
chrome.runtime.sendMessage({
    "type":'query-max-open-tab'
},(data) =>{
    maxopentab.value = data;
})