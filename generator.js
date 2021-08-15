function run() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const linkedin = document.getElementById("linkedin").value;
    const website = document.getElementById("website").value;
    const respath = document.getElementById("respath").value;
    const restime = document.getElementById("restime").value;
    const email = document.getElementById("email").value;
    const bio = document.getElementById("bio").value;
    const fullname = fname + " " + lname;

    const body = `# Hi, I'm ${fullname} 👋\n\n${bio}\n\n<div align="center">\n<a href="${linkedin}"><img alt="LinkedIn" src="https://img.shields.io/badge/${fullname}-%230077B5.svg?style=flat&logo=linkedin&logoColor=white"/></a>\n<a href="mailto:${email}@gmail.com"><img alt="Email" src="https://img.shields.io/badge/${email}@gmail.com-D14836?style=flat&logo=gmail&logoColor=white"/></a>\n<a href="${website}"><img alt="Website" src="https://img.shields.io/website?down_color=lightgrey&down_message=offline&label=${website}&up_color=green&up_message=online&url=${website}"/></a>\n<a href="./${respath}"><img alt="Resume" src="https://img.shields.io/badge/Resume_(last_updated)-${restime}-green"/></a>\n</div><br/>`

    document.getElementById("output").value = body;
}