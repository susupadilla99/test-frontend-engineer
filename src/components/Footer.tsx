export default function Footer() {
    return (
        <footer className="bg-primary-950 antialiased dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="border-b border-gray-100 py-6 dark:border-gray-700 md:py-8 lg:py-16">
                    <div className="items-start gap-6 md:gap-8 lg:flex 2xl:gap-24">

                        {/** Left display */}
                        <div className="grid min-w-0 flex-1 grid-cols-2 gap-6 md:gap-8 xl:grid-cols-3">
                            <div>
                                <h6 className="mb-4 text-sm font-semibold uppercase text-gray-100 dark:text-white">Company</h6>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" title="" className="text-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> About </a>
                                    </li>

                                    <li>
                                        <a href="#" title="" className="text-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Premium </a>
                                    </li>

                                    <li>
                                        <a href="#" title="" className="text-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Blog </a>
                                    </li>

                                    <li>
                                        <a href="#" title="" className="text-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Affiliate Program </a>
                                    </li>

                                    <li>
                                        <a href="#" title="" className="text-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Get Coupon </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h6 className="mb-4 text-sm font-semibold uppercase text-gray-100 dark:text-white">Order &amp; Purchases</h6>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" title="" className="text-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Order Status</a>
                                    </li>
                                    <li>
                                        <a href="#" title="" className="text-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Track Your Order</a>
                                    </li>
                                    <li>
                                        <a href="#" title="" className="text-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Purchase History</a>
                                    </li>
                                    <li>
                                        <a href="#" title="" className="text-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Returns &amp; Refunds</a>
                                    </li>
                                    <li>
                                        <a href="#" title="" className="text-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Payment Methods</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h6 className="mb-4 text-sm font-semibold uppercase text-gray-100 dark:text-white">Support &amp; Services</h6>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" title="" className="text-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Contact Support</a>
                                    </li>
                                    <li>
                                        <a href="#" title="" className="text-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">FAQs</a>
                                    </li>
                                    <li>
                                        <a href="#" title="" className="text-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Service Centers</a>
                                    </li>
                                    <li>
                                        <a href="#" title="" className="text-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Warranty Information</a>
                                    </li>
                                    <li>
                                        <a href="#" title="" className="text-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Product Manuals</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/** Right display */}
                        <div className="mt-6 w-full md:mt-8 lg:mt-0 lg:max-w-lg">
                            <div className="space-y-5 rounded-lg p-6 ">
                                <a href="#" title="" className="text-base font-medium text-sky-500 underline hover:no-underline dark:text-primary-500"> Sign In or Create Account </a>
                                <hr className="border-gray-200 dark:border-gray-600"></hr>
                                <form action="#">
                                    <div className="items-end space-y-4 sm:flex sm:space-y-0">
                                        <div className="relative mr-3 w-full sm:w-96 lg:w-full">
                                            <label className="mb-2 block text-sm font-medium text-gray-100 dark:text-gray-300"> Get the latest deals and more. </label>
                                            <input className="block w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:w-96 lg:w-full" placeholder="Enter your email address" type="email" id="email" required={false}/>
                                        </div>
                                        <div>
                                            <button type="submit" className="w-full cursor-pointer rounded-lg bg-primary-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}