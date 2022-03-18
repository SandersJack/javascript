// removes all content style attributes and removes children till only header remains as the sole children
const render = function(){
    const content = document.querySelector('#container');
    content.style="";
    while(content.firstChild){
        content.removeChild(content.lastChild);
    }
}

export default render;