import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../../../assets/assets/1.png';
import img2 from '../../../assets/assets/2.png';
import img3 from '../../../assets/assets/3.png';
import { LuCalendarDays } from "react-icons/lu";
import moment from "moment";

const LeftSideNav = () =>{
      const [categories,setCategories] = useState([]);

      useEffect(() =>{
            fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
      },[])
      return (
            <div className="space-y-7" >

                  <h1  className="text-3xl font-bold my-5 text-zinc-700"> All Category</h1>
                   <h1 className="text-xl text-center border border-zinc-100 bg-zinc-200 rounded-sm p-4 font-bold my-5 text-zinc-700">National News</h1>
                  {
                        categories.map(category =><Link className="block ml-18 text-xl text-zinc-500 font-semibold " key={category.id}
                         to={`/category/${category.id}`}
                              > {category.name} </Link>)
                  }

                  <div>
<img src={img1} alt="" />
<p  className="text-xl
 mt-4 font-semibold text-zinc-600" >Bayern Slams Authorities Over Flight Delay to Club World Cup </p>
 <div className=" flex justify-between items-center my-4">
 <p className="font-semibold text-[11px] text-zinc-800">Sports</p>
<p className="flex items-center "><LuCalendarDays className=" text-zinc-400 font-semibold text-xl" ></LuCalendarDays>
<p className="ml-2 text-zinc-400 font-semibold">{moment().format('MMMM D, YYYY')}</p>
 </p>
 </div>
                  </div>
                  <div>
<img src={img2} alt="" />
<p className="text-xl mt-4 font-semibold text-zinc-600" >Bayern Slams Authorities Over Flight Delay to Club World Cup </p>
                  </div>
                  <div className=" flex justify-between items-center my-4">
 <p className="font-semibold text-[11px] text-zinc-800">Sports</p>
<p className="flex items-center "><LuCalendarDays className=" text-zinc-400 font-semibold text-xl" ></LuCalendarDays>
<p className="ml-2 text-zinc-400 font-semibold">{moment().format('MMMM D, YYYY')}</p>
 </p>
 </div>
                  <div>
<img src={img3} alt="" />
<p className="text-xl
 mt-4 font-semibold text-zinc-600" >Bayern Slams Authorities Over Flight Delay to Club World Cup </p>
                  </div>
                  <div className=" flex justify-between items-center my-4">
 <p className="font-semibold text-[11px] text-zinc-800">Sports</p>
<p className="flex items-center "><LuCalendarDays className=" text-zinc-400 font-semibold text-xl" ></LuCalendarDays>
<p className="ml-2 text-zinc-400 font-semibold">{moment().format('MMMM D, YYYY')}</p>
 </p>
 </div>
                 
            </div>
      );
};

export default LeftSideNav;