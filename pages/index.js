import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// change blog name and description 
const BLOG_TITLE = "LotusChain BLOG";
const BLOG_DESCRIPTION = "security first";

// don`t touch`
export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}


export default function Home({ posts }) {
  return (
    
    
    <div className='flex justify-center flex justify-between'> 
      
      {/* change "info" from line "40" to line "79" */}
        <section className="mb-32 grid grid-cols lg:w-1/2 sm:w-full px-4 py-4 prose">

              <div className="mb-12 lg:mb-0">
                <div className="block rounded-lg shadow-lg px-6 py-12 lg:py-6 xl:py-12 md:px-12 lg:-mr-14 bg-blue-800">
                <h2 className="text-2xl font-bold mb-3 text-black ">
                  Blue Lotus
                </h2>
                <p className="text-orange-100 mb-8 pl-4 capitalize">
                  lotuschain.org
                </p>
                <p className='text-orange-100 mb-8 pl-4 text-sm capitalize'>
                  
                </p>
                <p className='text-orange-100 mb-8 pl-4 text-sm'>
                  
                </p>

                <hr />

                <h3 className="text-2xl font-bold mb-3 mt-8"></h3>
                <h5 className="text-lg text-orange-600 font-bold mb-4 lg:mb-4 xl:mb-4"></h5>
                <p className="text-orange-100 mb-6 pl-4">
                   
                </p>

                <p className="font-bold mb-4 text-white"></p>
                <p className="text-orange-500 mb-6 pl-4">
                  
                </p>

                </div>
              </div>

          </section>
 
          <section className="">
            <div class="md:masonry-2-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit">
              <h2 className='bg-orange-600 text-white text-center font-bold text-3xl w-full rounded border border-orange-500 shadow-2xl p-8'>
                {BLOG_TITLE}
                <p className='text-sm font-medium'>{BLOG_DESCRIPTION}</p>
              </h2>
        
              {posts.map(({ slug, frontmatter }) => (
                  <div key={slug} className='break-inside p-8 my-6 bg-gray-100 rounded-lg shadow-xl hover:shadow-2xl border border-gray-300'>
                      <Head>
                        <title>{BLOG_TITLE}</title>   
                        <link rel="icon" href="/favicon.ico" />
                        <meta name="robots" content="all" />
                        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                        <meta name="google" content="notranslate" key="notranslate" />
                        <meta name="description" content= "Auther: mosi-sol @ github. Solidity blog: web3, blockchain, solidity, evm, programming." />
                      </Head>
                      
                      <div>
                        <Link href={`/post/${slug}`}><a>
                          <h3 className='font-bold hover:text-blue-500 text-2xl'>{frontmatter.title} </h3>
                        </a></Link> 
                        <p className='text-gray-500'>{frontmatter.metaDesc}</p>
                        <div className='flex justify-between'>
                          <small className='text-orange-700'>{frontmatter.article}</small>
                          <Link href={`/post/${slug}`}><a>
                            <small className='font-light hover:text-blue-500 text-blue-800 text-sm'>Reade more </small>
                          </a></Link> 
                        </div>
                      </div> 

                  </div> 
                ))}

              </div>
            </section>


    </div>
    
  );
}
