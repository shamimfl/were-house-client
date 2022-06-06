import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
// import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth)
    const navigate =useNavigate()
    const handleSingout = () => {
        signOut(auth)
        navigate('/')
    }
    return (
        <div  className='z-50 bg-black sticky top-0 mb-0'>
            <nav className="navbar navbar-expand-lg p-3">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white font-serif" to='/'>Electonics Were House</Link>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    
                        <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg></span>

                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white navbar-brand font-serif" aria-current="page" to='/'>Home</Link>
                            </li>
                        </ul>
                        <div className='md:flex items-center'>
                               {
                                   user ?  <h1 className="nav-link active text-white font-serif" aria-current="page" to='/allinventory'>{user.displayName}</h1>: ''
                               }
                               {
                                   user ?  <Link className="nav-link active text-white font-serif" aria-current="page" to='/allinventory'>Inventory</Link>: ''
                               }
                              
                            {
                                user ? <Link className='md:mr-10  text-white font-serif  block' to='/myitem'>My-item</Link> : ''
                            }
                            {
                                user ? <Link className='md:mr-10  text-white font-serif  block' to='/additem'>Add-Item</Link> : ''
                            }
                            <Link className='md:mr-10  text-white font-serif  block' to='/blogs'>Blogs</Link> 

                            {
                                user ? <button onClick={handleSingout} className='md:mr-10 font-bold  mt-2  text-black font-mono  flex justify-between bg-white px-2 rounded-md'>
                                    <span>logOut</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </button> :
                                    <Link className='md:mr-10 font-bold flex justify-between mt-2  text-black font-serif   bg-white px-2 rounded-md' to='/login'>
                                        <span>Login</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg>
                                    </Link>
                            }
                            <Link className='md:mr-10 font-bold  mt-2  text-black font-serif  flex justify-between bg-white px-2 rounded-md' to='/singup'>
                                <span>SingUp</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;