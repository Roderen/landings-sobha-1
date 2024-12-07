'use strict';

/* Consult form ============================================================== */
$(function () {
  $('.popup-consult form').on('submit', function (e) {
    e.preventDefault();

    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $form.addClass('thanks');
        $form.removeClass('sending');
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});

/* Brochure form */
$(function () {
  $('.popup-brochure form').on('submit', function (e) {
    e.preventDefault();

    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $form.addClass('thanks');
        window.location.href = "/Sobha-One-Brochure.pdf";
        $form.removeClass('sending');
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});

/* Floor form */
$(function () {
  $('.popup-floor form').on('submit', function (e) {
    e.preventDefault();

    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $form.addClass('thanks');
        window.location.href = "/Sobha-One-Brochure.pdf";
        $form.removeClass('sending');
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});

/* Sign up form ====================================================================== */
$(function () {
  $('.units__form').on('submit', function (e) {
    e.preventDefault();

    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $('.form__succsess').css('display', 'flex');
        $form.removeClass('sending');
        setTimeout(() => {
          $('.form__succsess').css('display', 'none');
        }, 5000);
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});

/* Sign up form ====================================================================== */
$(function () {
  $('.sign-up form').on('submit', function (e) {
    e.preventDefault();

    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $('.form__succsess').css('display', 'flex');
        $form.removeClass('sending');
        setTimeout(() => {
          $('.form__succsess').css('display', 'none');
        }, 5000);
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});

/* Footer form ====================================================================== */
$(function () {
  $('.footer__form').on('submit', function (e) {
    e.preventDefault();

    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $('.form__succsess').css('display', 'flex');
        $form.removeClass('sending');
        setTimeout(() => {
          $('.form__succsess').css('display', 'none');
        }, 5000);
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});

// Invalid input
function invalidInput() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const popupFormInputs = form.querySelectorAll('input');
    const popupFormBtn = form.querySelector('button[type="submit"]');

    popupFormBtn.addEventListener('click', () => {
      popupFormInputs.forEach(footerInput => {
        if (!footerInput.value && !footerInput.checked) {
          footerInput.classList.add('invalid-input')
        } else {
          footerInput.classList.remove('invalid-input');
        }
      })
    });

    popupFormInputs.forEach(input => {
      input.addEventListener('change', () => {
        if (!input.value) {
          input.classList.remove('input-valid');
        } else {
          input.classList.add('input-valid');
        }
      })
    })
  })
}

invalidInput();


function floorTabs() {
  const floorInfo = document.querySelectorAll('.floor__info-text__item'),
      floorImages = document.querySelectorAll('.floor__info-img'),
      floorButtons = document.querySelectorAll('.floor__number-btn');
  let currentTab = 0;

  floorButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      currentTab = index;
      renderTabs();
    })
  })

  /* Add "active" class to current content block */
  function renderTabs() {
    floorInfo.forEach(info => {
      info.classList.contains('active') && info.classList.remove('active');
    })
    floorInfo[currentTab].classList.add('active');

    floorImages.forEach(img => {
      img.classList.contains('active') && img.classList.remove('active');
    })
    floorImages[currentTab].classList.add('active');
  }

  renderTabs();
}

floorTabs();



/* Open and Close Popup */
function openPopups() {
  const popups = document.querySelectorAll('.popup');
  const popupClose = document.querySelectorAll('.popup-close');
  const popupBtn = document.querySelectorAll('.popup-button');

  popupBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      popups.forEach(popup => {
        if (btn.dataset.popup == popup.dataset.popup) {
          popup.classList.add('active');
          document.body.classList.add('active');
        }
      })
    })
  })

  popupClose.forEach(closeItem => {
    closeItem.addEventListener('click', e => {
      popups.forEach(popup => {
        popup.classList.remove('active');
        document.body.classList.remove('active');
      })
    })
  })
}

openPopups();


function burgerMenu() {
  const secondHeader = document.querySelector('.second__header');
  const burgerMenu = document.querySelector('.burger__menu');

  secondHeader.addEventListener('click', () => {
    if (!burgerMenu.classList.contains('active')) {
      burgerMenu.style.display = 'block';
      setTimeout(() => {
        burgerMenu.classList.add('active');
        secondHeader.classList.add('active');
      }, 1);
    } else {
      burgerMenu.classList.remove('active');
      secondHeader.classList.remove('active');
      setTimeout(() => {
        burgerMenu.style.display = 'none';
        burgerMenu.classList.remove('active');
        secondHeader.classList.remove('active');
      }, 500);
    }
  })

  //Close menu when clicked on link
  const burgerLinks = document.querySelectorAll('.burger__menu-list li a');

  burgerLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (burgerMenu.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        secondHeader.classList.remove('active');
        setTimeout(() => {
          burgerMenu.style.display = 'none';
          burgerMenu.classList.remove('active');
          secondHeader.classList.remove('active');
        }, 500);
      }
    })
  });
}

if (innerWidth < 1200) {
  burgerMenu();
}


/* Limit number and email */
const limitNumber = e => {
  const value = e.value;
  e.value = value.replace(/[A-Za-zА-Яа-яЁё]/g, '');
}

const limitEmail = e => {
  const value = e.value;
  e.value = value.replace(/[А-Яа-яЁё]/g, '');
}

/* Form succsess =============================== */
const formSuccsess = document.querySelector('.form__succsess');
document.querySelector('.form__succsess-close').addEventListener('click', () => {
  formSuccsess.style.display = 'none';
})


let rellax = new Rellax('.rellax');


function showSecondHeader() {
  const header = document.querySelector('.second__header');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 400) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  })
}

if (innerWidth > 770) {
  showSecondHeader();
}



// Scroll anchor
function scrollToAnchor() {
  $('a[href*="#"]:not([href="#"])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - '0'
        }, 700);
        return false;
      }
    }
  });
};
scrollToAnchor();


// Observer for a element navbar menu
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav__link').forEach((link) => {
        let id = link.getAttribute('href').replace('#', '');
        if (id === entry.target.id) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
}, {
  threshold: 0.25
});
document.querySelectorAll('section').forEach(section => {
  observer.observe(section)
});


/* For All Sites ================================== */
$(document).ready(function () {
  let userPower = {};
  $(document).on('input', 'input', function () {
    let name = $(this).attr('name');
    if (typeof userPower[name] !== "undefined") {
      userPower[name] = userPower[name] + 1;
    } else {
      userPower[name] = 1;
    }
  }).on('focus', 'input', function () {
    if (typeof userPower['focus'] !== "undefined") {
      userPower['focus'] = userPower['focus'] + 1;
    } else {
      userPower['focus'] = 1;
    }
  }).on('click', 'button, a', function () {
    if (typeof userPower['click'] !== "undefined") {
      userPower['click'] = userPower['click'] + 1;
    } else {
      userPower['click'] = 1;
    }
  });
  $('form').submit(function () {
    userPoints(userPower);
  });
});

function userPoints(userPower) {
  let user_ses = 0,
      input_score = 0;
  user_ses = user_ses + (Object.keys(userPower).length / 10);

  if (typeof userPower['focus'] !== "undefined" && userPower['focus'] >= (Object.keys(userPower).length - 2)) {
    user_ses = user_ses + 0.2;
  }
  if (typeof userPower['click'] !== "undefined") {
    user_ses = user_ses + 0.1;
  }
  for (const [key, value] of Object.entries(userPower)) {
    if (key != 'focus' && key != 'click') {
      input_score = input_score + value;
    }
  }
  if (typeof userPower['focus'] !== "undefined" && input_score >= (Object.keys(userPower).length - 2)) {
    user_ses = user_ses + 0.2;
  }
  saveCookie('user_score', user_ses);

  return user_ses;
}

function saveCookie(n, v, t = 30) {
  let saveDate = new Date(Date.now() + (60 * 60 * 24 * t * 1000));
  document.cookie = n + "=" + v + "; path=/; expires=" + saveDate.toGMTString();
}

function readCookie(name) {
  let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}