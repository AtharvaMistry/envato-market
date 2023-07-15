

function Header(){


    return(
        <>
        <div className="container-fluid bg-gradient-to-r from-[#fbf5fd] via-[#f5e8fc] via-[#fefbfd] via-[#fed9da] to-[#ffecee]">
        {/* Header part------------------------------------------------------------------------ */}
        <div className="container-fluid bg-black flex text-white justify-between pl-5 pt-3 pb-3 pr-5 fixed l-0 r-0 t-0 w-full h-54">
            <div className="flex text-lg">
                <img src={process.env.PUBLIC_URL + '/images/envato.png'} alt="" className="w-4 h-4 mt-3" />
                <span className="text-2xl">envato</span><span className="text-[#6a903a] text-2xl">market</span>
            </div>
            <button className="bg-[#82b43f] rounded-md text-sm pl-4 pr-4">Buy Now</button>
        </div>

        {/* weasley-------------------------------------------------------------------------- */}
          
        <div className="container-fluid weasley flex justify-between items-center fixed w-full l-0 r-0 navbar weasley border-b border-grey bg-gradient-to-r from-[#fbf5fd] via-[#f5e8fc] via-[#fefbfd] via-[#fed9da] to-[#ffecee] ">
            <h2 className="text-[30px] font-bold mt-[15px] mb-[15px] ml-[20px] ">Weasley</h2>
            <div>
                        
                <button class="inline-block md:hidden text-black mr-[20px]">
                <svg class="h-9 w-9 fill-current" viewBox="0 0 24 24">
                    <path v-if="!isOpen" fill-rule="evenodd" clip-rule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
                    
                </svg>
                </button>
            </div>
        </div>


        {/* introduction------------------------------------------------------------ */}
        <div className="container-fluid mainContainer">
        <div className="container-fluid introduction text-black introduction bg-gradient-to-r from-[#fbf5fd] via-[#f5e8fc] via-[#fefbfd] via-[#fed9da] to-[#ffecee]  border-b-1 border-gray-500">
            <h3 className="font-bold ">INTRODUCTION</h3>
            <h4 className="text-[40px] font-bold">I'm Ron a Creative <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">Developer & UI Expert</span></h4>
            <p className="text-[18px] text-[#4a4949]">I design and develop services for customers of all sizes,
             specializing in creating stylish, modern websites, web services and online stores. My passion is to design
              digital user experiences through the bold interface and meaningful interactions.</p>
              <div className="flex flex-row ">
                    <p className="border-r border-gray pr-10"><span className="text-[32px] font-bold border-r-1 border-[#a3a1a1]-500 pr-65 ">10+<br/></span><span className="text-[#4a4949]">YEARS<br/> OF <br/>EXPERIENCE</span></p>
                    <p className="pl-5"><span className="text-[32px] font-bold ">296+<br/></span><span className="text-[#4a4949]">PROJECTS<br/> COMPLETED</span></p>
            </div>
            
            <img src={process.env.PUBLIC_URL + '/images/home-banner.jpg'} alt="" className="mt-3 img-fluid" />
            
        </div>

        {/* resume---------------------------------------------------------------------- */}

        <div className="container-fluid flex flex-col justify-center items-center pl-[15px] pr-[15px] pt-[40px] bg-gradient-to-r from-[#fbf5fd] via-[#f5e8fc] via-[#fefbfd] via-[#fed9da] to-[#ffecee] pl-15  border-b-1 border-gray-500 pb-10" >
             <img src={process.env.PUBLIC_URL + '/images/home-banner1.jpg'} alt="" className="rounded-full" style={{width:'400px'}} />
             <div className="resumeSocial flex justify-around mt-3 mb-5w">
                <img src={process.env.PUBLIC_URL + '/images/facebook (2).png'} alt="" className="rounded-full w-6 h-6 hover:bg-gradient-to-r mr-4 from-red-500 to-blue-500" />
                <img src={process.env.PUBLIC_URL + '/images/instagram.png'} alt="" className="rounded-full w-6 h-6 mr-4 hover:bg-gradient-to-r from-red-500 to-blue-500" />
                <img src={process.env.PUBLIC_URL + '/images/login.png'} alt="" className="rounded-full w-6 h-6 mr-4 hover:bg-gradient-to-r from-red-500 to-blue-500" />
                <img src={process.env.PUBLIC_URL + '/images/pinterest.png'} alt="" className="rounded-full w-6 h-6 mr-4 hover:bg-gradient-to-r from-red-500 to-blue-500" />
                <img src={process.env.PUBLIC_URL + '/images/twitter.png'} alt="" className="rounded-full w-6 h-6  hover:bg-gradient-to-r from-red-500 to-blue-500" />
             </div>
        </div>

        {/* education, experience, competence and tools */}
        <div className="education pl-[15px] pr-[15px]">
            <div className="">
             <h2 className="text-[22px]  font-semibold border-b-2 border-black pb-2 mb-3">Biography</h2>
             <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas aliquam amet quam quis et. Non amet vitae arcu fames posuere.</p>
            </div>

            <div className="">
                <h2 className="text-[22px]  font-semibold border-b-2 border-black pb-2 mb-3">Education</h2>
                <div className="flex flex-row justify-start ">
                        <p>Creative Director<br/>
                        pxdraft University<br/>
                        <span className="text-[12px]">2021</span></p>
                            <div className="ml-20">
                            <p>UI/UX Design<br/>
                            pxdraft University,<br/>US<br/>
                            <span className="text-[12px]">2018</span></p>
                            </div>
                </div>
            </div>

            <div className="container-fluid mb-5 ">
                     <h2 className="text-[22px] font-semibold border-b-2 border-black pb-2 mb-3">Experience</h2>
                    <div className="container-fluid flex flex-row flex-wrap justify-between ">
                                <div className="mb-5 experience">
                                    <p>
                                    Creative Director<br/>
                                    NY, UK<br/>
                                    <span className="text-[12px]">Jan 2021 — Present</span>
                                    </p>
                                </div>
                    <div className="experience">
                                <p>UI/UX Designer<br/>
                                pxdraft Ltd, UK<br/>
                                <span className="text-[12px]">Jan 2018 — Dec 2021</span></p>
            </div>
            <div className="experience">
                                <p>Design Internship<br/>
                                pxdraft Studio, UK<br/>
                                <span className="text-[12px]">Jan 2017 — May 2017</span></p>
            </div>
            <div className="experience">
                                    <p>Front-end Internship<br/>
                                    pxdraft, UK<br/>
                                    <span className="text-[12px]">June 2017 — Oct 2017</span></p>
            </div>
                    </div>
            </div>


            <div className="container-fluid border-b-1 border-gray-500 ">
 
                <div className="cAndT">
                    <div className="">
                        <h2 className="text-[22px] font-semibold border-b-2 border-black pb-2 mb-3">
                            Competences</h2>
                            <div>
                            <p>UX / UI Design<br/>
                                UX Research<br/>
                                Web Development<br/>
                                DA - Motion<br/>
                                Video creator</p>
                            </div>
                    </div>

                    <div className="mt-5 pb-5">
                        <h2 className="text-[22px] font-semibold border-b-2 border-black pb-2 mb-3">
                            Tools</h2>
                            <div>
                            <p>Figma<br/>
                            Sketch<br/>
                            Adobe After Effect<br/>
                            Adobe Photoshop<br/>
                            HTML - CSS - JS<br/>
                            </p>
                    </div>
                </div>
            
                 </div>
             </div>
        </div>

{/* searvices---------------------------------- */}
        <div className="container-fluid bg-gradient-to-r from-[#fbf5fd] via-[#f5e8fc] via-[#fefbfd] via-[#fed9da] to-[#ffecee] pl-[15px] pr-[15px] border-t border-gray-500 pt-10 pb-10 border-b border-gray-500">
            <div className="mb-10 text-center">
                <button className=" border rounded-lg pt-1 pb-1 pr-3 pl-3 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Services</button>
                <h2 className="font-semibold mb-2 text-[34px] ">Services provide for you</h2>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
    
    <div className="">

        <div className="serviceBox">
            <div className="border rounded-lg flex justify-center items-center p-3 mb-10 mr-5">
                    <div className="flex border rounded-full p-2 bg-gradient-to-r from-red-500 to-blue-500 m-3">
                        <img src={process.env.PUBLIC_URL + '/images/mobile-phone (1).png'} alt="" className=" w-11 " />
                    </div>
               <div>
                 <h2 className="font-semibold mb-2">Web Design</h2>
                 <p>
                    Lorem ipsum dolor sit amet,<br/>
                    consectetur adipisicing elit,<br/>
                    sed do eiusmod tempor incididunt<br/>
                    ut labore et dolore magna aliqua.
                 </p>
               </div>
            </div>

            <div className="border rounded-lg flex justify-center items-center p-3 mb-10 mr-5">
                    <div className="flex border rounded-full p-2 bg-gradient-to-r from-red-500 to-blue-500 m-3">
                        <img src={process.env.PUBLIC_URL + '/images/notebook-computer.png'} alt="" className=" w-11 " />
                    </div>
               <div>
                 <h2 className="font-semibold mb-2">Development</h2>
                 <p>
                    Lorem ipsum dolor sit amet,<br/>
                    consectetur adipisicing elit,<br/>
                    sed do eiusmod tempor incididunt<br/>
                    ut labore et dolore magna aliqua.
                 </p>
               </div>
            </div>
        </div>

        <div className="serviceBox">
            <div className="border rounded-lg flex justify-center items-center p-3 mb-10 mr-5">
                     <div className="flex border rounded-full p-2 bg-gradient-to-r from-red-500 to-blue-500 m-3">
                        <img src={process.env.PUBLIC_URL + '/images/service.png'} alt="" className=" w-11 " />
                    </div>
               <div>
                 <h2 className="font-semibold mb-2">SEO marketing</h2>
                 <p>
                    Lorem ipsum dolor sit amet,<br/>
                    consectetur adipisicing elit,<br/>
                    sed do eiusmod tempor incididunt<br/>
                    ut labore et dolore magna aliqua.
                 </p>
               </div>
            </div>


            <div className="border rounded-lg flex justify-center items-center p-3 mb-10 mr-5">
                     <div className="flex border rounded-full p-2 bg-gradient-to-r from-red-500 to-blue-500 m-3">
                        <img src={process.env.PUBLIC_URL + '/images/struggle.png'} alt="" className=" w-11 " />
                    </div>
               <div>
                 <h2 className="font-semibold mb-2">Web Design</h2>
                 <p>
                    Lorem ipsum dolor sit amet,<br/>
                    consectetur adipisicing elit,<br/>
                    sed do eiusmod tempor incididunt<br/>
                    ut labore et dolore magna aliqua.
                 </p>
               </div>
            </div>
        </div>

        <div className="serviceBox">
            <div className="border rounded-lg flex justify-center items-center p-3 mb-10 mr-5">
                    <div className="flex border rounded-full p-2 bg-gradient-to-r from-red-500 to-blue-500 m-3">
                        <img src={process.env.PUBLIC_URL + '/images/notebook-computer.png'} alt="" className=" w-11 " />
                    </div>
               <div>
                 <h2 className="font-semibold mb-2">Development</h2>
                 <p>
                    Lorem ipsum dolor sit amet,<br/>
                    consectetur adipisicing elit,<br/>
                    sed do eiusmod tempor incididunt<br/>
                    ut labore et dolore magna aliqua.
                 </p>
               </div>
            </div>

            <div className="border rounded-lg flex justify-center items-center p-3 mb-10 mr-5">
                    <div className="flex border rounded-full p-2 bg-gradient-to-r from-red-500 to-blue-500 m-3">
                        <img src={process.env.PUBLIC_URL + '/images/notebook-computer.png'} alt="" className=" w-11 " />
                    </div>
               <div>
                 <h2 className="font-semibold mb-2">Development</h2>
                 <p>
                    Lorem ipsum dolor sit amet,<br/>
                    consectetur adipisicing elit,<br/>
                    sed do eiusmod tempor incididunt<br/>
                    ut labore et dolore magna aliqua.
                 </p>
               </div>
            </div>
        </div>
        </div>
    </div>

  {/* portfolio-------------------------------------------------------------------- */}

        <div className="container-fluid pr-[15px] pl-[15px] pb-10 pt-10 bg-gradient-to-r from-[#fbf5fd] via-[#f5e8fc] via-[#fefbfd] via-[#fed9da] to-[#ffecee] border-b border-gray-500">
            <div className="text-center mb-5">
                <button className=" border rounded-lg pt-1 pb-1 pr-3 pl-3 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent hover:text-[20px]">Portfolio</button>
                <h2 className="font-semibold mb-2 text-[34px] ">My latest projects</h2>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

        <div className="portfolio">      
            <div className="border border-gray-500 rounded-lg box-border mb-10 mr-5">
                <img src={process.env.PUBLIC_URL + '/images/Screenshot 2023-05-06 100817.png'} alt="" className="rounded-t-lg " />
                <h3 className="font-semibold mb-2 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent m-5">Web Design 
                for Marketing Agency 
                Startup</h3>
                <p className="m-5">Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua.</p>
                <h3 className="m-5 hover:text-[20px]">VIEW PROJECT &#8594;</h3>
            </div>

            <div className="border border-gray-500 rounded-lg box-border mb-10 mr-5">
                <img src={process.env.PUBLIC_URL + '/images/Screenshot 2023-05-06 100848.png'} alt="" className="rounded-t-lg " />
                <h3 className="font-semibold mb-2 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent m-5">Web Design 
                for Marketing Agency 
                Startup</h3>
                <p className="m-5">Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua.</p>
                <h3 className="m-5 hover:text-[20px]">VIEW PROJECT &#8594;</h3>
            </div>

            <div className="border border-gray-500 rounded-lg box-border mb-10 mr-5">
                <img src={process.env.PUBLIC_URL + '/images/Screenshot 2023-05-06 100831.png'} alt="" className="rounded-t-lg " />
                <h3 className="font-semibold mb-2 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent m-5">Web Design 
                for Marketing Agency 
                Startup</h3>
                <p className="m-5">Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua.</p>
                <h3 className="m-5 hover:text-[20px]">VIEW PROJECT &#8594;</h3>
            </div>
        </div>


        </div>

        {/* core values-------------------------------------------------------------------------------- */}

        <div className="container-fluid pt-10 bg-gradient-to-r from-[#fbf5fd] via-[#f5e8fc] via-[#fefbfd] via-[#fed9da] to-[#ffecee] pr-[15px] pl-[15px] pb-10 border-b ">
            <div className="text-center mb-5">
                <button className=" border rounded-lg pt-1 pb-1 pr-3 pl-3 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent hover:text-[20px]">Portfolio</button>
                <h2 className="font-semibold mb-2 text-[34px] ">Core values that drive my work</h2>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="portfolio">
                <div className="border border-gray-500 rounded-lg box-border mb-10 flex flex-col items-start mr-5">
                    <div className="flex border rounded-full p-2 bg-gradient-to-r from-red-500 to-blue-500 m-3">
                        <img src={process.env.PUBLIC_URL + '/images/struggle.png'} alt="" className=" w-11 " />
                    </div>
                    <h3 className="font-semibold mr-3 ml-3">
                    Hard work</h3>
                    <p className="mr-3 ml-3 mb-3">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua.</p>
                </div>
            

            
                <div className="border border-gray-500 rounded-lg box-border mb-10 flex flex-col items-start mr-5">
                    <div className="flex border rounded-full p-2 bg-gradient-to-r from-red-500 to-blue-500 m-3">
                        <img src={process.env.PUBLIC_URL + '/images/transparency.png'} alt="" className=" w-11 " />
                    </div>
                    <h3 className="font-semibold mr-3 ml-3">
                    Transparency</h3>
                    <p className="mr-3 ml-3 mb-3">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div className="portfolio">
                <div className="border border-gray-500 rounded-lg box-border mb-10 flex flex-col items-start mr-5">
                    <div className="flex border rounded-full p-2 bg-gradient-to-r from-red-500 to-blue-500 m-3">
                        <img src={process.env.PUBLIC_URL + '/images/innovation.png'} alt="" className=" w-11 " />
                    </div>
                    <h3 className="font-semibold mr-3 ml-3">
                    Innovation</h3>
                    <p className="mr-3 ml-3 mb-3">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua.</p>
                </div>
            

        
                <div className="border border-gray-500 rounded-lg box-border mb-10 flex flex-col items-start mr-5">
                    <div className="flex border rounded-full p-2 bg-gradient-to-r from-red-500 to-blue-500 m-3">
                        <img src={process.env.PUBLIC_URL + '/images/growth.png'} alt="" className=" w-11 " />
                    </div>
                    <h3 className="font-semibold mr-3 ml-3">
                    Growth</h3>
                    <p className="mr-3 ml-3 mb-3">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div className="portfolio">
                <div className="border border-gray-500 rounded-lg box-border mb-10 flex flex-col items-start mr-5">
                    <div className="flex border rounded-full p-2 bg-gradient-to-r from-red-500 to-blue-500 m-3">
                        <img src={process.env.PUBLIC_URL + '/images/teamwork.png'} alt="" className=" w-11 " />
                    </div>
                    <h3 className="font-semibold mr-3 ml-3">
                    Team Work</h3>
                    <p className="mr-3 ml-3 mb-3">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua.</p>
                </div>
            

            
                <div className="border border-gray-500 rounded-lg box-border mb-10 flex flex-col items-start mr-5">
                    <div className="flex border rounded-full p-2 bg-gradient-to-r from-red-500 to-blue-500 m-3">
                        <img src={process.env.PUBLIC_URL + '/images/service.png'} alt="" className=" w-11 " />
                    </div>
                    <h3 className="font-semibold mr-3 ml-3">
                    Excellence</h3>
                    <p className="mr-3 ml-3 mb-3">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua.</p>
                </div>
            </div>

        </div>

        {/* testimonial ----------------------------------------------------------------- */}

        <div className="container-fluid bg-gradient-to-r from-[#fbf5fd] via-[#f5e8fc] via-[#fefbfd] via-[#fed9da] to-[#ffecee] pr-[15px] pl-[15px] pb-10 pt-10 border-b">

            <div className="text-center mb-5">
                <button className=" border rounded-lg pt-1 pb-1 pr-3 pl-3 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent hover:text-[20px]">Testimonial</button>
                <h2 className="font-semibold mb-2 text-[34px] ">Our Clients Feedback.</h2>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="portfolio">
                    <div className="border rounded-lg flex justify-center items-center p-3 mb-10">
                    <img src={process.env.PUBLIC_URL + '/images/model.jpg'} alt="" className="border rounded-full w-20 mr-3"  />
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet,<br/>
                            consectetur adipisicing elit,<br/>
                            sed do eiusmod tempor incididunt<br/>
                            ut labore et dolore magna aliqua.
                        </p>
                        <p className="mt-2">Jeniffer Lutheran<br/>
                        CEO at KurmInfo</p>
                    </div>
                </div>

                    <div className="border rounded-lg flex justify-center items-center p-3 mb-10">
                        <img src={process.env.PUBLIC_URL + '/images/model.jpg'} alt="" className="border rounded-full w-20 mr-3" />
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet,<br/>
                                consectetur adipisicing elit,<br/>
                                sed do eiusmod tempor incididunt<br/>
                                ut labore et dolore magna aliqua.
                            </p>
                            <p className="mt-2">Jeniffer Lutheran<br/>
                             CEO at KurmInfo</p>
                        </div>
                    </div>
                
            </div>

        </div>


        {/* contact----------------------------------------------------------------------------- */}

        <div className="container-fluid  bg-gradient-to-r from-[#fbf5fd] via-[#f5e8fc] via-[#fefbfd] via-[#fed9da] to-[#ffecee] pr-[15px] pl-[15px] pb-10 pt-10 border-b">

            <div className="text-center mb-5">
                <button className=" border rounded-lg pt-1 pb-1 pr-3 pl-3 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent hover:text-[20px]">Contact</button>
                <h2 className="font-semibold mb-2 text-[34px] ">Get in touch</h2>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="border rounded-lg p-5 mb-20">
                <div className="flex flex-col">
                    <input type="text" placeholder="Name*" className="border border-[#bcbaba] rounded-sm pt-1 pb-1 pl-2 mb-5 bg-transparent"/>
                    <input type="text"  placeholder="Email*" className="border border-[#bcbaba] rounded-sm pt-1 pb-1 pl-2 mb-5 bg-transparent"/>
                </div>
                <div className="flex flex-col">
                <input type="text" placeholder="Subject*" className="border border-[#bcbaba] rounded-sm pt-1 pb-1 pl-2 mb-5 bg-transparent flex flex-col"/>
                
                <textarea className="resize-vertical  border border-[#bcbaba] rounded-sm pt-1 pb-1 pl-2 mb-5 bg-transparent" placeholder="Your Message*"  ></textarea>
                </div>
                <h3 className="m-2 hover:text-[20px]">SEND MESSAGE &#8594;</h3>
            
            </div>

            <div className="flex flex-row justify-between items-center">

                <div className="mb-10 flex flex-col items-start justify-center">
                    <div className="flex border rounded-lg p-2 mb-5">
                        <img src={process.env.PUBLIC_URL + '/images/placeholder.png'} alt="" className=" w-11 " />
                    </div>
                    <h2>Visit My Studio</h2>
                    <h3>
                    Warnwe Park Streetperrine,<br/>
                    FL 33157 New York City
                    </h3>
                </div>

                <div className="mb-10 flex flex-col items-start justify-center">
                    <div className="flex border rounded-lg p-2 mb-5">
                        <img src={process.env.PUBLIC_URL + '/images/phone-call.png'} alt="" className="flex w-11 " />
                    </div>
                    <h2>
                    Mail
                    </h2>
                    <h3>info@domainname.com<br/>
                    Mon to Fri (10 am - 8 pm)</h3>
                </div>

                <div className="mb-10 flex flex-col items-start justify-center">
                    <div className="flex border rounded-lg p-2 mb-5">
                        <img src={process.env.PUBLIC_URL + '/images/email (3).png'} alt="" className=" w-11 " />
                    </div>
                    <h2>Phone</h2>
                    <h3>Phone: +01 123 654 8096<br/>
                    Fax: +04 123 654 8096</h3>
                </div>
            </div>
        </div>

        {/* footer------------------------------------------------------------- */}
        <div className="container-fluid pr-[15px] pl-[15px] text-center">
            <div className="resumeSocial flex justify-around mt-3 mb-5w mb-5">
                <img src={process.env.PUBLIC_URL + '/images/facebook (2).png'} alt="" className="rounded-full w-6 h-6 hover:bg-gradient-to-r from-red-500 to-blue-500" />
                <img src={process.env.PUBLIC_URL + '/images/instagram.png'} alt="" className="rounded-full w-6 h-6 hover:bg-gradient-to-r from-red-500 to-blue-500" />
                <img src={process.env.PUBLIC_URL + '/images/login.png'} alt="" className="rounded-full w-6 h-6 hover:bg-gradient-to-r from-red-500 to-blue-500" />
                <img src={process.env.PUBLIC_URL + '/images/pinterest.png'} alt="" className="rounded-full w-6 h-6 hover:bg-gradient-to-r from-red-500 to-blue-500" />
                <img src={process.env.PUBLIC_URL + '/images/twitter.png'} alt="" className="rounded-full w-6 h-6 hover:bg-gradient-to-r from-red-500 to-blue-500" />
            </div>
            <p className="mb-3">&#169; 2023 copyright all right reserved</p>
        </div>





        </div>
        {/* mainContainer */}
        </div> 

      


           

         
        </>
    )
}
export default Header;