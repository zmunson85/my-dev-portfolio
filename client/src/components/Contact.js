import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
init("user_w3cezXYt9rPRxR5JRZlxG");

export default function Contact() {
    const form = useRef();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('service_qhou7t9', 'zmunson85', form.current, "user_w3cezXYt9rPRxR5JRZlxG")
            .then((result) => {
                alert(`${name}, Your Message Was Sent, Thank you for reaching out to me, I will get back to you soon! `)
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d196138.256637777!2d-104.84005187090992!3d39.81461195049979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1639015812397!5m2!1sen!2sus"


                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                Current Location
                            </h2>
                            <p className="mt-1">

                                Denver, Co 80233
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                Get In Touch:
                            </h2>
                            <a className="text-indigo-400 leading-relaxed">
                                Please Contact me by Email!

                            </a>

                        </div>
                    </div>
                </div>
                <form
                    ref={form}
                    id="contact"
                    name="contact"
                    onSubmit={handleSubmit}
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Email Me
                    </h2>
                    <p className="leading-relaxed mb-5">
                        Do you want to get in touch with me? Complete this form and I will get back to you shortly!
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            value={name}
                            type="text"
                            id="name"
                            name="to_name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            value={email}
                            type="email"
                            id="email"
                            name="for_name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            value={message}
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}