


'use client'

import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useAuth } from '../../../../../AuthContext/AuthContext';
import { useParams, useRouter } from 'next/navigation';

export default function All_College_Deshboard() {

    const { user, college_Data, setcollege_Data, setUser } = useAuth();
    const [singledata, setSingleData] = useState([]);
    const [userSingleData, setuserSingleData] = useState([]);


    const params = useParams();
    const roter = useRouter();
    const id = params?.id;




    // useEffect(() => {
    //     fetch('https://college-booking-backend.vercel.app/all_college')
    //         .then(res => res.json())
    //         .then(data => {
    //             setcollege_Data(data);
    //         })
    // }, [])


    // console.log('college data', college_Data)

    useEffect(() => {
        fetch("https://college-booking-backend.vercel.app/all_college")
            .then((res) => res.json())
            .then((data) => setcollege_Data(data));
    }, [setcollege_Data]); // ✅ include setcollege_Data in dependencies




    useEffect(() => {
        if (college_Data.length > 0 && id) {
            const found = college_Data.find(data => data._id === id)
            setSingleData(found)
            console.log('Matched college item:', found)
        }
    }, [college_Data, id])

    console.log('college data single', singledata)





    // user data

    useEffect(() => {
        fetch('https://college-booking-backend.vercel.app/all_users')
            .then(res => res.json())
            .then(data => {
                setUser(data);
            })
    }, [setUser])


    console.log('user data', user)



    useEffect(() => {
        if (user?.length > 0 && id) {
            const found = user.find(data => data._id === id)
            setuserSingleData(found)
            console.log('Matched college item:', found)
        }
    }, [user, id])

    console.log('single uer  data single', userSingleData)








    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const College_Name = form.get('collegename');
        const Student_Name = form.get('studnentname');
        const Subject = form.get('subject');
        const Email = form.get('email');
        const Phone = form.get('phone');
        const Address = form.get('address');
        const Birth_Date = form.get('dateofbirth');




        const postedData = {
            College_Name,
            Student_Name,
            Subject,
            Email,
            Phone,
            Address,
            Birth_Date,



        };



        try {
            const response = await fetch("https://college-booking-backend.vercel.app/admision_Data", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postedData),
            });

            const res = await response.json();


            if (res.insertedId) {
                // ✅ Save admitted college data
                const admittedCollege = {
                    studentEmail: Email,
                    studentName: Student_Name,
                    Subject: Subject,
                    Phone: Phone,
                    Address: Address,
                    Birth_Date: Birth_Date,
                    College_Name: College_Name,
                    Admission_Start: singledata.Admission_Start,
                    Admission_End: singledata.Admission_End,
                    Admission_Process: singledata.Admission_Process,
                    Events: singledata.Events,
                    Resarch_Name: singledata.Resarch_Name,
                    Sports_Name: singledata.Sports_Name,
                    College_Image: singledata.College_Image,
                    admittedAt: new Date().toISOString()
                };

                await fetch("https://college-booking-backend.vercel.app/user_colleges", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(admittedCollege),
                });

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Post Successfully Added!',
                    showConfirmButton: false,
                    timer: 1500
                });
                e.target.reset();
            }

            else {
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

    return (


        <div className="bg-white">
            <div className="max-w-7xl mx-auto bg-white px-3 lg:px-[88px]  pb-20">
                <h1 className="text-3xl md:text-5xl text-center text-black py-10 uppercase font-bold">
                    College Admission Form
                </h1>

                {/* College Card */}
                <div className=" mx-auto mt-10 p-6 border-2 border-gray-800 rounded-xl  ">

                    <form onSubmit={handleFormSubmit} className="">

                        <legend className="text font-semibold pt-5 text-black">College Name </legend>
                        <input type="text" readOnly name='collegename' defaultValue={singledata?.College_Name || ''} className="input w-full text-white" placeholder="College Name" required />

                        <div className=' grid md:grid-cols-2 gap-x-5'>
                            <div>
                                <legend className="text font-semibold pt-2 text-black">Student Name  </legend>
                                <input type="text" readOnly defaultValue={user?.displayName || ''} name='studnentname' className="input w-full text-white" placeholder="College Name" required />

                            </div>
                            <div>
                                <legend className="text font-semibold pt-2 text-black">Subject </legend>
                                <input type="text" name='subject' className="input w-full text-white" placeholder="Subject" required />
                            </div>
                        </div>

                        <div className=' grid md:grid-cols-2 gap-x-5'>
                            <div>
                                <legend className="text font-semibold pt-2 text-black">Email </legend>
                                <input type="email" name='email' readOnly defaultValue={user?.email || ''} className="input w-full text-white bg-black" placeholder="Email" required />
                            </div>
                            <div>
                                <legend className="text font-semibold pt-2 text-black">Phone</legend>
                                <input type="text" name='phone' className="input w-full text-white bg-black" placeholder="Phone" required />

                            </div>
                        </div>
                        <div className=' grid md:grid-cols-2 gap-x-5'>
                            <div>
                                <legend className="text font-semibold pt-2 text-black">Address </legend>
                                <input type="text" name='address' className="input w-full text-white" placeholder="Address" required />
                            </div>
                            <div>
                                <legend className="text font-semibold pt-2 text-black">Date Of Birth </legend>
                                <input type="date" name="dateofbirth" className="input input-bordered w-full" />

                            </div>
                        </div>


                        <button className="btn btn-primary w-full mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
