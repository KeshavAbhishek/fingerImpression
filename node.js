var typed = new Typed(".auto-type", {
    strings: ["Scanning...", "Verifying...", "Scanning...", "Verifying"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

document.getElementById('mainFrame').addEventListener('auxclick',(e)=>{
    e.preventDefault()
})