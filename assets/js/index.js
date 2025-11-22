// Lobby typing "animation." https://css-tricks.com/snippets/css/typewriter-effect/ https://codepen.io/hi-im-si/pen/ALgzqo

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

// Typewriter script for  buttons.

var i = 0;
var txt = 'A type of artificial intelligence that learns patterns from huge amounts of data and then creates new content—such as text, images, music, or code—based on what it learned.';
var speed = 50;
function typeWriter() {
  
  if (i < txt.length) {
    document.getElementById("first-humanQuestion").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  document.getElementById("waitScreen").remove();
}

// Dark or light mode switch

function switchMode() {
  document.getElementById('lightdarkMode').addEventListener('click', () => {

    const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';

    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);

    // 💾 Save selection
    localStorage.setItem('theme', newTheme);
  });
}

// Auto dark-or-light mode.

window.addEventListener('DOMContentLoaded', (event) => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Determine which theme to use on first load
  const themeToUse = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');

  applyTheme(themeToUse);
});

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute("data-bs-theme", "dark");

    document.querySelectorAll('.bg-white').forEach(el => {
      el.classList.replace('bg-white', 'bg-dark');
    });

  } else {
    document.documentElement.setAttribute("data-bs-theme", "light");

    document.querySelectorAll('.bg-dark').forEach(el => {
      el.classList.replace('bg-dark', 'bg-white');
    });
  }
}


