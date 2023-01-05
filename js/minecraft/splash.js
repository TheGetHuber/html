let splashes = ["Garry's Mod!", "Flaxkikare!", "Now with Mingebags!", 
"100% pure!", "Awesome!", "Now with CS:S content!", "Now without an observer!",
"Sandbox!", "DarkRP!", "TTT!", "Peter Griffin!"]

window.onload = function(){
    let splash = document.querySelector(".titlesplash")
    let text = splashes[Math.ceil(Math.random() * splashes.length-1)]
    splash.textContent = text
    splash.style.margin = "49px 0 0 " + 49 +" px"
}