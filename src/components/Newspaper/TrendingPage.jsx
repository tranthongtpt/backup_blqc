import about1 from "../../data/about1.svg"
import about2 from "../../data/about2.svg"
import about3 from "../../data/about3.svg"
import { FiChevronRight } from "react-icons/fi";
import ContentOne from "./ContentOne/ContentOne";
import Popular from "./Popular/Popular";

function TrendingPage() {
    return (
        <div className="pt-[133px]">
            <div id="blog" className=" px-4 xl:px-0 py-12">
                <div className="mx-auto container">
                   <ContentOne/>
                </div>
            </div>
            <div id="blog" className="bg-gray-100 px-4 xl:px-0 py-12">
                <div className="mx-auto container">
                    
                </div>
            </div>
            <div id="blog" className="bg-white px-4 xl:px-0 py-12">
                <section className="px-5 py-10 dark:bg-gray-800 dark:text-gray-100">
                    <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
                        <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
                            <div className="flex flex-col space-y-8 md:space-y-12">
                                <div className="flex flex-col space-y-2">
                                    <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                        <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                        <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                                    </h3>
                                    <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Donec sed elit quis odio mollis dignissim eget et nulla.</a>
                                    <p className="text-xs dark:text-gray-400">47 minutes ago by
                                        <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Leroy Jenkins</a>
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                        <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                        <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                                    </h3>
                                    <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Ut fermentum nunc quis ipsum laoreet condimentum.</a>
                                    <p className="text-xs dark:text-gray-400">2 hours ago by
                                        <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Leroy Jenkins</a>
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                        <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                        <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                                    </h3>
                                    <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Nunc nec ipsum lobortis, pulvinar neque sed.</a>
                                    <p className="text-xs dark:text-gray-400">4 hours ago by
                                        <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Leroy Jenkins</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col w-full space-y-2">
                                <div className="flex w-full h-1 bg-opacity-10 dark:bg-violet-400">
                                    <div className="w-1/2 h-full dark:bg-violet-400"></div>
                                </div>
                                <a rel="noopener noreferrer" href="#" className="flex items-center justify-between w-full">
                                    <span className="text-xs font-bold tracking-wider uppercase">See more exclusives</span>
                                    <svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent dark:text-violet-400">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover dark:bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96 bg-[url('https://source.unsplash.com/random/239x319')]">
                            <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 dark:border-violet-400 dark:text-gray-100">paris, france</span>
                            <a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group dark:via-transparent flex-grow-1 bg-gradient-to-b dark:from-gray-900 dark:to-gray-900">
                                <span className="flex items-center mb-4 space-x-2 dark:text-violet-400">
                                    <span className="relative flex-shrink-0 w-2 h-2 rounded-full dark:bg-violet-400">
                                        <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping dark:bg-violet-400"></span>
                                    </span>
                                    <span className="text-sm font-bold">Live</span>
                                </span>
                                <h1 rel="noopener noreferrer" href="#" className="font-serif text-2xl font-semibold group-hover:underline dark:text-gray-100">Morbi mattis justo est, ac consectetur dui eleifend vitae. Donec venenatis?</h1>
                            </a>
                        </div>
                        <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
                            <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
                                <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-400">Latest</button>
                                <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-transparent dark:text-gray-400">Popular</button>
                            </div>
                            <div className="flex flex-col divide-y divide-gray-700">
                                <div className="flex px-1 py-4">
                                    <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/244x324" />
                                    <div className="flex flex-col flex-grow">
                                        <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Aenean ac tristique lorem, ut mollis dui.</a>
                                        <p className="mt-auto text-xs dark:text-gray-400">5 minutes ago
                                            <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Politics</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex px-1 py-4">
                                    <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/245x325" />
                                    <div className="flex flex-col flex-grow">
                                        <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Nulla consectetur efficitur.</a>
                                        <p className="mt-auto text-xs dark:text-gray-400">14 minutes ago
                                            <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Sports</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex px-1 py-4">
                                    <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/246x326" />
                                    <div className="flex flex-col flex-grow">
                                        <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Vitae semper augue purus tincidunt libero.</a>
                                        <p className="mt-auto text-xs dark:text-gray-400">22 minutes ago
                                            <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">World</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex px-1 py-4">
                                    <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/247x327" />
                                    <div className="flex flex-col flex-grow">
                                        <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Suspendisse potenti.</a>
                                        <p className="mt-auto text-xs dark:text-gray-400">37 minutes ago
                                            <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Business</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div id="blog" class="bg-gray-100 px-4 xl:px-0 py-12">
                <div class="mx-auto container">
                    <div class="flex wrap">
                        <div class="w-full lg:w-1/2">
                            <div class="pb-8 section-title">
                                <div class="w-40 h-1 mb-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                                <h3 class="text-3xl pt-2 font-bold"><span className="font-normal">Our Recent</span> Blog Posts</h3>
                            </div>
                        </div>
                    </div>
                    <div class="justify-center flex wrap">
                        <div class="w-full md:w-2/3 lg:w-1/3">
                            <div class="mx-4 mt-10 single-blog wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                <div class="mb-5 overflow-hidden blog-image rounded-xl">
                                    <img class="w-full" src={about2} alt="blog" />
                                </div>
                                <div class="blog-content">
                                    <ul class="flex mb-5 meta">
                                        <li>Posted By: <a href="javascript:void(0)">Admin</a></li>
                                        <li class="ml-12">03 June, 2023</li>
                                    </ul>
                                    <p class="mb-6 text-2xl leading-snug text-gray-900">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</p>
                                    <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-400 text-red-400" href="/docs">
                                        <span>Learn More</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-2/3 lg:w-1/3">
                            <div class="mx-4 mt-10 single-blog wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div class="mb-5 overflow-hidden blog-image rounded-xl">
                                    <img class="w-full" src={about2} alt="blog" />
                                </div>
                                <div class="blog-content">
                                    <ul class="flex mb-5 meta">
                                        <li>Posted By: <a href="javascript:void(0)">Admin</a></li>
                                        <li class="ml-12">03 June, 2023</li>
                                    </ul>
                                    <p class="mb-6 text-2xl leading-snug text-gray-900">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</p>
                                    <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-400 text-red-400" href="/docs">
                                        <span>Learn More</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-2/3 lg:w-1/3">
                            <div class="mx-4 mt-10 single-blog wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                                <div class="mb-5 overflow-hidden blog-image rounded-xl">
                                    <img class="w-full" src={about3} alt="blog" />
                                </div>
                                <div class="blog-content">
                                    <ul class="flex mb-5 meta">
                                        <li>Posted By: <a href="javascript:void(0)">Admin</a></li>
                                        <li class="ml-12">03 June, 2023</li>
                                    </ul>
                                    <p class="mb-6 text-2xl leading-snug text-gray-900">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</p>
                                    <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-400 text-red-400" href="/">
                                        <span>Learn More</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="blog" class="bg-[#06b6d4] px-4 xl:px-0 py-12">
                <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
                    <div className="flex flex-col justify-between">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Đóng góp ý kiến</h2>
                            <div className="dark:text-gray-400">Lắng nghe phản hồi từ mọi người</div>
                        </div>
                        <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                    </div>
                    <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div>
                            <label for="name" className="text-sm">Tên</label>
                            <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
                        </div>
                        <div>
                            <label for="email" className="text-sm">Email</label>
                            <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-800" />
                        </div>
                        <div>
                            <label for="message" className="text-sm">Nội dung</label>
                            <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
                        </div>
                        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-white">Phản hồi</button>
                    </form>
                </div>
            </div>
            <div id="blog" class="bg-gray-100 px-4 xl:px-0">
                <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                        <div className="lg:w-1/3">
                            <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900">
                                        <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                                    </svg>
                                </div>
                                <span className="self-center text-2xl font-semibold">Brand name</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                            <div className="space-y-3">
                                <h3 className="tracking-wide uppercase dark:text-gray-50">Product</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Features</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Integrations</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Pricing</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">FAQ</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="tracking-wide uppercase dark:text-gray-50">Company</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Privacy</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Terms of Service</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="uppercase dark:text-gray-50">Developers</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Public API</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Documentation</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Guides</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="uppercase dark:text-gray-50">Social media</div>
                                <div className="flex justify-start space-x-3">
                                    <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                            <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                                        </svg>
                                    </a>
                                    <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                                            <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                                        </svg>
                                    </a>
                                    <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
                                            <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 text-sm text-center dark:text-gray-400">© 2022 Company Co. All rights reserved.</div>
                </footer>
            </div>
        </div>
    );
}

export default TrendingPage;