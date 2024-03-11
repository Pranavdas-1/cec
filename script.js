var i = 0;
var time = 5000;
var data = [
    ["Jyothirmayi Devi C", 'DSC_0426 4.png','Assistant Professor - Computer  Science Department','M Tech. in Computer Science & Engineering (2002-2004)','B Tech in Computer Science & Engineering (1986-1991)','jyothirmayi@ceconline.edu','304','Life time Member of “The Indian Society for Technical Education (ISTE)” an organization for promoting the quality and standards in Technical Education.','Coordinator of SUMMIT-2016, National tech fest conducted at College of Enginering , Chengannur.','Staff -in-charge of FOCES','1'],
    ["Princy Sugathan", 'DSC_0434 1.png','Assistant Professor - Computer  Science Department','M Tech. In Software Engineering (2010-2012)','B Tech in Computer Engineering (1998-2002)','-','304','Life time Member of “The Indian Society for Technical Education (ISTE)” an organization for promoting the quality and standards in Technical Education.','Additional Supt. Of Examination Cell for both Cochin University of Science and Technology and A P J Abdul Kalam Technological University.','Assistant Warden for Ladies Hostel of College of Engineering Chengannur.','1'],
    ['Betty James', 'DSC_0314 (1) 1.png','Assistant Professor - Computer  Science Department','M.Tech. in Digital Image Processing','BTech in Computer Science and Engineering.','bettycec@ceconline.edu','304',' ',' ',' ','0'],
    ['Shemeema Hashim', 'photo-Shemeema-Hasihim 1.png','Assistant Professor - Computer  Science Department','B.Tech in Computer Science and Engineering','M. Tech in Computer and Information Science','shemeemahashim786@gmail.com','304',' ',' ',' ','0']
];

function changeContent() {
    document.getElementById("changingName").innerHTML = data[i][0];
    document.slide.src = data[i][1];
    document.getElementsByClassName("position").innerHTML = data[i][2];
    document.getElementById("acade1").innerHTML = data[i][3];
    document.getElementById("acade2").innerHTML = data[i][4];
    document.getElementById("mail_1").innerHTML = data[i][5];
    document.getElementById("mail_2").innerHTML = data[i][6];
    
    if(data[i][10] == 0){
        document.getElementById("myDiv").style.display = "none";
    }
    else{
        document.getElementById("myDiv").style.display = "block";
        document.getElementById("posi-1").innerHTML = data[i][7];
        document.getElementById("posi-2").innerHTML = data[i][8];
        document.getElementById("posi-3").innerHTML = data[i][9];
    }

    i++;
    if (i >= data.length) {
        window.location.href = "index2.html";
    }

    setTimeout(changeContent, time);
}

window.onload = changeContent;
