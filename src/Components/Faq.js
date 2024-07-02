import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleOpen} style={styles.question}>
        {question}
      </button>
      {isOpen && <div style={styles.answer}>{answer}</div>}
    </div>
  );
};

export const FAQ = () => {
  const newLocal = "A hybrid program means that learners will have access to both self-paced classes and live online interactive sessions. If you prefer to complete the course faster, you can focus on the self-paced modules and still have the opportunity to attend live sessions for additional support and interaction.";
  const faqData = [
    { question: 'What is Data science?', answer: 'Data Science is a field that uses math, programming, and expertise in specific subjects to find useful information in data. It involves studying, analyzing, and explaining complex sets of data to help make decisions.' },
    { question: 'What is the Data Science 360 Course?', answer: 'The Data Science 360 Course covers everything you need to know about Data Analytics, Data Visualization, Data Science, and Machine Learning. It’s for people who want to start or change their careers to roles like Data Analysts, Data Scientists, Business Analysts, or ML Engineers.' },
    { question: 'What do I need to start a career in Data Science?', answer: 'To start a career in Data Science, you need to know math, programming, data analysis, and statistics. Our course teaches all of these things, so you’ll be ready for a career in this field.' },
    {question:'Who can take this Data Science course?',answer:'Our Data Science course is for students, graduates, and working professionals from any background. Whether you’re new to this or already know something about data, our course is made for you.',},
    {question:'What skills will I learn with this Data Science online course?',answer:'With our Data Science online course, you’ll learn programming in SQL, R and Python, using tools like Excel, PowerBi, and Tableau for data analytics & visualization. You’ll learn what you need to work in the industry.',},
    {question:'Why should you take this Data Science course?',answer:'Taking our Data Science course gives you the skills you need to succeed in the data world. With hands-on training, insights from the industry, and help finding a job, you’ll be ready for roles in data analytics, machine learning, and big data.',},
    {question:'What does a Data Scientist do?',answer:'Data Scientists look at data, find patterns, and use that information to solve complex problems in business. They use math, machine learning, and what they know about the business to make good decisions.',},
    {question:'What is the average salary for a Data Scientist in India?',answer:'The salary for Data Scientists in India varies based on things like experience, where you work, and the industry. But generally, Data Scientists can make good money, especially now when data jobs are in demand.',},
    {question:'Can I Become a Data Scientist Without a Degree?',answer:'You don’t need a degree to be a Data Scientist. Our course is for everyone, no matter your education. We’ll teach you what you need to know to work in Data Science.',},
    {question:'Is a Data Science certification important?',answer:'A Data Science certification shows you know your stuff, but what’s more important is that you can do the work. Our course focuses on hands-on learning so you’ll be ready for real jobs.',},
    {question:'Is data science a good career?',answer:'Yes, Data Science is a good career with lots of chances to grow. As more businesses use data, there are more jobs in Data Science, and they can pay well too.',},
    {question:'How Brainalyst is different from other online learning platforms?',answer:'Brainalyst is different because we teach everyone, even if you’re new to coding. Our courses are interactive, we give you personal help, and what we teach matches what’s happening in the real world.',},
    {question:"How will this course benefit me if I don't have a background in coding or any prior IT experience?",answer:"Our course is made for people of all backgrounds, even if you’ve never coded before. With step-by-step lessons and support from mentors, we’ll help you learn Data Science, no matter where you’re starting from."},
    {question:"What is the duration of the course?",answer:"Typically, if you dedicate three hours a day to the course, it should take approximately 4 months to complete. Usually, it completes in 6 Months. This is a live online instructor led program with 2 years LMS access with recorded sessions as well, meaning you can learn at your own & industry required pace and according to your schedule by choosing online classes at convenient time. The course includes 180+ hours of Live Learning classes & 300+ Hours of Self-Paced content."},
    {question:"Can I access the course content for a lifetime?",answer:"You will have 2-year LMS access to the course videos. But Brainalyst ensure that every learner will complete it on time and will not look for classes after completion of the course as they’ll get placed till then."},
    {question:"What is the Data Science 360 Course?",answer:"The Data Science 360 Course is a comprehensive program covering all essential aspects of Data Analytics, Data Visualization, Data Science,and Machine Learning.It is designed for beginners and those looking to transition into roles such as Data Analyst, Data Scientist, Business Analyst, or ML Engineer."},
    {question:"Who is this course intended for?",answer:"This course is ideal for beginners or professionals looking to transition their career into data-related fields. No previous coding or programming experience is required."},
    {question:"Who is eligible to enroll in this course?",answer:"The course is open to undergraduates, fresh graduates, working professionals, and individuals with study or career gaps. It is a flexible program tailored to meet the needs of a diverse range of learners."},
    {question:"What are the pre-requisites for this course?",answer:"There are no pre-requisites. This course is beginner-friendly and does not require any prior coding or programming knowledge."},
    {question:"Is the course available online?",answer:"yesthe Data Science 360 Course is a hybrid program available only in online interactive mode. All our live sessions are fully Interactive where you can interact with Trainer & fellow learners."},{question:"What does 'hybrid' mean in the context of this course?",answer:"A hybrid program means that learners will have access to both self-paced classes and live online interactive sessions. If you prefer to complete the course faster, you can focus on the self-paced modules and still have the opportunity to attend live sessions for additional support and interaction."},
    {question:"If I miss the live classes, will I get access to recordings?",answer:"Yes, you will get the recordings of all live sessions in your LMS. It usually takes 4-6 hours for the recordings to be available after the class. Additionally, refresher sessions are scheduled during the course tenure to keep all learners on the same page."},
    {question:"What topics are covered in the course curriculum?",answer:"The curriculum includes:1.Advanced Excel for Data Analytics2.VBA for Macros3. SQL for Data Analytics4. Data Analytics & Visualization with Tableau5. Data Analytics & Visualization with PowerBi6. Data Science with R (Including Machine Learning)7. Data Science with Python (Including Machine Learning)"},
    {question:"How is the course content delivered?",answer:"The course includes 300+ hours of recorded classes and 180+ hours of live online classes conducted by industry experts in an interactive mode to enhance the learning experience of a learner."},
    {question:"When are the live classes scheduled?",answer:"Live classes are held on weekends (Saturday and Sunday) from 10:00 AM to 01:00 PM (IST)."},
    {question:"What is the duration of this course?",answer:"The standard duration is 4+2 months, but you can complete it faster with the self-paced content."},
    {question:"Is LMS access for a lifetime?",answer:"Lifetime access means until you land a job, but it can be extended upon request from the learner."},
    {question:"What kind of support is provided to students?",answer:"Students receive daily doubt sessions available from 10:00 AM to 10:00 PM (IST), dedicated study materials, assignments for each module, industry-similar case studies, and capstone projects. After course completion you’ll get Resume building, General Aptitude Test Preparation & Industry Mentor sessions to secure a rewarding job."},
    {question:"Are there any additional resources or bonuses?",answer:"Yes, additional bonuses include:1. Paid internship upon completing the self-paced course in 100 days 2. Referral bonuses 3. Course completion and internship certificates 4. Access to hackathons, coding competitions, and webinars upon course completion 5. Lifetime access to the LMS"},
    {question:"Is this a job guarantee program?",answer:"No, the course does not cover a job guarantee. However, it provides 100% job support and assistance to help you to secure a job. This includes assistance from mentors to prepare an industry-specific CV, optimize your LinkedIn profile, and support through mock interviews and general aptitude test preparation."},
    {question:"What will be the stipend during the internship?",answer:"The stipend during the internship will be based on your performance and typically ranges from INR 5000 to 12000. Internship is there for Indian Students only."},
    {question:"How long is the internship?",answer:"The internship duration depends on your performance during the first month and can be extended up to three months."},
    {question:"What starting salary (CTC) can a fresher expect after completing the course?",answer:"A fresher can expect a starting CTC of INR 4.00 – 7.50 LPA. If one performs exceptionally well during the Interview can expect a CTC of More than INR 8.00 LPA as well."},
    {question:"What salary hike can experienced professionals expect after completing the course?",answer:"Individuals with over two years of experience in any domain can expect a minimum 50% and up to a 200% hike on their current CTC. Figures can vary based on performance during Interview."},
    {question:"Can I pay the fee in installments?",answer:"Sorry, there is no part payment option available for this program. The course is already offered at a bottom price. But still you can avail Credit Card EMIs, Debit Card EMIs and other options offered by our payment aggregato"},{question:"Why is the offer price different on the website?",answer:"The offer mentioned is a personalized invitation-based offer. If you are interested, you need to share your details to proceed and you will get the course access at the mentioned price."},{question:"What is the process of enrollment?",answer:"To enroll, you need to share your name, phone number, email, sex, and state/country. You will receive an email from Brainalyst containing your user ID and password for the LMS. After logging in with the given credentials, you will see the course on your dashboard and can make the payment to access the course. The enrollment team will guide you through the process."},{question:"What kind of job support is provided?",answer:"The course offers 100% job support with hiring partners, including resume building, mock interviews, and general aptitude preparation sessions."},{question:"Are there mentorship opportunities?",answer:"Yes, students will have mentorship sessions with industry leaders twice a month. They will share Industry Insights and guide you to secure a job."},
    
  ];

  return (
    <section className='faq' id='faq' style={{marginTop: '100px'}}>
    <div style={styles.container}>
      <div><h2>FAQ ?</h2></div>
      <hr />
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
    </section>
  );
};
const styles = {
    container: {
      width: '100%',
      maxWidth: '600px',
      margin: 'auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    question: {
      backgroundColor: '#f1f1f1',
      cursor: 'pointer',
      padding: '18px',
      width: '100%',
      border: 'none',
      textAlign: 'left',
      outline: 'none',
      fontSize: '18px',
      marginBottom: '10px',
    },
    answer: {
      padding: '18px',
    //   backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      marginBottom: '10px',
    },
  };