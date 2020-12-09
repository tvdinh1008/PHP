/*
    show menu để thực hiện responsive
*/
function showMenu() {
            var myMenu = document.getElementById("myMenu");
            if (myMenu.className === "navHeader") {
                myMenu.className += " responsive";
            } else {
                myMenu.className = "navHeader";
            }
        }