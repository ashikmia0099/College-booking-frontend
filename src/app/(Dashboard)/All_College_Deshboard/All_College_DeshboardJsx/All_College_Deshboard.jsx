


'use client'

import uploadToImgBB from '@/app/ImageUpload_Site/UploadImageBBImage';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function All_College_Deshboard() {



    const [formData, setFormData] = useState("facebook")



    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const College_Name = form.get('collegename');
        const Admission_Start = form.get('admissionStart');
        const Admission_End = form.get('admissionend');
        const Admission_Process = form.get('admissionProcess');
        const Events = form.get('events');
        const Resarch_Name = form.get('research');
        const Sports_Name = form.get('sports');
       
        const Choose_Image_File = form.get('image');
        const College_Image = Choose_Image_File ? await uploadToImgBB(Choose_Image_File) : '';


        const postedData = {
            College_Name,
            Admission_Start,
            Admission_End,
            Admission_Process,
            Events,
            Resarch_Name,
            Sports_Name,
            College_Image,


        };



        try {
            const response = await fetch("https://college-booking-backend-ro5u.onrender.com/all_college", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postedData),
            });

            const res = await response.json();

            if (res.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Post Successfully Added!',
                    showConfirmButton: false,
                    timer: 1500
                });
                e.target.reset();

            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong.',
                    icon: 'error',
                    confirmButtonText: 'Try again'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Network Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };






    const handleRatingClick = (value) => {
        setFormData((prev) => ({ ...prev, rating: value }));
    };



    return (


        <div className="bg-white">
            <div className="max-w-7xl mx-auto bg-white lg:px-[88px] px-5">
                <h1 className="text-5xl text-center text-black py-10 uppercase font-bold">
                    My College
                </h1>

                {/* College Card */}
                <div className=" mx-auto mt-10 p-6 border-2 border-gray-800 rounded-xl ">
                    <h2 className="text-2xl font-bold mb-4 text-center text-black">College Info Form</h2>
                    <form onSubmit={handleFormSubmit} className="">

                        <legend className="text font-semibold pt-5 text-black">College Name </legend>
                        <input type="text" name='collegename' className="input w-full text-white" placeholder="College Name" required />

                        <div className=' grid md:grid-cols-2 gap-x-5'>
                            <div>
                                <legend className="text font-semibold pt-2 text-black">Admission Start Date </legend>
                                <input type="date" name="admissionStart" className="input input-bordered w-full" />


                            </div>
                            <div>
                                <legend className="text font-semibold pt-2 text-black">Admission end Date </legend>
                                <input type="date" name="admissionend" className="input input-bordered w-full" />


                            </div>
                        </div>

                        <div className=' grid md:grid-cols-2 gap-x-5'>
                            <div>
                                <legend className="text font-semibold pt-2 text-black">Admission Process</legend>
                                <input type="text" name="admissionProcess" placeholder="Admission Process" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <legend className="text font-semibold pt-2 text-black">Events</legend>
                                <input type="text" name="events" placeholder="Events (comma separated)" className="input input-bordered w-full" />

                            </div>
                        </div>
                        <div className=' grid md:grid-cols-2 gap-x-5'>
                            <div>
                                <legend className="text font-semibold pt-2 text-black">Resarch Areas Name</legend>
                                <input type="text" name="research" placeholder="Research Areas" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <legend className="text font-semibold pt-2 text-black">Sports Name</legend>
                                <input type="text" name="sports" placeholder="Sports (comma separated)" className="input input-bordered w-full" />

                            </div>
                        </div>
                        <legend className="text font-semibold pt-2 text-black">College Image</legend>
                        <input type="file" name='image' className="file-input w-full text-black bg-black mb-3" />
                     

                        <button className="btn btn-primary w-full">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
