import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Gallery = () => {
    return (
        <div className='bg-gray-700 text-white'>
            <section className="py-6 sm:py-12 ">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold pb-2">Gallery</h2>
                        <p className="font-serif text-sm dark:text-gray-400">Intra-oral photos are photos that are taken of your teeth, gums and oral tissue. <br /> These photos may be of a single tooth, a group of teeth, or any area of your mouth.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col cursor-zoom-in overflow-hidden handyCardImg">
                            <PhotoProvider>
                                <PhotoView src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600">
                                    <figure><img className='w-full h-52 transform hover:scale-105' src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></figure>
                                </PhotoView>
                            </PhotoProvider>
                        </article>
                        <article className="flex flex-col  cursor-zoom-in overflow-hidden handyCardImg ">
                            <PhotoProvider>
                                <PhotoView src="https://media.istockphoto.com/id/954558336/photo/power-supply-connect-to-electric-vehicle-for-charge-to-the-battery-charging-technology.jpg?b=1&s=612x612&w=0&k=20&c=1tZuPiCgOF7nCmm8TLrDqK4U6uJ3vBXQurYvT4Sy_IM=">
                                    <figure><img className='w-full h-52 transform hover:scale-105' src="https://media.istockphoto.com/id/954558336/photo/power-supply-connect-to-electric-vehicle-for-charge-to-the-battery-charging-technology.jpg?b=1&s=612x612&w=0&k=20&c=1tZuPiCgOF7nCmm8TLrDqK4U6uJ3vBXQurYvT4Sy_IM=" alt="" /></figure>
                                </PhotoView>
                            </PhotoProvider>
                        </article>
                        <article className="flex flex-col  cursor-zoom-in overflow-hidden handyCardImg">
                            <PhotoProvider>
                                <PhotoView src="https://media.istockphoto.com/id/1251125012/photo/close-up-of-a-charging-electric-car.jpg?b=1&s=612x612&w=0&k=20&c=wbp-e97BKr-R7W7EM6BaEtGc1sPHykvMqaNm-96ySOc=">
                                    <figure><img className='w-full h-52 transform hover:scale-105' src="https://media.istockphoto.com/id/1251125012/photo/close-up-of-a-charging-electric-car.jpg?b=1&s=612x612&w=0&k=20&c=wbp-e97BKr-R7W7EM6BaEtGc1sPHykvMqaNm-96ySOc=" alt="" /></figure>
                                </PhotoView>
                            </PhotoProvider>
                        </article>
                        <article className="flex flex-col  cursor-zoom-in overflow-hidden handyCardImg">
                            <PhotoProvider>
                                <PhotoView src="https://images.pexels.com/photos/8909429/pexels-photo-8909429.jpeg?auto=compress&cs=tinysrgb&w=600">
                                    <figure><img className='w-full h-52 transform hover:scale-105' src="https://images.pexels.com/photos/8909429/pexels-photo-8909429.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></figure>
                                </PhotoView>
                            </PhotoProvider>
                        </article>
                        <article className="flex flex-col  cursor-zoom-in overflow-hidden handyCardImg">
                            <PhotoProvider>
                                <PhotoView src="https://media.istockphoto.com/id/1188198006/photo/a-rent-bus-is-drive.jpg?b=1&s=612x612&w=0&k=20&c=veGGl-F7cGOpIJ9RaPsP-_cfeaflZu2yTGCchjM_vs4=">
                                    <figure><img className='w-full h-52 transform hover:scale-105' src="https://media.istockphoto.com/id/1188198006/photo/a-rent-bus-is-drive.jpg?b=1&s=612x612&w=0&k=20&c=veGGl-F7cGOpIJ9RaPsP-_cfeaflZu2yTGCchjM_vs4=" alt="" /></figure>
                                </PhotoView>
                            </PhotoProvider>
                        </article>
                        <article className="flex flex-col  cursor-zoom-in overflow-hidden handyCardImg">
                            <PhotoProvider>
                                <PhotoView src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=600">
                                    <figure><img className='w-full h-52 transform hover:scale-105' src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></figure>
                                </PhotoView>
                            </PhotoProvider>
                        </article>
                        <article className="flex flex-col  cursor-zoom-in overflow-hidden handyCardImg">
                            <PhotoProvider>
                                <PhotoView src="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=600">
                                    <figure><img className='w-full h-52 transform hover:scale-105' src="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></figure>
                                </PhotoView>
                            </PhotoProvider>
                        </article>
                        <article className="flex flex-col  cursor-zoom-in overflow-hidden handyCardImg">
                            <PhotoProvider>
                                <PhotoView src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=600">
                                    <figure><img className='w-full h-52 transform hover:scale-105' src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></figure>
                                </PhotoView>
                            </PhotoProvider>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;