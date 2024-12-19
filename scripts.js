function showContent(targetId) {
  const content = {
      education: `
          <h2>Education</h2>
          <ul>
              <li>B.Tech in Computer Science, KIIT (2022 - 2026)</li>
              <li>Higher Secondary Education - Doon International School Bhubaneswar (73.5%)</li>
              <li>Senior Secondary Education - Delhi Public School Kalinga (95.8%)</li>
          </ul>
      `,
      projects: `
          <h2>Project Experience</h2>
          <ul>
              <li>Project Presentation: "G-21 Impacts on Indian Trade and Economy"</li>
              <li>Mini Project on Multiclass Skin Cancer Classification (Deep CNN)</li>
          </ul>
      `,
      skills: `
          <h2>Skills</h2>
          <ul>
              <li>Languages: Python, Java, C</li>
              <li>Libraries: NumPy, Pandas</li>
              <li>Frameworks: Django, Flutter</li>
              <li>Other Skills: Machine Learning, Data Structures, Cloud Computing</li>
          </ul>
      `,
      certificates: `
          <h2>Certificates</h2>
          <ul>
              <li>6-week Machine Learning Certificate from Internshala</li>
              <li>MSME Training in Java Programming</li>
              <li>AMCAT Employability Report</li>
              <li>AWS Academy Graduate - Cloud Foundations</li>
          </ul>
      `,
      languages: `
          <h2>Languages</h2>
          <ul>
              <li>English - Full Professional Proficiency</li>
              <li>Sanskrit - Full Professional Proficiency</li>
              <li>Hindi - Full Professional Proficiency</li>
              <li>Odia - Full Professional Proficiency</li>
          </ul>
      `
  };
  
  document.getElementById('dynamic-content').innerHTML = content[targetId];
}
