function run() {
    var body =
`# Hi, I'm FIRST_LAST 👋

BIO_GOES_HERE
    
<div align="center">
<a href="LINKED_IN_PROFILE_LINK"><img alt="LinkedIn" src="https://img.shields.io/badge/FIRST_LAST-%230077B5.svg?style=flat&logo=linkedin&logoColor=white"/></a>
<a href="mailto:MY_EMAIL@gmail.com"><img alt="Email" src="https://img.shields.io/badge/MY_EMAIL@gmail.com-D14836?style=flat&logo=gmail&logoColor=white"/></a>
<a href="MYWEBSITE"><img alt="Website" src="https://img.shields.io/website?down_color=lightgrey&down_message=offline&label=MYWEBSITE&up_color=green&up_message=online&url=MYWEBSITE"/></a>
<a href="./PATH_TO_RESUME.pdf"><img alt="Resume" src="https://img.shields.io/badge/Resume_(last_updated)-TIME_LAST_UPDATED-green"/></a>
</div><br/>`

    console.log("RUN")
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var linkedin = document.getElementById("linkedin").value;
    var website = document.getElementById("website").value;
    var respath = document.getElementById("respath").value;
    var restime = document.getElementById("restime").value;
    var email = document.getElementById("email").value;
    var bio = document.getElementById("bio").value; 

    console.log({fname})
    console.log({lname})
    console.log({linkedin})
    console.log({website})
    console.log({respath})
    console.log({restime})
    console.log({ email })
    
    body = body.replaceAll("FIRST_LAST", fname + " " + lname)
    body = body.replaceAll("LINKED_IN_PROFILE_LINK", linkedin)
    body = body.replaceAll("MY_EMAIL", email)
    body = body.replaceAll("MYWEBSITE", website)
    body = body.replaceAll("PATH_TO_RESUME", respath)
    body = body.replaceAll("TIME_LAST_UPDATED", restime)
    body = body.replaceAll("BIO_GOES_HERE", bio)
    // var out = document.getElementById("output").innerHTML = body;
    var out = document.getElementById("output").value = body;
}