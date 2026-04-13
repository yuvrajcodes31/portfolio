import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

function About() {
    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className="container mx-auto max-w-5xl">
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    About <span className='text-primary'> Me</span>
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-6'>
                        <h3>Passionate Web Developer</h3>
                        <p className='text-muted-foreground'>
                            I specialize in creating scalable, performing web applications using modern technologies.
                        </p>
                        <p className='text-muted-foreground'>
                            A Backend Developer who loves building the server-side logic that powers web applications. Comfortable with REST APIs, databases, and Git, currently leveling up through hands-on projects and real-world problem solving.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                            <a href="#contact" className='cosmic-button'> Get In Touch </a>
                            <a href="" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-6'>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Code className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'> Web Development </h4>
                                    <p className='text-muted-foreground'>Creating responsive websites and web applications using React, Tailwind & Javascript/HTML/CSS.</p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <User className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'> Backend Web Development </h4>
                                    <p className='text-muted-foreground'>Foundational knowledge in server-side programming, databases, and API development. Familiar with core concepts such as RESTful APIs, basic Auth using JWT, version control with Git, and Node.js. Comfortable working in a collaborative environment, writing clean and readable code, and debugging common issues</p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Briefcase className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'> Project Management </h4>
                                    <p className='text-muted-foreground'>Completing projects with agile methodologies including breaking down tasks, setting priorities, and tracking progress using tools like GitHub Projects.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About