import {FaGoogle, FaGithub, FaFacebook, FaTwitter , FaInstagram} from 
"react-icons/fa";
import qZone1 from '../../../assets/assets/qZone1.png';
import qZone2 from '../../../assets/assets/qZone2.png';
import qZone3 from '../../../assets/assets/qZone3.png';
import bgPick from '../../../assets/assets/bg.png'

const RightSideNav = () => {
      return (
            <div className="">
                  <h1 className="text-3xl font-bold my-5 text-zinc-700">Login With</h1>
                 <div>
                 <button className="btn btn-outline w-full text-blue-600 text-xl border-blue-600 mb-3">
                  <FaGoogle />
                     Login with Google
               </button>
                 </div>
                 <div>
                 <button  className="btn btn-outline w-full text-black-600 text-xl border-black mb-3">
                 <FaGithub />
                     Login with Github
               </button>
                 </div>
{/* ................................................... */}
                 <div>
                        <h1  className="text-3xl font-bold my-5 text-zinc-700">Find Us On</h1>

                        <div>
                 <a className="flex items-center border-2 p-4 rounded-t-lg  text-lg border-zinc-300 text-black ">
                 <FaFacebook className="text-blue-900 mr-2 "></FaFacebook>
                  Facebook
               </a>
                 </div>

                 <div>
                 <a className="flex items-center border-2 p-4 text-lg  border-zinc-300 text-black"><FaTwitter  className="text-blue-500 mr-2"></FaTwitter>
                  Twitter
               </a>
                 </div>

                 <div>
                 <a className="flex items-center border-2 p-4 rounded-b-lg  text-lg border-zinc-300 text-black">
                 <FaInstagram 
                  className="text-pink-500 mr-2"></FaInstagram >

                 Instagram
               </a>
                 </div>

                  </div>
                  {/*   Q-Zone */}
                  <div>
                        <h1  className="text-3xl font-bold my-5 text-zinc-700">Q-Zone</h1>

                        <div  className="bg-zinc-100" >
                              
                        <img src={qZone1} alt="" />
                        <img src={qZone2} alt="" />
                        <img src={qZone3} alt="" />
                        <img src={bgPick} alt="" />

                        </div>

                  </div>
            </div>
      );
};

export default RightSideNav;