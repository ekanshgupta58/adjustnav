function adjustNavigationStyles(isMobile) {
    const elems = document.querySelectorAll(".cmp-navigation__item--level-0 a.cmp-navigation__item-link");
    const elemsLevel0 = document.querySelectorAll(".cmp-navigation__item--level-0");
    const navigationGroup = document.querySelector("ul.cmp-navigation__group");

    if (isMobile) {
        elems.forEach((elem) => elem.setAttribute('style', 'color: black !important'));
        elemsLevel0.forEach((elem) => {
            elem.setAttribute('style', "");
            elem.classList.remove("reverseArrow");
        });

        if (navigationGroup.style.display === 'flex') {
            document.getElementById("menu-icon").classList.add("change");
        } else {
            document.getElementById("menu-icon").classList.remove("change");
        }

        navigationGroup.setAttribute('style', 'display: flex; width: 100% !important; padding: 0px !important;');
        document.querySelectorAll(".cmp-navigation__group>li>ul").forEach((element) => {
            element.setAttribute('style', 'width: 97.35% !important; padding-left: 15px !important; padding-top: 2px !important; padding-right: 20px !important; background-color: #EAEAEA !important;');
        });

    } else {
        let characters = 0;
        elems.forEach((elem) => {
            if (elem.parentElement.classList.contains("cmp-navigation__item--level-0")) {
                characters += elem.innerText.length;
            }
        });

        elems.forEach((elem) => {
            elem.setAttribute('style', '');
            if (/\s/.test(elem.innerText)) {
                if (document.querySelectorAll(".cmp-navigation__item--level-0>a.cmp-navigation__item-link").length >= 7 && characters > 75) {
                    if (elem.parentElement.classList.contains("cmp-navigation__item--level-0")) {
                        elem.classList.add("adjust-arrow");
                        elem.style.lineHeight = "normal";
                        elem.style.top = "-5px";
                        if (elem.innerText.split(" ").length - 1 > 1 && document.querySelectorAll(".cmp-navigation__item--level-0>a.cmp-navigation__item-link").length >= 8) {
                            elem.style.fontSize = "12px";
                        }
                    }
                }
            }
        });

        navigationGroup.setAttribute('style', '');
        document.querySelectorAll(".cmp-navigation__group>li>ul").forEach((element) => element.setAttribute('style', ''));
        document.querySelectorAll(".cmp-navigation__group>li.cmp-navigation__item--level-0").forEach((element) => element.setAttribute("style", "height:50px !important"));
    }
}

function adjustNavigation() {
    const isMobile = window.visualViewport.width <= 1079;
    adjustNavigationStyles(isMobile);

    window.addEventListener('resize', () => {
        const isMobile = window.visualViewport.width <= 1079;
        adjustNavigationStyles(isMobile);
    });
}

adjustNavigation();
