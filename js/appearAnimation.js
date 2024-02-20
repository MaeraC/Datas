
    const items = document.querySelectorAll(".appear");
    //const faceImg = document.querySelectorAll(".face-image")

    function handleScroll() {
        //const scrolledFromTop = window.pageYOffset + window.innerHeight;
        const scrolledFromTop = window.scrollY + window.innerHeight;

        items.forEach((item) => {
            //const distanceFromTop = item.offsetTop;
            //const delaiAnim = item.getAttribute("data-delai")
            const distanceFromTop = item.getBoundingClientRect().top + window.scrollY;
            const delaiAnim = item.getAttribute("data-delai")

            if (scrolledFromTop >= distanceFromTop + 50) {
                setTimeout(() => {
                    item.style.top = "0"
                    item.style.opacity = "1"
                
                }, delaiAnim)
            }
        })
    }

    const items2 = document.querySelectorAll(".up");

    function handleScroll2() {
        const scrolledFromTop = window.scrollY + window.innerHeight;

        items2.forEach((item) => {
            const distanceFromTop = item.getBoundingClientRect().top + window.scrollY;
            const delaiAnim = item.getAttribute("data-delai")

            if (scrolledFromTop >= distanceFromTop + -200) {
                setTimeout(() => {
                     //item.style.bottom = "0"
                    item.classList.add("up-animate")
                }, delaiAnim)
            }
        })
    }

    const items3 = document.querySelectorAll(".slide");

    function handleScroll3() {
        const scrolledFromTop = window.scrollY + window.innerHeight;

        items3.forEach((item) => {
            const distanceFromTop = item.getBoundingClientRect().top + window.scrollY;
            const delaiAnim = item.getAttribute("data-delai")

            if (scrolledFromTop >= distanceFromTop + -200) {
                setTimeout(() => {
                     //item.style.bottom = "0"
                    item.classList.add("slide-animate")
                }, delaiAnim)
            }
        })
    }

    const items4 = document.querySelectorAll(".anim-img");

    function handleScroll4() {
        const scrolledFromTop = window.scrollY + window.innerHeight;

        items4.forEach((item) => {
            const distanceFromTop = item.getBoundingClientRect().top + window.scrollY;
            const delaiAnim = item.getAttribute("data-delai")

            if (scrolledFromTop >= distanceFromTop + 100) {
                setTimeout(() => {
                     //item.style.bottom = "0"
                    item.classList.add("img-animate")
                }, delaiAnim)
            }
        })
    }

    const items5 = document.querySelectorAll(".anim-img2");

    function handleScroll5() {
        const scrolledFromTop = window.scrollY + window.innerHeight;

        items5.forEach((item) => {
            const distanceFromTop = item.getBoundingClientRect().top + window.scrollY;
            const delaiAnim = item.getAttribute("data-delai")

            if (scrolledFromTop >= distanceFromTop + 100) {
                setTimeout(() => {
                     //item.style.bottom = "0"
                    item.classList.add("img-animate2")
                }, delaiAnim)
            }
        })
    }

    const items6 = document.querySelectorAll(".slide2");

    function handleScroll6() {
        const scrolledFromTop = window.scrollY + window.innerHeight;

        items6.forEach((item) => {
            const distanceFromTop = item.getBoundingClientRect().top + window.scrollY;
            const delaiAnim = item.getAttribute("data-delai")

            if (scrolledFromTop >= distanceFromTop + -200) {
                setTimeout(() => {
                     //item.style.bottom = "0"
                    item.classList.add("slide-animate2")
                }, delaiAnim)
            }
        })
    }

    function init() {
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        handleScroll2()
        window.addEventListener('scroll', handleScroll2)
        handleScroll3()
        window.addEventListener('scroll', handleScroll3)
        handleScroll4()
        window.addEventListener('scroll', handleScroll4)
        handleScroll5()
        window.addEventListener('scroll', handleScroll5)
        handleScroll6()
        window.addEventListener('scroll', handleScroll6)

    }

    init()