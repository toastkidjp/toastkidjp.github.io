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
const bodyElement = document.body;
const sidedrawerElement = document.getElementById('sidedrawer');

  function toggleSidedrawer() {
    if (bodyElement.classList.contains('hide-sidedrawer')) {
      showSidedrawer();
      return;
    }
    
    hideSidedrawer();
  }

  function showSidedrawer() {
    // show overlay
/*
    var options = {
      onclose: function() {
        sidedrawerElement
          .removeClass('active')
          .appendTo(document.body);
      }
    };*/

//const overlayEl = mui.overlay('on', options);

    // show element
    //sidedrawerElement.appendTo($overlayEl);
    setTimeout(function() {
      bodyElement.classList.remove('hide-sidedrawer');
      bodyElement.classList.add('mui-scroll-lock');
      sidedrawerElement.classList.add('active');
    }, 20);
  }

  function hideSidedrawer() {
    bodyElement.classList.add('hide-sidedrawer');
    bodyElement.classList.remove('mui-scroll-lock');
    sidedrawerElement.classList.remove('active');
  }
