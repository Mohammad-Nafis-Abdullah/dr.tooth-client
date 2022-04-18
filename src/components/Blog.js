import React from 'react';


const Blog = () => {
    return (
        <div className='container min-h-[calc(100vh-166.5px)] flex flex-col justify-start items-center gap-10 px-5 py-8'>
            <h3 className='text-center text-2xl sm:text-3xl font-medium'>Question and Answer</h3>
            <section className='flex flex-wrap justify-center items-center gap-8'>
                <div  className='blog-card fromLeft'>
                    <h6><span className="Q-A">Question 1:</span> What is the difference between <span className='blog-key'>Authorization</span> & <span className='blog-key'>Authentication?</span></h6>
                    <p>
                        <span className="Q-A">Answer :</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sit adipisci, et labore ipsum necessitatibus earum laboriosam explicabo deleniti maiores unde dolorem beatae quibusdam. Alias blanditiis qui reiciendis maxime iure doloremque porro minus amet aperiam soluta quod, minima facilis veritatis! Impedit, voluptate. Optio rem quidem officia vero reprehenderit qui minus eaque perferendis, cum doloremque laboriosam sit placeat modi eum voluptates mollitia saepe debitis? Excepturi, est voluptates quasi obcaecati, quas ex dicta possimus neque nam quis sed expedita. Quaerat dolor labore enim. Odit, voluptatem ullam earum eum doloribus quas sunt fugiat vitae dolores aspernatur quam. Facilis delectus consectetur nihil? Id mollitia quo placeat temporibus quae, ipsa quibusdam nostrum accusamus, laborum saepe ab! Necessitatibus assumenda ratione, ex, autem quos vero repellat temporibus nihil provident ducimus deserunt eligendi molestiae magnam. Facilis exercitationem veniam architecto sint dolor! Nam, rerum dicta aperiam magnam qui quisquam explicabo dolore deleniti tempore aliquid nulla, reprehenderit saepe aliquam veritatis assumenda, facilis iure? Iusto illum perspiciatis quibusdam reprehenderit dicta unde voluptatum, ratione quo nihil ex corrupti deleniti quae nemo cum ullam atque repellat provident, incidunt rerum nostrum amet quis voluptas? Odio et commodi, hic impedit aliquam vel labore dolorum veniam sit eaque nisi iusto, cumque maxime aut aperiam sequi tempore.
                    </p>
                </div>
                <div className='blog-card fromRight'>
                    <h6><span className="Q-A">Question 2:</span> Why are you using <span className="blog-key">Firebase</span>? What other options do you have to implement <span className="blog-key">Authentication</span>?</h6>
                    <p>
                        <span className="Q-A">Answer :</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat esse atque labore placeat. Voluptatum expedita cupiditate consectetur, cum accusantium deserunt adipisci libero totam omnis magni nam a. Iure expedita quam voluptatum, laudantium pariatur culpa at commodi mollitia nobis velit doloribus recusandae, quisquam iusto ex? Enim, eos, dignissimos illo iusto laborum sunt beatae harum temporibus commodi ea quam, nemo sed! Culpa reprehenderit quos debitis excepturi, ea minima placeat est voluptatem non atque expedita nemo. Aspernatur mollitia eum accusantium voluptates! Nemo in adipisci eum fuga quis consequuntur perspiciatis ipsa sed nesciunt ut, fugit odit reiciendis sapiente cupiditate error voluptates rerum, itaque consectetur.
                    </p>
                </div>
                <div className='blog-card fromBottom'>
                    <h6><span className="Q-A">Question 3:</span> What other services does <span className="blog-key">Firebase</span> provide other than <span className="blog-key">Authentication</span>?</h6>
                    <p>
                        <span className="Q-A">Answer :</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quis alias veniam illo similique explicabo voluptas exercitationem omnis perspiciatis eligendi, repellat a aut dolor assumenda sit pariatur, unde debitis officia ut velit labore odio error repellendus eos! Obcaecati magnam aperiam excepturi voluptatem eveniet sapiente voluptate maxime a molestias eos blanditiis hic rem distinctio quisquam, praesentium dolore perferendis, placeat repellat cumque mollitia ullam minima laudantium! Eos illo officia corporis eligendi accusamus, aspernatur numquam perferendis dolorum nobis! Molestiae omnis dignissimos ullam veniam?
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Blog;