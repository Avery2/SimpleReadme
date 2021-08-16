function run() {
    // For testing
    // document.getElementById('fname').value = 'Justin';
    // document.getElementById('lname').value = 'Chan';
    // document.getElementById('linkedin').value = 'https://www.linkedin.com/in/avery2/';
    // document.getElementById('website').value = 'https://www.averychan.site/';
    // document.getElementById('respath').value = './Resume.pdf';
    // document.getElementById('restime').value = 'Jun 2021';
    // document.getElementById('email').value = 'justinaverychan@gmail.com';
    // document.getElementById('bio').value = 'I’m currently a computer science and data science double major at the University of Wisconsin-Madison. This summer I am working as a developer intern at Halo Science.';

    // Get form values
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const linkedinURL = document.getElementById('linkedin').value;
    const websiteURL = document.getElementById('website').value;
    let websiteTitle = websiteURL.replace(/(^\w+:|^)\/\//, '');
    const resumePath = document.getElementById('respath').value;
    const resumeUpdateTime = document.getElementById('restime').value;
    const email = document.getElementById('email').value;
    const bio = document.getElementById('bio').value;
    const fullName = firstName + ' ' + lastName;

    if (websiteTitle.slice(-1) === '/') {
        websiteTitle = websiteTitle.slice(0, -1);
    }

    // Create README values

    const title = `# Hi, I'm ${fullName} 👋`;
    //   const foo = `<sub><sup>_(full name: Justin "Avery" Chan)_</sup></sub>`;

    const linkedinBadge = `<a href="${linkedinURL}"><img alt="LinkedIn" src="https://img.shields.io/badge/${fullName}-%230077B5.svg?style=flat&logo=linkedin&logoColor=white"/></a>`;
    const emailBadge = `<a href="mailto:${email}"><img alt="Email" src="https://img.shields.io/badge/${email}-D14836?style=flat&logo=gmail&logoColor=white"/></a>`;
    const websiteBadge = `<a href="${websiteURL}"><img alt="Website" src="https://img.shields.io/website?down_color=lightgrey&down_message=offline&label=${websiteTitle}&up_color=green&up_message=online&url=${websiteURL}"/></a>`;
    const resumeBadge = `<a href="./${resumePath}"><img alt="Resume" src="https://img.shields.io/badge/Resume_(last_updated)-${resumeUpdateTime}-green"/></a>`;

    const badges = `<div align="center">\n${linkedinBadge}\n${emailBadge}\n${websiteBadge}\n${resumeBadge}\n</div><br/>`;

    const body = `${title}\n\n${bio}\n\n${badges}`;

    document.getElementById("output").value = body;
}