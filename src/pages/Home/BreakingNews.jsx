import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
      return (
            <div className="my-4 flex items-center ">
                 <button className="btn btn-secondary">Breaking News</button> <p><Marquee pauseOnHover="true" speed={70} >
  <Link to={'/'} className="ml-5" >I can be a React component, multiple React components, or just some text........</Link>
  <Link to={'/'}  className="ml-5" >I can be a React component, multiple React components, or just some text........</Link>
  <Link to={'/'}  className="ml-5" >I can be a React component, multiple React components, or just some text........</Link>
  <Link to={'/'}  className="ml-5" >I can be a React component, multiple React components, or just some text........</Link>
</Marquee></p>
            </div>
      );
};

export default BreakingNews;