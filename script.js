function showGlitch() {
  var pshow = document.querySelector("#glitch")
    var btntext = document.querySelector("#glitchbtn")
    if ( pshow.style.visibility == "hidden")
      {
        pshow.style.visibility = "visible"
        btntext.innerHTML = `Hide Top Secret`
      }
    else
      {      
        pshow.style.visibility = "hidden"
        btntext.innerHTML = `Show Top Secret`
      }
}

function showGames() {
  var pshow = document.querySelector("#games")
    var btntext = document.querySelector("#gamesbtn")
    if ( pshow.style.visibility == "hidden")
      {
        pshow.style.visibility = "visible"
        btntext.innerHTML = `Hide Top Secret`
      }
    else
      {      
        pshow.style.visibility = "hidden"
        btntext.innerHTML = `Show Top Secret`
      }
}

function showHeels() {
  var pshow = document.querySelector("#heels")
    var btntext = document.querySelector("#heelsbtn")
    if ( pshow.style.visibility == "hidden")
      {
        pshow.style.visibility = "visible"
        btntext.innerHTML = `Hide Top Secret`
      }
    else
      {      
        pshow.style.visibility = "hidden"
        btntext.innerHTML = `Show Top Secret`
      }
}