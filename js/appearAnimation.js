
    const items = document.querySelectorAll(".appear");
    //const faceImg = document.querySelectorAll(".face-image")

    function handleScroll() {
        const scrolledFromTop = window.pageYOffset + window.innerHeight;

        items.forEach((item) => {
            const distanceFromTop = item.offsetTop;
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

    function init() {
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        handleScroll2()
        window.addEventListener('scroll', handleScroll2)
    }

    init()