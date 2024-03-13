(function (window) {
    var names = ["Sebas", "John", "Manuel", "Luis", "Paulo", "Yuli", "cris", "Paula", "Laura", "Jimy"];
    for (var i in names) {
      var firstLetter = ((names[i]).charAt(0)).toLowerCase();
      if (firstLetter == 'j') {
         window.byeSpeaker.speak(names[i]);
      } else {
         window.helloSpeaker.speak(names[i]);
      }
    }
    })(window);