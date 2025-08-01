const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)





let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section1',
            start: '50% 50%',
            end: '130% 50%',
            scrub: 1
        }
    });

    tl.to('#strawleaf1', {
        top: "120%",
        left: "80%",
        rotate: 90
    }, 'timeO')
        .to('#strawleaf2', {
            top: "105%",
            left: "5%",
            rotate: 120
        }, 'timeO')
        .to('#strawberry', {
            top: "115%",
            left: "5%",
        }, 'timeO')
        .to('#strawberry01', {
            top: "130%",
            left: "15%",
        }, 'timeO')
        .to('#strawbunch', {
            top: "160%",
            left: "70%",
        }, 'timeO')

});

mm.add("(max-width: 799px)", () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section1',
            start: '50% 50%',
            end: '130% 50%',
            scrub: 1
        }
    });
    tl.to('#strawleaf1', {
        top: "160%",
        left: "5%",
        rotate: 90
    }, 'timeO')
        .to('#strawleaf2', {
            top: "105%",
            left: "5%",
            rotate: 120
        }, 'timeO')
        .to('#strawberry', {
            top: "110%",
            left: "5%",
        }, 'timeO')
        .to('#strawberry01', {
            top: "125%",
            left: "15%",
        }, 'timeO')
        .to('#strawbunch', {
            top: "150%",
            left: "50%",
        }, 'timeO')
});





let mm2 = gsap.matchMedia();

mm2.add("(min-width: 800px)", () => {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section2',
            start: '50% 50%',
            end: '200% 100%',
            scrub: 1,
            // markers: true
        }
    });

    tl2.to('#strawberry', {
        top: "220%",
        left: "39%",
        width: "22.5vw",
    }, 'time1')
        .to('#strawberry01', {
            top: "220%",
            left: "39%",
            width: "22.5vw",
        }, 'time1')
        .from('#pineapplecut', {
            y: 500,
            x: -900,
            rotate: -90,
        }, 'time1')
        .from('#pineapple', {
            y: 300,
            x: -700,
            rotate: -90,
        }, 'time1')
        .from('#orangefruit', {
            y: 500,
            x: 900,
            rotate: 90,
        }, 'time1')
        .from('#yellow', {
            y: 300,
            x: 700,
            rotate: 90,
        }, 'time1')
});

mm2.add("(max-width: 799px)", () => {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section3',
            start: '0% 70%',
            end: '100% 100%',
            scrub: 1,
            // markers: true
        }
    });
    tl2.from('#pineapplecut', {
        y: 500,
        x: -900,
        rotate: -90,
    }, 'time1')
        .from('#pineapple', {
            y: 300,
            x: -700,
            rotate: -90,
        }, 'time1')
    tl2.from('#resp-strawberry01', {
        y: 500,
        x: 900,
        rotate: 90,
    }, 'time2')
        .from('#resp-strawberry', {
            y: 300,
            x: 700,
            rotate: 90,
        }, 'time2')
        .from('#orangefruit', {
            y: 500,
            x: -900,
            rotate: -90,
        }, 'time3')
        .from('#yellow', {
            y: 300,
            x: -700,
            rotate: -90,
        }, 'time3')
});