let splashes = ["Garry's Mod!", "Flaxkikare!", "Now with Mingebags!", 
"100% pure!", "Awesome!", "Now with CS:S content!", "Now without an observer!",
"Sandbox!", "DarkRP!", "TTT!", "Peter Griffin!", "Moyai", ":skull:",
"41.7 GBs of addons!", "Now with FNAF saves!", "?"]

window.onload = function(){
    let splash = document.querySelector(".titlesplash")
    let text = splashes[Math.ceil(Math.random() * splashes.length-1)]
    splash.textContent = text
}