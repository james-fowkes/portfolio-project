// CLICK EVENTS

let experienceButtonOne = document.getElementsByClassName('arrow-right')[0];
let experienceButtonTwo = document.getElementsByClassName('arrow-right')[1];
let experienceButtonThree = document.getElementsByClassName('arrow-right')[2];
let contactMenuButton = document.getElementsByClassName('arrow-right')[3];

let experienceMenu0ne = document.getElementsByClassName('side-overlay-experience')[0];
let experienceMenuTwo = document.getElementsByClassName('side-overlay-experience')[1];
let experienceMenuThree = document.getElementsByClassName('side-overlay-experience')[2];
let contactMenu = document.getElementsByClassName('side-overlay-contact')[0];

let closeButtonOne = document.getElementsByClassName('close-button')[0];
let closeButtonTwo = document.getElementsByClassName('close-button')[1];
let closeButtonThree = document.getElementsByClassName('close-button')[2];
let closeButtonFour = document.getElementsByClassName('close-button')[3]

let menuOverlay = document.getElementById('menu-active-overlay');

showMenuOne = () => {
    experienceMenu0ne.style.transform = `translateX(${0}vh)`;
    menuOverlay.style.visibility = 'visible';
    experienceButtonTwo.removeEventListener('click', showMenuTwo)
    experienceButtonThree.removeEventListener('click', showMenuThree)
  }

hideMenuOne = () => {
    experienceMenu0ne.style.transform = '';
    menuOverlay.style.visibility = '';
    experienceButtonTwo.addEventListener('click', showMenuTwo)
    experienceButtonThree.addEventListener('click', showMenuThree)
}

showMenuTwo = () => {
    experienceMenuTwo.style.transform = `translateX(${0}vh)`;
    menuOverlay.style.visibility = 'visible';
  }

hideMenuTwo = () => {
    experienceMenuTwo.style.transform = '';
    menuOverlay.style.visibility = '';

}

showMenuThree = () => {
    experienceMenuThree.style.transform = `translateX(${0}vh)`;
    menuOverlay.style.visibility = 'visible';

  }

hideMenuThree = () => {
    experienceMenuThree.style.transform = '';
    menuOverlay.style.visibility = '';
}

showContactMenu = () => {
    contactMenu.style.transform = `translateX(${0}vh)`;
    menuOverlay.style.visibility = 'visible';
}

hideContactMenu = () => {
    contactMenu.style.transform = '';
    menuOverlay.style.visibility = '';
}

closeButtonOne.addEventListener('click', hideMenuOne)
experienceButtonOne.addEventListener('click', showMenuOne)
closeButtonTwo.addEventListener('click', hideMenuTwo)
experienceButtonTwo.addEventListener('click', showMenuTwo)
closeButtonThree.addEventListener('click', hideMenuThree)
experienceButtonThree.addEventListener('click', showMenuThree)
closeButtonFour.addEventListener('click', hideContactMenu)
contactMenuButton.addEventListener('click', showContactMenu)


// SCROLL EVENTS

window.addEventListener('scroll', function() {
    
    let scrollCoeff = (Math.floor((scrollY / document.querySelector('body').offsetHeight) * 1000))/1000;
    let pageBottom = this.window.innerHeight - this.document.getElementById('contact-section').getBoundingClientRect().top;
    let containerPositionAbout = document.getElementById('about').getBoundingClientRect().top;
    let containerPositionExperience = document.getElementById('experience').getBoundingClientRect().top;
    let containerPositionContact = document.getElementById('contact-section').getBoundingClientRect().bottom;
    let centralImage = document.getElementById('central-image')
    
    // this.document.querySelector('h1').innerHTML = scrollCoeff;
    // this.document.querySelectorAll('a')[0].innerHTML = pageBottom
    // this.document.querySelectorAll('a')[1].innerHTML = containerPositionAbout;
    // this.document.querySelectorAll('a')[2].innerHTML = containerPositionExperience;
    // this.document.querySelectorAll('a')[3].innerHTML = containerPositionContact;
    
    // underlines menu items based on scroll position
    if ((containerPositionAbout < (scrollY / 2)) && (containerPositionExperience > (scrollY / 2))) {
        this.document.querySelectorAll('a')[1].style.backgroundSize = '100% 0.05em';
    } else {
        this.document.querySelectorAll('a')[1].style.backgroundSize = '';
    }
    if ((containerPositionExperience < (scrollY / 2)) && (containerPositionContact > (scrollY / 2))) {
        this.document.querySelectorAll('a')[2].style.backgroundSize = '100% 0.05em';
    } else {
        this.document.querySelectorAll('a')[2].style.backgroundSize = '';
    }
    if (containerPositionContact < (scrollY/2)) {
        this.document.querySelectorAll('a')[3].style.backgroundSize = '100% 0.05em';
    } else {
        this.document.querySelectorAll('a')[3].style.backgroundSize = '';
    }

    // moves central image right based on scroll position, enlargens it at the bottom of the page
    
if (this.window.innerWidth >= 900) {
    if ((scrollCoeff > 0.25) && (scrollCoeff < 0.5)) {    
        centralImage.style.paddingLeft = `${(scrollCoeff - 0.25) * 3300}px`;
        centralImage.style.height = '';
    } else if (scrollCoeff >= 0.5) {
        centralImage.style.paddingLeft = `${0.25 * 3300}px`
        centralImage.style.height = `${(scrollCoeff + 0.5) * 50}vh`
    } else {
        centralImage.style.paddingLeft = '';
        centralImage.style.height = '';
    }
}
if (this.window.innerWidth < 900) {
    if ((scrollCoeff > 0.25) && (scrollCoeff < 0.5)) {    
        centralImage.style.paddingLeft = `${(scrollCoeff - 0.25) * 2200}px`;
        centralImage.style.height = '';
    } else if (scrollCoeff >= 0.5) {
        centralImage.style.paddingLeft = `${0.25 * 2200}px`
    } else {
        centralImage.style.paddingLeft = '';
    }
}

    // dims and subsequently brightens central image based on scroll position
    if (scrollCoeff > 0) {
        centralImage.style.opacity = 1 - ((scrollCoeff) * 3);
    }
    if ((scrollCoeff > 0.25) && (scrollCoeff < 0.5)) {
        centralImage.style.opacity = 0.25;
    }
    if (scrollCoeff >= 0.5) {
        centralImage.style.opacity = (scrollCoeff - 0.25) + (pageBottom/1000);
    } 

})
