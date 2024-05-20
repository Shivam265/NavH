document.body.style.margin="0";
document.body.style.padding="0";
let mainnav = document.createElement('div');
mainnav.className = "main_nav";
mainnav.style.display="flex";
mainnav.style.margin="0px";
mainnav.style.padding="0px";
mainnav.style.height = "15vh";
mainnav.style.width = "100%";
document.body.appendChild(mainnav);

let logodiv = document.createElement('div');
let img = document.createElement('img')
logodiv.className = "logo_div"; 
const ImageUrl=("https://www.cvinfotech.com/wp-content/uploads/2022/07/Cyber_Vision_Infotech_logo-1.png");  
img.src = ImageUrl;
img.style.height = "10vh";
img.style.width="100%";
logodiv.style.alignContent="center";
logodiv.style.alignItems="center";
logodiv.style.width="30%";
logodiv.style.backgroundColor= "whitesmoke";
logodiv.style.height="15vh";
logodiv.appendChild(img)
mainnav.appendChild(logodiv)



 const navItem = document.createElement('div')
 navItem.className = "nav_bar";
 navItem.style.width="70%";
 navItem.style.display="flex";
 navItem.style.backgroundColor="#2e3191";
 navItem.style.justifyContent="space-between";
 mainnav.appendChild(navItem)


 let ul = document.createElement('ul')
 ul.id = 'list';
 ul.style.listStyleType="none";
 ul.style.padding="1rem";
 ul.style.display="flex";
 ul.style.alignItems="center"
 ul.style.justifyContent="space-around";
 navItem.appendChild(ul)

const toggle_btn = document.createElement("span");
toggle_btn.className  = "toggle-Btn";
toggle_btn.id = 'toggle_btn';
toggle_btn.className.width="100%";
// toggle.style.float = "right";
toggle_btn.style.alignSelf="center";
toggle_btn.style.color="white";
toggle_btn.style.cursor="pointer";
// toggle.style.display="none";
toggle_btn.style.fontSize="2.5rem";
navItem.appendChild(toggle_btn)



// Define the HTML entity
const htmlEntity = '&#9776;';
// Decode the HTML entity to get the corresponding character (☰ in this case)
const decodedString = new DOMParser().parseFromString(htmlEntity, 'text/html').body.textContent;

// Create a text node with the decoded string
const entityTextNode = document.createTextNode(decodedString);

// Append the text node to the span element
toggle_btn.appendChild(entityTextNode);
// Assuming `navItem` is an existing element where you want to append the span
const navItemId = document.getElementById('navItemId'); // Replace 'navItem' with the ID of your target element
navItem.appendChild(toggle_btn);

    
 let navItems = ["Home","About Us","Services","Contect Us","Career"]
 navItems.forEach(text=>{  
    let listItem = document.createElement('li')
    listItem.textContent = text
    listItem.className = "listItem";
    listItem.style.width = "100%";  
   //  listItem.style.margin="2rem";
    listItem.style.cursor = "pointer";
    listItem.style.padding="1rem";
    // listItem.style.gap="10rem"
    listItem.style.textAlign="center";
    listItem.style.transition="0.3s";
    listItem.style.color="white";

    listItem.addEventListener('click',()=>{
        alert(`click on the ${text}`);
    });

    ul.appendChild(listItem)

 })

//  toggle_btn.addEventListener('click', () => {
    // const toggle_btn = document.getElementById('toggle_btn')

    // ul.style.display= "block"?"none":block
    
    // if(ul.style.display == "block"){
    //     ul.style.display = "none";
    // }else{
    //     ul.style.display = "block";
    // }

    toggle_btn.addEventListener('click', () => {
        if (ul.style.display === "none" || ul.style.display === "") {
            ul.style.display = "flex";
        } else {
            ul.style.display = "none";
        }
    });








 






    

    
