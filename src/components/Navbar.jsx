import React, { useState, useEffect } from "react";
import Case from "./Case";
import NavLinks from "./NavLinks";

import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [url, setUrl] = useState(null);
    const location = useLocation();
    const width = window.innerWidth;
    useEffect(() => {
        setUrl(location.pathname);
        console.log(url, width);
    }, [location]);

    //     const location = useLocation();
    //   const locations = location.pathname;
    //   console.log(location.pathname);
    //   const getNavLinkClass = (path) => {
    //     return props.location.pathname === path ? " text-red-400" : "";
    //   };

    return (
        // <div className="bg-blue-600 w-screen py-2">
        //     <Case>
        //         <div className="flex items-center">
        //             <Link
        //                 className="mr-2 text-sm font-semibold uppercase text-white"
        //                 to="/"
        //             >
        //                 React Starter
        //             </Link>
        //             <NavLink href="/">Home</NavLink>
        //             <NavLink href="/about">About</NavLink>
        //             <NavLink href="/gallery">Gallery</NavLink>
        //         </div>
        //     </Case>
        // </div>

        <nav className="relative sticky top-0 z-10 w-full w-screen bg-white bg-opacity-20 shadow backdrop-blur-sm backdrop-filter ">
            {/* ==========SIDE NAV */}
            {width < 1024 ? null : (
                <div className="absolute h-screen bg-primary px-3 sm:hidden lg:block">
                    <div className="mt-10">
                        <a href="/" className="grid place-items-center">
                            <h2 className="text-2xl font-bold text-primary  hover:text-white">
                                {" "}
                                <NavLinks href="/"><svg width="64" height="71" viewBox="0 0 76 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.1621 30.0488H4.64425C4.38906 30.0488 3.72554 30.1254 3.113 30.4316C2.34733 30.8144 1.58194 31.7714 1.19915 32.3456C0.81636 32.9197 1.00775 35.5993 1.58194 36.7476C2.04129 37.6663 3.81488 38.2788 4.64425 38.4702H23.0181C16.7659 44.7862 4.18491 57.4948 3.87867 57.8011C3.49589 58.1838 3.49589 59.715 3.49589 60.0978C3.49589 60.4806 4.26146 62.0117 4.64425 62.3945C5.02704 62.7773 5.40983 63.1601 6.94099 63.7343C8.16592 64.1936 10.0033 63.0325 10.7689 62.3945L28.76 44.7862V63.1601C28.76 63.9257 30.6739 65.6482 31.0567 65.6482C31.4395 65.6482 32.2051 66.4138 34.6932 65.6482C36.6837 65.0358 36.9262 63.2239 36.7986 62.3945C36.8624 53.3352 36.9517 34.7954 36.7986 33.1111C36.6454 31.4269 34.3104 30.3678 33.1621 30.0488Z" fill="#4BA49F" stroke="#48A6A5"/>
<path d="M19.3814 27.5605L9.23746 17.0338C8.98227 16.7148 8.39533 15.7706 8.0891 14.5456C7.78287 13.3207 8.72708 12.1213 9.23746 11.6747C9.81165 11.1643 11.2662 10.1436 12.4912 10.1436C13.7161 10.1436 14.9155 10.7815 15.3621 11.1005L25.8888 21.8186C26.144 23.286 26.0419 26.4887 23.5921 27.5605C21.1422 28.6323 19.7642 28.0071 19.3814 27.5605Z" fill="#FFFF01"/>
<path d="M28.2785 20.5677L27.651 5.96236C27.6711 5.55434 27.8568 4.45818 28.4387 3.33764C29.0206 2.21709 30.5224 1.9439 31.2006 1.94737C31.9688 1.94529 33.7347 2.14398 34.6524 2.9553C35.5701 3.76663 36.0461 5.03902 36.1694 5.57381L36.957 20.5761C36.1762 21.8445 33.9785 24.1763 31.4332 23.3567C28.8878 22.537 28.2695 21.1558 28.2785 20.5677Z" fill="#FFFF01"/>
<path d="M39.6734 22.3328L49.3188 11.3476C49.6154 11.0667 50.5075 10.4032 51.7027 9.99599C52.8978 9.58882 54.1717 10.4299 54.6592 10.9013C55.2157 11.431 56.354 12.7955 56.456 14.0162C56.558 15.2369 56.0221 16.4852 55.7414 16.9568L45.9372 28.3395C44.4961 28.716 41.2961 28.881 40.024 26.5289C38.7519 24.1768 39.2602 22.7515 39.6734 22.3328Z" fill="#FFFF01"/>
<path d="M47.9127 30.3625L62.5153 29.6751C62.9234 29.6935 64.0204 29.8746 65.1433 30.4519C66.2662 31.0292 66.5456 32.5299 66.5449 33.2081C66.5501 33.9763 66.3587 35.743 65.5511 36.664C64.7436 37.5851 63.4731 38.0663 62.9389 38.1918L47.9399 39.0409C46.6684 38.2654 44.3275 36.0773 45.1367 33.5286C45.9459 30.9799 47.3245 30.3559 47.9127 30.3625Z" fill="#FFFF01"/>
<path d="M45.148 41.855L55.9118 51.747C56.1858 52.05 56.829 52.9568 57.2089 54.1609C57.5889 55.365 56.7192 56.6195 56.2368 57.0962C55.6947 57.6405 54.3047 58.7476 53.082 58.8219C51.8593 58.8962 50.6234 58.3322 50.1583 58.0408L39.0009 47.981C38.6571 46.5318 38.5647 43.3289 40.9451 42.1104C43.3254 40.892 44.7388 41.4325 45.148 41.855Z" fill="#FFFF01"/>
<path d="M1.504 79V77.992L2.792 77.628L2.54 78.02V70.18L2.89 70.6L1.504 70.222V69.214L4.626 69.144H5.984C7.104 69.144 7.94867 69.3773 8.518 69.844C9.08733 70.3107 9.372 70.9827 9.372 71.86C9.372 72.644 9.12933 73.2927 8.644 73.806C8.168 74.3193 7.41667 74.632 6.39 74.744L6.404 74.52C6.768 74.5293 7.06667 74.5853 7.3 74.688C7.53333 74.7907 7.72467 74.9353 7.874 75.122C8.03267 75.2993 8.17733 75.514 8.308 75.766L9.428 77.922L8.854 77.572L10.142 77.992V79H7.846L6.586 76.298C6.418 75.9433 6.27333 75.6727 6.152 75.486C6.03067 75.29 5.88133 75.1593 5.704 75.094C5.52667 75.0193 5.27 74.9867 4.934 74.996H4.206L4.542 74.716V78.02L4.276 77.614L5.69 77.992V79H1.504ZM4.542 74.1L4.206 73.61H5.368C6.02133 73.61 6.51133 73.4747 6.838 73.204C7.16467 72.9333 7.328 72.532 7.328 72C7.328 71.552 7.19733 71.202 6.936 70.95C6.67467 70.698 6.27333 70.572 5.732 70.572H4.206L4.542 70.264V74.1ZM13.9281 79.168C13.2468 79.168 12.6495 79.028 12.1361 78.748C11.6228 78.4587 11.2215 78.034 10.9321 77.474C10.6521 76.9047 10.5121 76.214 10.5121 75.402C10.5121 74.562 10.6615 73.8433 10.9601 73.246C11.2681 72.6393 11.6975 72.1727 12.2481 71.846C12.7988 71.5193 13.4475 71.356 14.1941 71.356C14.9221 71.356 15.5148 71.5007 15.9721 71.79C16.4295 72.0793 16.7655 72.476 16.9801 72.98C17.1948 73.4747 17.3021 74.0347 17.3021 74.66C17.3021 74.8187 17.2928 74.9773 17.2741 75.136C17.2648 75.2947 17.2461 75.4627 17.2181 75.64H12.0941V74.478H15.5381L15.2861 74.66C15.2955 74.2867 15.2581 73.96 15.1741 73.68C15.0995 73.3907 14.9688 73.1667 14.7821 73.008C14.6048 72.8493 14.3575 72.77 14.0401 72.77C13.6761 72.77 13.3821 72.8773 13.1581 73.092C12.9341 73.2973 12.7708 73.5773 12.6681 73.932C12.5748 74.2867 12.5281 74.6833 12.5281 75.122C12.5281 75.6167 12.5888 76.06 12.7101 76.452C12.8315 76.844 13.0275 77.152 13.2981 77.376C13.5781 77.6 13.9421 77.712 14.3901 77.712C14.7075 77.712 15.0481 77.656 15.4121 77.544C15.7855 77.4227 16.1728 77.2453 16.5741 77.012L17.2321 78.062C16.6908 78.4353 16.1355 78.7153 15.5661 78.902C15.0061 79.0793 14.4601 79.168 13.9281 79.168ZM18.0417 82.22V81.212L19.2317 80.82L18.9797 81.156V72.658L19.2037 72.924L18.0417 72.574V71.566L20.5057 71.454L20.7297 72.672L20.5057 72.56C20.9444 72.168 21.3691 71.8693 21.7797 71.664C22.1997 71.4587 22.6337 71.356 23.0817 71.356C23.6231 71.356 24.0991 71.5007 24.5097 71.79C24.9204 72.07 25.2424 72.49 25.4757 73.05C25.7184 73.6007 25.8397 74.2773 25.8397 75.08C25.8397 75.9853 25.6857 76.7413 25.3777 77.348C25.0697 77.9547 24.6357 78.412 24.0757 78.72C23.5251 79.0187 22.8811 79.168 22.1437 79.168C21.9197 79.168 21.6864 79.1493 21.4437 79.112C21.2011 79.084 20.9491 79.042 20.6877 78.986L20.9397 78.762V81.156L20.7297 80.862L22.0317 81.212V82.22H18.0417ZM21.8917 77.782C22.5544 77.782 23.0351 77.558 23.3337 77.11C23.6417 76.662 23.7957 76.0507 23.7957 75.276C23.7957 74.7627 23.7351 74.324 23.6137 73.96C23.4924 73.5867 23.3244 73.302 23.1097 73.106C22.8951 72.9007 22.6291 72.798 22.3117 72.798C22.0691 72.798 21.8124 72.8633 21.5417 72.994C21.2711 73.1247 20.9911 73.3253 20.7017 73.596L20.9397 73.078V77.964L20.7017 77.586C21.1404 77.7167 21.5371 77.782 21.8917 77.782ZM30.4233 71.356C31.5246 71.356 32.3833 71.6827 32.9993 72.336C33.6153 72.9893 33.9233 73.918 33.9233 75.122C33.9233 75.962 33.774 76.6853 33.4753 77.292C33.1766 77.8893 32.7473 78.3513 32.1873 78.678C31.6273 79.0047 30.9553 79.168 30.1713 79.168C29.07 79.168 28.216 78.8413 27.6093 78.188C27.012 77.5347 26.7133 76.606 26.7133 75.402C26.7133 74.562 26.858 73.8433 27.1473 73.246C27.446 72.6393 27.8706 72.1727 28.4213 71.846C28.972 71.5193 29.6393 71.356 30.4233 71.356ZM30.3253 72.756C29.7933 72.756 29.3966 72.966 29.1353 73.386C28.874 73.7967 28.7433 74.436 28.7433 75.304C28.7433 76.172 28.8693 76.802 29.1213 77.194C29.3733 77.5767 29.756 77.768 30.2693 77.768C30.6426 77.768 30.946 77.6747 31.1793 77.488C31.4126 77.3013 31.59 77.0167 31.7113 76.634C31.8326 76.2513 31.8933 75.78 31.8933 75.22C31.8933 74.3707 31.7626 73.75 31.5013 73.358C31.24 72.9567 30.848 72.756 30.3253 72.756ZM34.7654 79V77.992L35.8994 77.67L35.7034 77.964V72.588L35.9274 72.924L34.7654 72.574V71.566L37.2294 71.454L37.4814 72.784L37.2294 72.728C37.6494 72.2893 38.0647 71.9533 38.4754 71.72C38.886 71.4773 39.3247 71.356 39.7914 71.356C40.09 71.356 40.4074 71.4027 40.7434 71.496L40.6174 74.086H39.4834L39.2734 72.574L39.4554 72.952C39.3994 72.9333 39.3387 72.9193 39.2734 72.91C39.2174 72.9007 39.1614 72.896 39.1054 72.896C38.816 72.896 38.5267 72.9847 38.2374 73.162C37.9574 73.3393 37.7147 73.568 37.5094 73.848L37.6634 73.316V77.964L37.4394 77.67L38.8254 77.992V79H34.7654ZM44.0715 79.168C43.4275 79.168 42.9375 78.9767 42.6015 78.594C42.2749 78.202 42.1115 77.6233 42.1115 76.858V72.574L42.3635 72.826H41.0195V71.776L42.3915 71.454L42.1115 71.79V69.886L44.0855 69.536V71.79L43.8755 71.524H46.0035L45.9755 72.826H43.8755L44.0855 72.574V76.592C44.0855 76.9933 44.1509 77.2827 44.2815 77.46C44.4122 77.6373 44.6082 77.726 44.8695 77.726C45.0189 77.726 45.1822 77.7027 45.3595 77.656C45.5462 77.6 45.7469 77.53 45.9615 77.446L46.3255 78.524C45.5415 78.9533 44.7902 79.168 44.0715 79.168ZM58.2286 78.062L57.7106 77.6L58.9146 77.992V79H54.8966V77.992L56.1146 77.642L55.9186 77.922L55.3586 76.102L55.6666 76.354H51.9706L52.2086 76.116L51.6066 77.894L51.5506 77.684L52.6706 77.992V79H49.0166V77.992L50.1786 77.628L49.7306 78.02L53.0346 69.172L55.0926 69.116L58.2286 78.062ZM52.4746 75.234L52.3346 74.968H55.3446L55.1486 75.276L53.6926 70.222H54.1546L52.4746 75.234ZM59.0847 82.22V81.212L60.2747 80.82L60.0227 81.156V72.658L60.2467 72.924L59.0847 72.574V71.566L61.5487 71.454L61.7727 72.672L61.5487 72.56C61.9874 72.168 62.412 71.8693 62.8227 71.664C63.2427 71.4587 63.6767 71.356 64.1247 71.356C64.666 71.356 65.142 71.5007 65.5527 71.79C65.9634 72.07 66.2854 72.49 66.5187 73.05C66.7614 73.6007 66.8827 74.2773 66.8827 75.08C66.8827 75.9853 66.7287 76.7413 66.4207 77.348C66.1127 77.9547 65.6787 78.412 65.1187 78.72C64.568 79.0187 63.924 79.168 63.1867 79.168C62.9627 79.168 62.7294 79.1493 62.4867 79.112C62.244 79.084 61.992 79.042 61.7307 78.986L61.9827 78.762V81.156L61.7727 80.862L63.0747 81.212V82.22H59.0847ZM62.9347 77.782C63.5974 77.782 64.078 77.558 64.3767 77.11C64.6847 76.662 64.8387 76.0507 64.8387 75.276C64.8387 74.7627 64.778 74.324 64.6567 73.96C64.5354 73.5867 64.3674 73.302 64.1527 73.106C63.938 72.9007 63.672 72.798 63.3547 72.798C63.112 72.798 62.8554 72.8633 62.5847 72.994C62.314 73.1247 62.034 73.3253 61.7447 73.596L61.9827 73.078V77.964L61.7447 77.586C62.1834 77.7167 62.58 77.782 62.9347 77.782ZM67.6023 82.22V81.212L68.7923 80.82L68.5403 81.156V72.658L68.7643 72.924L67.6023 72.574V71.566L70.0663 71.454L70.2903 72.672L70.0663 72.56C70.5049 72.168 70.9296 71.8693 71.3403 71.664C71.7603 71.4587 72.1943 71.356 72.6423 71.356C73.1836 71.356 73.6596 71.5007 74.0703 71.79C74.4809 72.07 74.8029 72.49 75.0363 73.05C75.2789 73.6007 75.4003 74.2773 75.4003 75.08C75.4003 75.9853 75.2463 76.7413 74.9383 77.348C74.6303 77.9547 74.1963 78.412 73.6363 78.72C73.0856 79.0187 72.4416 79.168 71.7043 79.168C71.4803 79.168 71.2469 79.1493 71.0043 79.112C70.7616 79.084 70.5096 79.042 70.2483 78.986L70.5003 78.762V81.156L70.2903 80.862L71.5923 81.212V82.22H67.6023ZM71.4523 77.782C72.1149 77.782 72.5956 77.558 72.8943 77.11C73.2023 76.662 73.3563 76.0507 73.3563 75.276C73.3563 74.7627 73.2956 74.324 73.1743 73.96C73.0529 73.5867 72.8849 73.302 72.6703 73.106C72.4556 72.9007 72.1896 72.798 71.8723 72.798C71.6296 72.798 71.3729 72.8633 71.1023 72.994C70.8316 73.1247 70.5516 73.3253 70.2623 73.596L70.5003 73.078V77.964L70.2623 77.586C70.7009 77.7167 71.0976 77.782 71.4523 77.782Z" fill="#4BA49F"/>
</svg>
</NavLinks>
                            </h2>
                        </a>

                        <div className="mt-32 flex-1 rounded-lg bg-white py-2 px-5">
                            <div className="my-2">
                                {" "}
                                <NavLinks href="/">Dashboard</NavLinks>
                            </div>
                            <div className="my-2">
                                {" "}
                                <NavLinks href="/inspector">Inspector</NavLinks>
                            </div>
                            <div className="my-2">
                                {" "}
                                <NavLinks href="/report2">All Reports</NavLinks>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* RND SIDE NAV */}

            {width >= 1024 ? (
                <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl   ">
                    <div>
                        <div className="flex items-center justify-between py-3 md:block md:py-5">
                            <a href="/">
                                <h2 className="text-2xl font-bold text-primary  hover:text-white">
                                    {" "}
                                    {/* <NavLinks href="/">Report</NavLinks> */}
                                </h2>
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="text-gray-700 focus:border-gray-400 rounded-md p-2 outline-none focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                                navbar ? "block" : "hidden"
                            }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li>
                                    {/* <li className="text-gray-600 hover:text-blue-600"> */}
                                    <NavLinks href="/gallery">Profile</NavLinks>
                                    {/* <Link to="/" className={url === "/" ?" text-red-200" : "text-gray-600"}>Home</Link> */}
                                    {/* <Link to="/" className={`${url}` === "/" ?" text-red-600 " : ""}>Homes</Link> */}
                                </li>
                                {/* <li>
                                    <NavLinks href="/report2">Laporan</NavLinks>
                                </li> */}
                                {/* <li className="text-gray-600 hover:text-blue-600"> */}
                                {/* <li>
                                    <NavLinks href="/lembur">Lembur</NavLinks>
                                </li> */}
                                {/* <li>
                                    <NavLinks href="/login2">Login2</NavLinks>
                                </li> */}
                                {/* <li className="text-gray-600 hover:text-blue-600"> */}
                                {/* <li>
                                    <NavLinks href="/login">Login</NavLinks>
                                </li> */}
                                {/* <li>
                                <NavLinks href="/detail_report">Detail Report</NavLinks>
                            </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : null}
        </nav>
    );
}
