//contains 126 fruits all starting with lower case letters
const fruits = ["abiu", "açaí", "acerola", "ackee", "african cucumber", "apple", "apricot", "avocado", "banana", "bilberry", "blackberry", "blackcurrant", "black sapote", "blueberry", "boysenberry", "breadfruit", "buddha's hand", "cactus pear", "canistel", "cempedak", "crab apple", "currant", "cherry", "cherimoya", "chico fruit", "cloudberry", "coco de mer", "coconut", "cranberry", "damson", "date", "dragonfruit", "durian", "egg Fruit", "elderberry", "feijoa", "fig", "goji berry", "gooseberry", "grape", "grewia asiatica", "raisin", "grapefruit", "guava", "hala fruit", "honeyberry", "huckleberry", "jabuticaba", "jackfruit", "jambul", "japanese plum", "jostaberry", "jujube", "juniper berry", "kaffir Lime", "kiwano", "kiwifruit", "kumquat", "lemon", "lime", "loganberry", "loquat", "longan", "lulo", "lychee", "magellan barberry", "mamey apple", "mamey sapote", "mango", "mangosteen", "marionberry", "melon", "cantaloupe", "galia melon", "honeydew", "mouse melon", "watermelon", "miracle fruit", "monstera deliciosa", "mulberry", "nance", "nectarine", "orange", "blood orange", "clementine", "mandarine", "tangerine", "papaya", "passion fruit", "peach", "pear", "persimmon", "plantain", "plum", "prune", "pineapple", "pineberry", "plumcot", "pomegranate", "pomelo", "purple mangosteen", "quince", "raspberry", "salmonberry", "rambutan", "redcurrant", "rose apple", "salal berry", "salak", "satsuma", "shine muscat", "sloe berry", "soursop", "star apple", "star fruit", "strawberry", "surinam cherry", "tamarillo", "tamarind", "tangelo", "tayberry", "tomato", "ugli fruit", "white currant", "white sapote", "yuzu"];

function checkStand() {
    //Gather the user's input
    let fruitOne = document.getElementById("fruitOne").value;
    let fruitTwo = document.getElementById("fruitTwo").value;
    let fruitThree = document.getElementById("fruitThree").value;
    //In case they are running multiple searches clear out the old output
    document.getElementById("outputOne").innerText = "";
    document.getElementById("outputTwo").innerText = "";
    document.getElementById("outputThree").innerText = "";

    //check that there is at least one letter in the input
    if (fruitOne.length > 0) {
        //normalize the input to lower case
        let check = fruitOne.toLowerCase().trim();
        //use the .includes() function to check the array
        if (fruits.includes(check)) {
            //if the fruit was found output the location
            let boxNum = fruits.indexOf(check) + 1;
            let output = document.getElementById("outputOne");
            output.innerText = `We found ${fruitOne} in box number ${boxNum}`;
        } else {
            let output = document.getElementById("outputOne");
            output.innerText = `Looks like we are out of ${fruitOne}`;
        }
    } else {
        //In case the user doesn't use the first box, but does use the other two
        let output = document.getElementById("outputOne");
        output.innerText = "You didn't use the first search box";
    }
    if (fruitTwo.length > 0) {
        //normalize the input to lower case
        let check = fruitTwo.toLowerCase().trim();
        //use the .includes() function to check the array
        if (fruits.includes(check)) {
            //if the fruit was found output the location
            let boxNum = fruits.indexOf(check) + 1;
            let output = document.getElementById("outputTwo");
            output.innerText = `We found ${fruitTwo} in box number ${boxNum}`;
        } else {
            let output = document.getElementById("outputTwo");
            output.innerText = `Looks like we are out of ${fruitTwo}`;
        }
    }
    if (fruitThree.length > 0) {
        //normalize the input to lower case
        let check = fruitThree.toLowerCase().trim();
        //use the .includes() function to check the array
        if (fruits.includes(check)) {
            //if the fruit was found output the location
            let boxNum = fruits.indexOf(check) + 1;
            let output = document.getElementById("outputThree");
            output.innerText = `We found ${fruitThree} in box number ${boxNum}`;
        } else {
            let output = document.getElementById("outputThree");
            output.innerText = `Looks like we are out of ${fruitThree}`;
        }
    }
}

function clearForm() {
    document.getElementById("outputOne").innerText = "Just waiting for you to type in some fruit";
    document.getElementById("outputTwo").innerText = "";
    document.getElementById("outputThree").innerText = "";
    let form = document.getElementById("checkForm");
    form.reset();
}

function allFruits() {

}