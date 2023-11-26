// document.addEventListener('DOMContentLoaded', function () {
    
// })
// let tabsTitle = document.querySelectorAll('.tabs-title');
//     let tabsText = document.querySelectorAll('.tabs-text');
//     for(elem of tabsTitle) {
//         elem.addEventListener('click', el => {
//             el.preventDefault();
//             const activeTab = document.querySelector(".tabs-title.active");
//             if (activeTab) {
//                 activeTab.classList.remove("active");
//             }
//             const activeText = document.querySelector(".tabs-text.active");
//              if (activeText) {
//                 activeText.classList.remove("active");
//             }
            
            
//             elem.classList.add('active');
//             const index = [...elem.parentElement.children].indexOf(elem);
//             tabsText[index].classList.add("active");
//         })
//     }
let tabsTitle = document.querySelectorAll('.tabs-title');
    let tabsText = document.querySelectorAll('.tabs-text');

    for (elem of tabsTitle) {
        elem.addEventListener('click', el => {
            el.preventDefault();

            const activeTab = document.querySelector(".tabs-title.active");
            if (activeTab) {
                activeTab.classList.remove("active");
            }

            const activeText = document.querySelector(".tabs-text.active");
            if (activeText) {
                activeText.classList.remove("active");
            }

            elem.classList.add('active');

            const index = [...elem.parentElement.children].indexOf(elem);
            tabsText[index].classList.add("active");
        });
    }