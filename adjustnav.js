function adjustNavigation() {
    const isMobile = window.visualViewport.width <= 1079;
    if (isMobile) {
        const elems = document.querySelectorAll(".cmp-navigation__item--level-0 a.cmp-navigation__item-link");
        elems.forEach((elem1) => {
            elem1.setAttribute('style', 'color: black !important');
        })
        const elemsLevel0 = document.querySelectorAll(".cmp-navigation__item--level-0");
        elemsLevel0.forEach((elem) => {
            elem.setAttribute('style', "")
            elem.classList.remove("reverseArrow")
        })
        const navigationGroup = document.querySelector("ul.cmp-navigation__group")

        if (navigationGroup.style.display === 'flex') {

            if (!document.getElementById("menu-icon").classList.contains("change"))
                document.getElementById("menu-icon").classList.add("change");
        } else {
            document.getElementById("menu-icon").classList.remove("change");
        }
        document.getElementsByTagName("nav")[0].getElementsByClassName("cmp-navigation__group")[0].setAttribute('style', 'display: flex; width: 100% !important; padding: 0px !important;')
        document.querySelectorAll(".cmp-navigation__group>li>ul").forEach((element) => {
            element.setAttribute('style', 'width: 97.35% !important;padding-left: 15px !important;padding-top: 2px !important;padding-right: 20px !important;background-color: #EAEAEA !important;')

        })

    } else {

        const elems = document.querySelectorAll(".cmp-navigation__item--level-0 a.cmp-navigation__item-link");
        let characters=0
        elems.forEach((elem1) => {

                    if (elem1.parentElement.classList.contains("cmp-navigation__item--level-0")) {
                        characters+=elem1.innerText.length;
                    }
    
		})
        elems.forEach((elem1) => {
            elem1.setAttribute('style', '');
            if (/\s/.test(elem1.innerText)) {
                if (document.querySelectorAll(".cmp-navigation__item--level-0>a.cmp-navigation__item-link").length >=7 && characters>75)
                    if (elem1.parentElement.classList.contains("cmp-navigation__item--level-0")) {
                        elem1.classList.add("adjust-arrow");
                        elem1.style.lineHeight = "normal";
                        elem1.style.top = "-5px";
                        if(elem1.innerText.split(" ").length-1>1&&document.querySelectorAll(".cmp-navigation__item--level-0>a.cmp-navigation__item-link").length >= 8){
                            	elem1.style.fontSize="12px"
                            	 elem1.style.top = "-5px";
                            }
                    }
            }
        })

        document.getElementsByTagName("nav")[0].getElementsByClassName("cmp-navigation__group")[0].setAttribute('style', '')
        document.querySelectorAll(".cmp-navigation__group>li>ul").forEach((element) => {
            element.setAttribute('style', '')

        })
    }
    window.addEventListener('resize', function (event) {
        const isMobile = window.visualViewport.width <= 1079;
        if (isMobile) {
            const elems = document.querySelectorAll(".cmp-navigation__item--level-0 a.cmp-navigation__item-link");
            elems.forEach((elem1) => {
                elem1.setAttribute('style', 'color: black !important');
            })
            const elemsLevel0 = document.querySelectorAll(".cmp-navigation__item--level-0");
            elemsLevel0.forEach((elem) => {
                elem.setAttribute('style', "")
                elem.classList.remove("reverseArrow")
            })
            document.getElementsByTagName("nav")[0].getElementsByClassName("cmp-navigation__group")[0].setAttribute('style', 'display: flex; width: 100% !important; padding: 0px !important;')
            document.querySelectorAll(".cmp-navigation__group>li>ul").forEach((element) => {
                element.setAttribute('style', 'width: 97.35% !important;padding-left: 15px !important;padding-top: 2px !important;padding-right: 20px !important;background-color: #EAEAEA !important;')
                const navigationGroup = document.querySelector("ul.cmp-navigation__group")
                navigationGroup.style.display = "none";
                if (navigationGroup.style.display === 'flex') {
                    if (!document.getElementById("menu-icon").classList.contains("change"))
                        document.getElementById("menu-icon").classList.add("change");

                } else {
                    document.getElementById("menu-icon").classList.remove("change");
                }
            })
        } else {
            const elems = document.querySelectorAll(".cmp-navigation__item--level-0 a.cmp-navigation__item-link");
            let characters=0
            elems.forEach((elem1) => {

                        if (elem1.parentElement.classList.contains("cmp-navigation__item--level-0")) {
                            characters+=elem1.innerText.length;
                        }

            })
            elems.forEach((elem1) => {
                elem1.setAttribute('style', '');
                if (/\s/.test(elem1.innerText)) {
                    if (document.querySelectorAll(".cmp-navigation__item--level-0>a.cmp-navigation__item-link").length >=7 && characters>75)
                        if (elem1.parentElement.classList.contains("cmp-navigation__item--level-0")) {
                            elem1.classList.add("adjust-arrow")
                            elem1.style.lineHeight = "normal";
                            elem1.style.top = "-5px";
                            if(elem1.innerText.split(" ").length-1>1&&document.querySelectorAll(".cmp-navigation__item--level-0>a.cmp-navigation__item-link").length >= 8){
                            	elem1.style.fontSize="12px"
                            	 elem1.style.top = "-5px";
                            }
                        }
                }
            })

            document.getElementsByTagName("nav")[0].getElementsByClassName("cmp-navigation__group")[0].setAttribute('style', '')
            document.querySelectorAll(".cmp-navigation__group>li>ul").forEach((element) => {
                element.setAttribute('style', '')

            })
            document.querySelectorAll(".cmp-navigation__group>li.cmp-navigation__item--level-0").forEach((element) => {
                element.setAttribute("style", "height:50px !important")
            })

        }
    })
}
