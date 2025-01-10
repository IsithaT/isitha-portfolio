import React from 'react'
import NavBar from '@/components/NavBar'

const Contact = () => {


    return (
        <div className="flex flex-col h-screen w-full">
            <NavBar />
            <div className="flex h-screen w-full flex-col items-center">
                <span className='mt-[100px] prose'>
                  <h2>Education & Experience</h2>
                </span>
                <div className="w-[65%] h-[100] min-h-fit flex flex-col gap-13 justify-between mt-[100px]">
                    <div className="prose-full-width flex flex-col justify-center">
                        <h4>Reach out to me by email</h4>
                        <p>ilt[at]sfu.ca</p>
                        <p>Or connect with me on <a href="https://www.linkedin.com/in/isithat/">LinkedIn</a> and send me a message</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
