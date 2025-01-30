/*
 * Copyright (c) 2025 toastkidjp.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompany this distribution.
 * The Eclipse Public License is available at http://www.eclipse.org/legal/epl-v10.html.
 */

/**
 * @author toastkidjp
 */
function toggleSidedrawer() {
  const bodyElement = document.body;
  if (bodyElement.classList.contains('hide-sidedrawer')) {
    showSidedrawer();
    return;
  }
  
  hideSidedrawer();
}

function showSidedrawer() {
  const bodyElement = document.body;
  const sidedrawerElement = document.getElementById('sidedrawer');
  // show overlay
/*
  var options = {
    onclose: function() {
      sidedrawerElement
        .removeClass('active')
        .appendTo(document.body);
    }
  };*/

  // show element
  const overlayElement = mui.overlay('on', { onclose: hideSidedrawer });
  document.getElementById('content-wrapper').append(overlayElement);
  setTimeout(function() {
    bodyElement.classList.remove('hide-sidedrawer');
    bodyElement.classList.add('mui-scroll-lock');
    sidedrawerElement.classList.add('active');
  }, 20);
}

function hideSidedrawer() {
  const bodyElement = document.body;
  const sidedrawerElement = document.getElementById('sidedrawer');
  bodyElement.classList.add('hide-sidedrawer');
  bodyElement.classList.remove('mui-scroll-lock');
  sidedrawerElement.classList.remove('active');
}
