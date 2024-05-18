import logo from '../assets/logo.png'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    const linkClass = ({isActive}) => {
        return isActive 
        ? 'bg-black text-white hover:bg-gray-800 rounded-md px-3 py-2' 
        : 'text-white hover:bg-gray-800 rounded-md px-3 py-2'
    }

  return (
    <nav className='bg-indigo-700'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-20'>
                <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                    <NavLink to="/" className='flex flex-shrink-0 items-center mr-4'>
                        <img src={logo} alt="logo" className='w-10 h-auto'/>
                        <span className='hidden md:block text-2xl font-bold ml-2 text-white'>React Jobs</span>
                    </NavLink>
                </div>

                <div className='md:ml-auto'>
                    <NavLink to="/" className={linkClass}>
                        Home
                    </ NavLink>
                    <NavLink to="/jobs" className={linkClass}>
                        Jobs
                    </ NavLink>
                    <NavLink to="/add-job" className={linkClass}>
                        Add Job
                    </ NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar