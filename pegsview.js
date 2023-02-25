function pegsView(){
    let html = /*html*/`
    ${displayPegs()}
    `;

    pegs.innerHTML += html;
}

function displayPegs() {
    let output = "";
    
    if(result.blackPegs == 0 && result.whitePegs == 0) output += "<b>NONE</b>";

    for (let i = 0; i < result.blackPegs; i++) {
        output += `<span class="dot" id="black"></span>`;
    }
    
    for (let i = 0; i < result.whitePegs; i++) {
        output += `<span class="dot" id="white"></span>`;
    }
    
    output += "<br />";
    return output;
}
