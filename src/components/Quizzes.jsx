import React from 'react'
import './quizzes.css'
import quiz01 from '../assets/images/quiz01.png'
import quiz02 from '../assets/images/quiz02.png'
import quiz03 from '../assets/images/quiz03.png'

const Quizzes = () => (
    <div className='main-quiz-section container'>
        <div className='text-content'>
            <h1>Quizzes to Assess Your Mental Health</h1>
            <p>Our quizzes are designed to help you identify the symptoms of depression, OCD, and ADHD, and assess your mental health. <br /> Take our quizzes and get an instant evaluation of your mental health condition. <br /> Our quizzes are free and easy to use, and the results are confidential.</p>
        </div>
        <div className='quizzes-section'>
            <div className='quiz'>
                <div>
                    <img src={quiz01} alt="quiz01" />
                </div>
                <div>
                    <h1>Obsessive-Compulsive Disorder</h1>
                    <p>OCD is a common mental health condition that affects people of all ages. It can be difficult to diagnose and can cause significant distress for those who suffer from it. Our OCD section is designed to help you understand the condition better and provide you with resources to manage your symptoms.</p>
                    <button>Evaluate quiz</button>
                </div>
            </div>
            <div className='quiz'>
                <div>
                    <img src={quiz02} alt="quiz01" />
                </div>
                <div>
                    <h1>ADHD/ADD</h1>
                    <p> Attention Deficit Hyperactivity Disorder (ADHD), also known as Attention Deficit Disorder (ADD), is a neurodevelopmental disorder that affects both children and adults. ADHD/ADD is characterized by inattention, hyperactivity, and impulsivity. People with ADHD/ADD may find it difficult to focus on tasks, stay organized, manage time, and control impulses.</p>
                    <button>Evaluate quiz</button>
                </div>
            </div>
            <div className='quiz'>
                <div>
                    <img src={quiz03} alt="quiz01" />
                </div>
                <div>
                    <h1>Postpartum Depression</h1>
                    <p>Postpartum depression is a serious condition that affects many new mothers. It is important to identify the symptoms early on so that appropriate treatment can be provided. Our screening quiz can help identify if you or someone you know may be experiencing postpartum depression.</p>
                    <button>Evaluate quiz</button>
                </div>
            </div>
        </div>
    </div>
)


export default Quizzes