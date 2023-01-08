let splashes = ["Garry's Mod!", "Flaxkikare!", "Now with Mingebags!",
    "100% pure fun!", "Awesome!", "Now with CS:S content!", "Now without a black figure!",
    "Sandbox!", "DarkRP!", "TTT!", "Murder!", "Melon racer!", "GM Tower!", "Peter Griffin!",
    "Moyai", ":skull:", "41.7 GBs of addons!", "Now with FNAF saves!", "?", "Humorous!", 
    "bloxwich", "Made by Garry Newman!", "Gabe Newell!", "Gaben!", "Powered by Source!", 
    "gm_bigcity!", "Cough cough cough", "Without GlueLib!", "You have time to hide", "NonRP!", 
    "Multiplayer!", "Meaty", "You need me", "Distorted trumpet!", "Now with ARG's!",
    "Now with Lua!", "Wiremod!", "Now without Gman virus!", "Creepy!", "Door stuck!",
    "Now without backdoors!", "Also try Team Fortress 2!", "Heavy is dead!?", "garry!", "Rabscuttle!",
    "Facepunch!", "Missing texture!", "s&box!", "Roblox!", "M9K Weapons!", "Toybox!", "Losing is fun!"]

window.onload = function(){
    let splash = document.querySelector(".titlesplash")
    let text = splashes[Math.ceil(Math.random() * splashes.length-1)]
    splash.textContent = text
}