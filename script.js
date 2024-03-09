var i = 0;
var time = 3000;
var j = 0;

var data = [["Jyothirmayi Devi C",'DSC_0426 4.png'],["Princy Sugathan",'DSC_0434 1.png'],['Betty James','DSC_0314 (1) 1.png'],['Shemeema Hashim','photo-Shemeema-Hasihim 1.png']];

function changeImg(){
    document.slide.src = data[i][1];

    if(i< data.length){
        i++;
    }
    if(i>=data.length){
        i = 0;
    }

    setTimeout("changeImg()",time);
}

function changeText(){
    document.person = data[j][0];
    
    if(j< data.length){
        j++;
    }
    if(j>=data.length){
        j = 0;
    }

    setTimeout("changeText()",time);
}
window.onload = changeText;
window.onload = changeImg;


// images[0] = 'DSC_0426 4.png';
// images[1] = 'DSC_0434 1.png';
// images[2] = 'DSC_0314 (1) 1.png';
// images[3] = 'photo-Shemeema-Hasihim 1.png';

// Name[0] = 'Jyothirmayi Devi C';
// Name[1] = 'Princy Sugathan';
// Name[2] = 'Betty James';
// Name[3] = 'Shemeema Hashim';