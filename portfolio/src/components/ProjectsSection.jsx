import { ArrowRight, ExternalLink, GitBranchPlusIcon, GitCommit } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1,
        title: "Multi User Chat Application",
        description: "A FullStack responsive chat application made using React, Tailwind, Express, Cloudinary, MongoDB and NodeJs",
        image: "/projects/project1.png",
        tags: ["React", "TailwindCSS", "MongoDB","mongoose", "JWT", "Cloudinary", "Socket.io", "Express"],
        demoUrl: "https://chat-app-delta-eight-36.vercel.app/",
        githubUrl: "https://github.com/yuvrajcodes31/chat-app",
    },
    {
        id: 2,
        title: "flowAi - A Multi-purpose Saas App",
        description: "A FullStack responsive AI Saas App made using React, Tailwind, Express, Neon, Cloudinary, and NodeJs. It consumes Gemini Api and Cloudinary Api.",
        image: "/projects/project2.png",
        tags: ["React", "TailwindCSS", "Neon","Clerk", "GenAI", "Cloudinary","Express" ],
        demoUrl: "https://flow-ai-zeta.vercel.app/",
        githubUrl: "https://github.com/yuvrajcodes31/flowAi",
    },
    {
        id: 3,
        title: "A Backend Video Streaming Platform using FFmpeg",
        description: "A video streaming backend platform using MERN and FFmpeg.",
        image: "/projects/project3.png",
        tags: ["React", "TailwindCSS", "MongoDB","mongoose", "JWT"],
        demoUrl: "#",
        githubUrl: "#",
    },
]
function ProjectsSection() {
    return (
        <section id='project' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'> Featured <span className='text-primary'> Projects </span></h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, index) => (
                        <div key={index} className='group bg-card rounded-lg overflow-hidden shadow-xs'>
                            <div className='h-48 overflow-hidden'>
                                <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src={project.image} alt={project.title} />
                            </div>
                            <div className='p-6 '>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className='px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                            <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                            <div className='flex justify-between items-center'>
                                <div className='flex space-x-3'>
                                    <a
                                        href={project.demoUrl}
                                        target='_blank'
                                        className='text-foreground/80 hover:text-primary transition-colors flex items-center gap-2 duration-300'><ExternalLink size={20}/>Live Site</a>
                                    <a href={project.githubUrl}
                                        target='_blank'
                                        className='text-foreground/80 hover:text-primary transition-colors flex items-center gap-2 duration-300'><GitCommit size={20} />Github repo</a>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                <div className='text-center mt-12'>
                    <a className='cosmic-button w-fit flex items-center mx-auto gap-2' href="https://github.com/yuvrajcodes31" target='_blank'> Check My Github <ArrowRight size={16} /></a>
                </div>
            </div>
        </section>

    )
}

export default ProjectsSection