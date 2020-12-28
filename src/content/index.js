export default {
  nav: {
    logo: 'My Portofolio',
    links: [
      { text: 'Work', to: 'mywork' },
      { text: 'Contact', to: 'mycontact' },
    ],
    gmail: process.env.PUBLIC_URL + 'assets/gmail.png',
  },
  header: {
    img:
      process.env.PUBLIC_URL + '/assets/avatar.jpg',
    text: ['Hi!', "It's me Zaini Azhar.", 'I am '],
    typical: [
      'web developer. 🖥',
      2000,
      'Freelancer. 📹',
      2000,
      'Student',
      2000,
    ],
    btnText: 'Contact For Work',
  },

  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/mysql.png',
        alt: 'MySQL',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/laravel.png',
        alt: 'Laravel',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/ci.png',
        alt: 'CodeIgniter',
      },
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'React',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/bootstrap.png',
        alt: 'Bootstrap',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/tailwind.png',
        alt: 'TailwindCss',
      },
    ],
    desc: `i am someone who is very hardworking and also disciplined. I don't want to make other people disappointed because of that I always do my best. I am good at using frameworks like laravel, codeigniter, react, and others. thank you`,
  },
  experience: {
    img: process.env.PUBLIC_URL + '/assets/experience.jpg',
    title: `PT. Telekomunikasi Indonesia Tbk`,
    content: `I Internship for 2 months in PT. Telekomunikasi Indonesia Kota Sukabumi.
              I have Experience in Technology and Programming Language`,
    experience: [
                'Experience',
                3000,
                'Internship',
                3000,
              ],
  },
};
