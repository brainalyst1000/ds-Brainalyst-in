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
  const faqData = [
    { question: 'What is Data science?', answer: 'Data Science is a field that uses math, programming, and expertise in specific subjects to find useful information in data. It involves studying, analyzing, and explaining complex sets of data to help make decisions.' },
    { question: 'What is the Data Science 360 Course?', answer: 'The Data Science 360 Course covers everything you need to know about Data Analytics, Data Visualization, Data Science, and Machine Learning. It’s for people who want to start or change their careers to roles like Data Analysts, Data Scientists, Business Analysts, or ML Engineers.' },
    { question: 'What do I need to start a career in Data Science?', answer: 'To start a career in Data Science, you need to know math, programming, data analysis, and statistics. Our course teaches all of these things, so you’ll be ready for a career in this field.' },
    {question:'Who can take this Data Science course?',answer:'',},
    {question:'',answer:'Our Data Science course is for students, graduates, and working professionals from any background. Whether you’re new to this or already know something about data, our course is made for you.',},
    {question:'What skills will I learn with this Data Science online course?',answer:'With our Data Science online course, you’ll learn programming in SQL, R and Python, using tools like Excel, PowerBi, and Tableau for data analytics & visualization. You’ll learn what you need to work in the industry.',},
    {question:'Why should you take this Data Science course?',answer:'Taking our Data Science course gives you the skills you need to succeed in the data world. With hands-on training, insights from the industry, and help finding a job, you’ll be ready for roles in data analytics, machine learning, and big data.',},
    {question:'What does a Data Scientist do?',answer:'Data Scientists look at data, find patterns, and use that information to solve complex problems in business. They use math, machine learning, and what they know about the business to make good decisions.',},
    {question:'What is the average salary for a Data Scientist in India?',answer:'The salary for Data Scientists in India varies based on things like experience, where you work, and the industry. But generally, Data Scientists can make good money, especially now when data jobs are in demand.',},
    {question:'Can I Become a Data Scientist Without a Degree?',answer:'You don’t need a degree to be a Data Scientist. Our course is for everyone, no matter your education. We’ll teach you what you need to know to work in Data Science.',},
    {question:'Is a Data Science certification important?',answer:'A Data Science certification shows you know your stuff, but what’s more important is that you can do the work. Our course focuses on hands-on learning so you’ll be ready for real jobs.',},
    {question:'Is data science a good career?',answer:'Yes, Data Science is a good career with lots of chances to grow. As more businesses use data, there are more jobs in Data Science, and they can pay well too.',},
    {question:'How Brainalyst is different from other online learning platforms?',answer:'Brainalyst is different because we teach everyone, even if you’re new to coding. Our courses are interactive, we give you personal help, and what we teach matches what’s happening in the real world.',}
    
  ];

  return (
    <div style={styles.container}>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
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