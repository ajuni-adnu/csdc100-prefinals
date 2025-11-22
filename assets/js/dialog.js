// First question

var speed = 50;
var txt1 = 'A type of artificial intelligence that learns patterns from huge amounts of data and then creates new content—such as text, images, music, or code—based on what it learned.';
var txt2 = 'Gen AI works by learning patterns from a huge amount of data—text, images, audio, etc. It doesn’t “think,” but it notices how humans usually write, speak, or create things. When you ask it something, it predicts the most likely next words or details based on everything it has learned. It’s basically a super–pattern-matching machine that creates new stuff by remixing what it has already seen. It feels smart, but it’s really just using probabilities, not real understanding.';
var txt3 = 'Generative AI tools create new content from what they’ve learned. Examples include ChatGPT, Google Gemini, and DeepSeek for text, Midjourney and DALL·E for images, Suno for music, and Runway for videos. They don’t just analyze—they produce new stuff.';
var txt4 = "Generative AI's greatest strength is its ability to create brand new content—from stories and images to music and computer code—with incredible speed and scale. Think of it as a powerful brainstorming partner that never gets tired; you can give it a simple idea, and it will instantly generate countless variations and possibilities. This makes it an excellent tool for overcoming creative blocks, exploring new concepts, and handling the heavy lifting of initial drafts, freeing up humans to refine, edit, and add the final, thoughtful touches.";
var txt5 = 'Generative AI\'s biggest weakness is that it doesn\'t "know" anything; it\'s just predicting words or pixels based on patterns it learned from its training data. This means it can confidently state complete nonsense or "hallucinate" false facts as if they were true. It also can\'t reason or understand context like a human, so it often struggles with true logic, common sense, and telling what is right from wrong. Since it learns from existing information, it can easily repeat and even amplify the biases and mistakes found online. Although the AI appears to somewhat “reason”, all output they give is a reflection of its inputs and training data, not independent reasoning like humans. ';

var txt6 = 'In school, using generative AI responsibly means using it as a tool, not a shortcut. You can let it help you brainstorm ideas, summarize notes, or check grammar, but you should always understand and verify what it gives you. Never copy its work as your own—always cite it if you use it. Treat it like a smart assistant, not a replacement for your own thinking and learning.';
var txt7 = 'To avoid plagiarism and misuse, always use your own words when writing and give credit to any ideas or text you get from others, including AI. Don’t copy answers or papers—think of AI as a helper, not a cheat. Check facts, rewrite what you learn, and always show where your information comes from. This keeps your work honest and safe.';
var txt8 = 'To handle AI accuracy, always double-check what it tells you. AI can make mistakes or give outdated info, so compare its answers with trusted books, websites, or experts. Think of AI like a helper—it’s useful, but you are the one who decides if it’s correct.';
var txt9 = 'To handle bias and fairness in AI, remember that AI can reflect the opinions or mistakes in the data it learned from. Always look at multiple sources and question its answers. Don’t assume everything it says is fair or true—use your own judgment to spot unfairness or mistakes.';

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

  var f = 0;
function typeWriterSIX() {
  if (f < txt6.length) {
    document.getElementById("6th-humanQuestion").innerHTML += txt6.charAt(f);
    f++;
    setTimeout(typeWriterSIX, speed);
  }
  const waitScreen6 = document.getElementById("waitScreen6");
  if (waitScreen6) waitScreen6.remove();
}

  var g = 0;
function typeWriterSEVEN() {
  if (g < txt7.length) {
    document.getElementById("7th-humanQuestion").innerHTML += txt7.charAt(g);
    g++;
    setTimeout(typeWriterSEVEN, speed);
  }
  const waitScreen7 = document.getElementById("waitScreen7");
  if (waitScreen7) waitScreen7.remove();
}

  var h = 0;
function typeWriterEIGTH() {
  if (h < txt8.length) {
    document.getElementById("8th-humanQuestion").innerHTML += txt8.charAt(h);
    h++;
    setTimeout(typeWriterEIGTH, speed);
  }
  const waitScreen8 = document.getElementById("waitScreen8");
  if (waitScreen8) waitScreen8.remove();
}

  var i = 0;
function typeWriterNINTH() {
  if (i < txt9.length) {
    document.getElementById("9th-humanQuestion").innerHTML += txt9.charAt(i);
    i++;
    setTimeout(typeWriterNINTH, speed);
  }
  const waitScreen9 = document.getElementById("waitScreen9");
  if (waitScreen9) waitScreen9.remove();
}