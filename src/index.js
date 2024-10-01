import "./style.css";

console.log("I was here");

const myContent = document.getElementById('content');
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

function homePage() {
    const myImageDiv = document.createElement('div');
    myImageDiv.id = "myImage";
    myImageDiv.innerHTML = "This is a beautiful restaurant header";

    const myHeadlineDiv = document.createElement('div');
    myHeadlineDiv.id = "myHeadline";
    myHeadlineDiv.innerHTML = "Eat all you can!";

    const myTextDiv = document.createElement('div');
    myTextDiv.id = "myText";
    myTextDiv.innerHTML = "And tell your friends!";

    myContent.append(myImageDiv);
    myContent.append(myHeadlineDiv);
    myContent.append(myTextDiv);
}

homePage();

function menuPage() {
    const myMenuDiv = document.createElement('div');
    myMenuDiv.id = "myMenu";
    myMenuDiv.innerHTML = "1. Fried Noodles\n2. Fried Rice\n3. Fried Eggs\n4. Fried Chicken\n5. Fried Okras\n\nThat's about it...";

    myContent.append(myMenuDiv);
}

function aboutPage() {
    const myAboutDiv = document.createElement('div');
    myAboutDiv.id = "myAbout";
    myAboutDiv.innerHTML = "There's nothing to talk about";

    myContent.append(myAboutDiv);
}

homeBtn.addEventListener('click', () => {
    myContent.innerHTML = "";
    homePage();
})

menuBtn.addEventListener('click', () => {
    myContent.innerHTML = "";
    menuPage();
})

aboutBtn.addEventListener('click', () => {
    myContent.innerHTML = "";
    aboutPage();
})
