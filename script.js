//here I retrieve all my pictures from the HTML document:
let doorPicturesEl = document.querySelectorAll("img"); 

//here I go through all the pictures/doors and add the "click" event
//on all of them.

for (let i = 0; i < doorPicturesEl.length;
    i++) {
    doorPicturesEl[i].addEventListener("click", checkDoor);
}

//This function checks which door was clicked on:

function checkDoor(e) {
    let clickedOnDoor = e.target;
    console.log(clickedOnDoor.id + " has been clicked.");


    //Changes the pictue of a door to something:

    if (clickedOnDoor.id == "door1") {
        e.target.src = "kalender findus/1.jpg";
    }
    else if (clickedOnDoor.id == "door2") {
        e.target.src = "kalender findus/2.jpg";
    }
    else if (clickedOnDoor.id == "door3") {
        e.target.src = "kalender findus/3.jpg";
    }
    else if (clickedOnDoor.id == "door4") {
        e.target.src = "kalender findus/4.jpg";
    }
    else if (clickedOnDoor.id == "door5") {
        e.target.src = "kalender findus/5.jpg";
    }
    else if (clickedOnDoor.id == "door6") {
        e.target.src = "kalender findus/6.jpg";
    }
    else if (clickedOnDoor.id == "door7") {
        e.target.src = "kalender findus/7.jpg";
    }
    else if (clickedOnDoor.id == "door8") {
        e.target.src = "kalender findus/8.jpg";
    }
    else if (clickedOnDoor.id == "door9") {
        e.target.src = "kalender findus/9.jpg";
    }
    else if (clickedOnDoor.id == "door10") {
        e.target.src = "kalender findus/10.jpg";
    }
    else if (clickedOnDoor.id == "door11") {
        e.target.src = "kalender findus/11.jpg";
    }
    else if (clickedOnDoor.id == "door12") {
        e.target.src = "kalender findus/12.jpg";
    }
    else if (clickedOnDoor.id == "door13") {
        e.target.src = "kalender findus/13.jpg";
    }
    else if (clickedOnDoor.id == "door14") {
        e.target.src = "kalender findus/14.jpg";
    }
    else if (clickedOnDoor.id == "door15") {
        e.target.src = "kalender findus/15.jpg";
    }
    else if (clickedOnDoor.id == "door16") {
        e.target.src = "kalender findus/16.jpg";
    }
    else if (clickedOnDoor.id == "door17") {
        e.target.src = "kalender findus/17.jpg";
    }
    else if (clickedOnDoor.id == "door18") {
        e.target.src = "kalender findus/18.jpg";
    }
    else if (clickedOnDoor.id == "door19") {
        e.target.src = "kalender findus/19.jpg";
    }
    else if (clickedOnDoor.id == "door20") {
        e.target.src = "kalender findus/20.jpg";
    }
    else if (clickedOnDoor.id == "door21") {
        e.target.src = "kalender findus/21.jpg";
    }
    else if (clickedOnDoor.id == "door22") {
        e.target.src = "kalender findus/22.jpg";
    }
    else if (clickedOnDoor.id == "door23") {
        e.target.src = "kalender findus/23.jpg";
    }
    else if (clickedOnDoor.id == "door24") {
        e.target.src = "kalender findus/24.jpg";
    }
    else if (clickedOnDoor.id == "door25") {
        e.target.src = "kalender findus/25.jpg";
    }
}