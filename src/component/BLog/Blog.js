import React from 'react';

const Blog = () => {
    return (
        <div>
            <section class="m-1 m-md-4">
                <div class="shadow-lg p-0 pt-3 pb-3 p-md-5">
                    <h1 class="text-center mb-3 mb-md-5 text-white text-bg-success p-2">
                        How does react work?
                    </h1>
                    <div class="row d-block d-md-flex justify-content-center align-items-center">
                        <div class="col-12 col-md-6">
                            <p class="text-white">
                                ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.
                            </p>
                        </div>
                        <div class="col-12 col-md-6">
                            <img class="img-fluid" src="https://www.ntspl.co.in/blog/wp-content/uploads/2021/09/what-is-reactjs-how-does-it-work.jpg" alt="">
                        </div>
                    </div>
                </div>
            </section>
            <section class="m-1 m-md-4">
                <div class="shadow-lg p-0 pt-3 pb-3 p-md-5">
                    <h1 class="text-center mb-3 mb-md-5 text-white text-bg-success p-2">
                        Difference between props and state?
                    </h1>
                    <div class="row d-block d-md-flex justify-content-center align-items-center">
                        <div class="col-12 col-md-6">
                            <img class="img-fluid" src="https://i.stack.imgur.com/wqvF2.png" alt="">
                        </div>
                        <div class="col-12 col-md-6">
                            <p class="text-white">
                                Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.

                                Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="m-1 m-md-4">
                <div class="shadow-lg p-0 pt-3 pb-3 p-md-5">
                    <h1 class="text-center mb-3 mb-md-5 text-white text-bg-success p-2">
                        Difference between props and state?
                    </h1>
                    <div class="row d-block d-md-flex justify-content-center align-items-center">
                        <div class="col-12 col-md-6">
                            <img class="img-fluid" src="https://i.stack.imgur.com/wqvF2.png" alt="">
                        </div>
                        <div class="col-12 col-md-6">
                            <p class="text-white">
                                Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.

                                Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;