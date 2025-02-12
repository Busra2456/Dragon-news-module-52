import moment from 'moment';
import logo from '../../../assets/assets/logo.png'
const Header = () => {
      return (
            <div className='text-center'>
                  <img className='mx-auto my-4' src={logo} alt="" />
                  <p className='text-2xl text-zinc-800'>Journalism Without Fear or Favour</p>
                  <p className='text-xl my-2'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
      );
};

export default Header;