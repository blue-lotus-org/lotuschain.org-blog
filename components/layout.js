import Link from 'next/link';
const BLOG_TITLE = "Blue Lotus BLOG";
export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <nav className="navbar navbar-expand-lg shadow-xl py-2 bg-gray-50 relative flex items-center w-full justify-between mb-8">
          <div className="px-6">    
            <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentX">
            <ul className="navbar-nav mr-auto flex flex-row">
              <li className="nav-item">
                <Link href='/'>
                  <a><h3 className="block pr-2 lg:px-2 py-2 text-black hover:text-gray-700 mr-5 text-xl border border-gray-300 rounded-lg font-bold">Blue Lotus</h3></a>
                </Link>
              </li> 
              <li className="nav-item">
                <Link href='https://www.linkedin.com/company/bluelotus-corp'>
                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600">@Linkedin</a>
                </Link>
              </li>       
              {/* change this address */}  
              {/* 
              <li className="nav-item">
                <Link href='/'>
                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600">Github</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/'> 
                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600">Linkedin</a>
                </Link>
              </li>
              */}
            </ul>
            </div>	
          </div>
        </nav>
      <main className='container mx-auto flex-1 w-full my-4'>{children}</main>
      <footer className='text-center lg:text-left mt-8 bg-gradient-to-b from-gray-200 to-white'>
        <div className='text-black text-center p-4'>&reg; 2023 &nbsp;|&nbsp; &copy; {BLOG_TITLE}</div> 
      </footer>
    </div>
  );
}
