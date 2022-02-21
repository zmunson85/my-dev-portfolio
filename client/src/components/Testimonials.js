import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
    return (
        <section id="testimonials">
            <div className="container px-5 py-10 mx-auto text-center">
                <AcademicCapIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Coding Experience - Completed Programs
                </h1>
                <div className="flex flex-wrap m-4">
                    {testimonials.map((testimonial) => (
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                <img
                                    alt="testimonial"
                                    key={testimonial._id}
                                    src={testimonial.image}
                                    className="w-16 rounded-full flex-shrink-0 object-cover object-center"
                                />
                                <div className="inline-flex items-center">
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-white">
                                            {testimonial.company}
                                        </span>
                                        <span className="text-gray-500 text-sm uppercase">
                                            {testimonial.date}
                                        </span>
                                        <span className="text-gray-500 text-sm uppercase">
                                            {testimonial.name}
                                        </span>
                                    </span>
                                </div>
                                <p className="leading-relaxed mb-6">{testimonial.quote}</p>

                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}