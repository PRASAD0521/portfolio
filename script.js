gsap.from(".top h1",{
    x: -50,
    duration: 1,
    ease: "power1.out",
    opacity:0,
    // scrub: true
})
gsap.from(".navbar",{
    y: -100,
    duration: 1,
    ease: "power1.out",
    opacity:0,
    // scrub: true
})
gsap.to(".card",{
    y: -500,
    duration: 3,
    ease: "power1.out",
    opacity:1,
})
// ----------------------effects on page2--------------------- 
function handleAnimations() {
    const projects = document.querySelectorAll(".project1");
    const gradients = [
        "linear-gradient(to left, #000000, #4d2646)", 
        "linear-gradient(to left, #000, #323663)",
        "linear-gradient(to left, #000, #4d343b)",
        "linear-gradient(to left, #000, #332562)",
        "linear-gradient(to left, #000, #204163)"
    ];

    projects.forEach((project, index) => {
        const sno = document.querySelector(`#sn${index + 1}`);

        if (sno) {
            const projectRect = project.getBoundingClientRect();
            const triggerOffsetTop = window.innerHeight*0.6;
            const triggerOffsetBottom = window.innerHeight*0.6;
            // console.log(JSON.stringify(projectRect))
            // console.log(triggerOffsetTop)
            // console.log(triggerOffsetBottom)
            if (
                projectRect.top + triggerOffsetTop < window.innerHeight &&
                projectRect.bottom - triggerOffsetBottom > 0
            ) {
                gsap.to(sno, {
                    x: 80,
                    duration: 0.5,
                    background: gradients[index % gradients.length], 
                });
            } else {
                gsap.to(sno, {
                    x: 0,
                    duration: 0.5,
                    background: "initial", 
                });
            }
        }
    });
}
document.addEventListener("scroll", () => {
    handleAnimations();
});

document.addEventListener("DOMContentLoaded", () => {
    handleAnimations();
});

// -----------------boxes of page1------------------------
gsap.to(".box3",{
    y : -40,
    x : 80,
    scale : 1.5,
    delay : 1,
    duration : 2,
    ease : "power1.Out",
    repeat : -1,
    yoyo : true,
})
gsap.to(".box4",{
    y : 40,
    x : 100,
    delay : 2,
    duration : 2,
    ease : "power1.Out",
    repeat : -1,
    yoyo : true,
})

gsap.to(".box7",{
    y : -40,
    scale:0.5,
    delay : 2,
    duration : 2,
    ease : "power1.Out",
    repeat : -1,
    yoyo : true,
})
gsap.to(".box8",{
    y : -40,
    x : 60,
    delay : 3,
    duration : 2,
    ease : "power1.Out",
    repeat : -1,
    yoyo : true,
})
gsap.to("#sone",{
    x: 50
})