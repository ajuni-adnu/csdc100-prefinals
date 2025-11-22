// First question

var speed = 50;
var txt1 = 'A type of artificial intelligence that learns patterns from huge amounts of data and then creates new content—such as text, images, music, or code—based on what it learned.';
var txt2 = 'Gen AI works by learning patterns from a huge amount of data—text, images, audio, etc. It doesn’t “think,” but it notices how humans usually write, speak, or create things. When you ask it something, it predicts the most likely next words or details based on everything it has learned. It’s basically a super–pattern-matching machine that creates new stuff by remixing what it has already seen. It feels smart, but it’s really just using probabilities, not real understanding.';
var txt3 = 'Generative AI tools create new content from what they’ve learned. Examples include ChatGPT, Google Gemini, and DeepSeek for text, Midjourney and DALL·E for images, Suno for music, and Runway for videos. They don’t just analyze—they produce new stuff.';
var txt4 = "Generative AI's greatest strength is its ability to create brand new content—from stories and images to music and computer code—with incredible speed and scale. Think of it as a powerful brainstorming partner that never gets tired; you can give it a simple idea, and it will instantly generate countless variations and possibilities. This makes it an excellent tool for overcoming creative blocks, exploring new concepts, and handling the heavy lifting of initial drafts, freeing up humans to refine, edit, and add the final, thoughtful touches.";
var txt5 = 'Generative AI\'s biggest weakness is that it doesn\'t "know" anything; it\'s just predicting words or pixels based on patterns it learned from its training data. This means it can confidently state complete nonsense or "hallucinate" false facts as if they were true. It also can\'t reason or understand context like a human, so it often struggles with true logic, common sense, and telling what is right from wrong. Since it learns from existing information, it can easily repeat and even amplify the biases and mistakes found online.';

  var a = 0;
function typeWriterONE() {

  if (a < txt1.length) {
    document.getElementById("1st-humanQuestion").innerHTML += txt1.charAt(a);
    a++;
    setTimeout(typeWriterONE, speed);
  }
  const waitScreen1 = document.getElementById("waitScreen1");
  if (waitScreen1) waitScreen1.remove();
}

  var b = 0;
function typeWriterTWO() {
  if (b < txt2.length) {
    document.getElementById("2nd-humanQuestion").innerHTML += txt2.charAt(b);
    b++;
    setTimeout(typeWriterTWO, speed);
  }
  const waitScreen2 = document.getElementById("waitScreen2");
  if (waitScreen2) waitScreen2.remove();
}

  var c = 0;
function typeWriterTHREE() {
  if (c < txt3.length) {
    document.getElementById("3rd-humanQuestion").innerHTML += txt3.charAt(c);
    c++;
    setTimeout(typeWriterTHREE, speed);
  }
  const waitScreen3 = document.getElementById("waitScreen3");
  if (waitScreen3) waitScreen3.remove();
}

  var d = 0;
function typeWriterFOUR() {
  if (d < txt4.length) {
    document.getElementById("4th-humanQuestion").innerHTML += txt4.charAt(d);
    d++;
    setTimeout(typeWriterFOUR, speed);
  }
  const waitScreen4 = document.getElementById("waitScreen4");
  if (waitScreen4) waitScreen4.remove();
}

  var e = 0;
function typeWriterFIVE() {
  if (e < txt5.length) {
    document.getElementById("5th-humanQuestion").innerHTML += txt5.charAt(e);
    e++;
    setTimeout(typeWriterFIVE, speed);
  }
  const waitScreen5 = document.getElementById("waitScreen5");
  if (waitScreen5) waitScreen5.remove();
}