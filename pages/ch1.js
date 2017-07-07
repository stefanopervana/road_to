import Layout from '../components/layout'

export default () => (
  <Layout>
 <style>{`
						.col-md-6 {
                        border-radius: 4px;
                        overflow: hidden;
                        box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9);
                        display: block;
                        min-height: 70%;
                        font-family: Verdana;
                        max-width: 1100px;
                        background-color: #E8EDEE;
                        margin: auto;
                        margin-top: auto;
                        margin-right: auto;
                        margin-bottom: auto;
                        margin-left: auto;
                        white-space: pre-wrap;
                        border: none;
                        box-sizing: border-box;
                        color: #2D0D0D;
                        line-height: 1.1;
                        padding: 4.7em;

                    }

                    .home {
                        margin: 1.5em 0;
                        
                    }

                    h1 {
                        color: #867452;
                        font-size: 60px;
                    }

                    h2 {
                        color: #867452;
                        font-size: 40px;
                    }
                    
                    h3 {
                        color: #867452;
                        font-size: 30px;
                    }


                    .it, .listit {
                        color: brown;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }
                    .p, .listitem {
                        color: #75AFAD;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }

                    pre {display: block;
                    font-family: monospace;
                    white-space: pre;
                    margin: 1em 0;
                    font-size: 16px


                    }

                    code
                    {margin: auto,
                        font-family:"Lucida Console";
                        "Andale Mono";
                        "Courier New";
                        Courier;
                        monospace;
                        font-style:normal;
                        color:#395C73;}
                    
                    code strong
                    {color:#000;
                        background:#F5FD11;
                        padding:1px;
                        font-weight:normal;
                    }

                    .interno {
                    font-family: verdana;
                    font-style: italic;
                    color: #395C73;
                    font-size: 24px;    
                    }

                    .sub{
                        text-decoration: underline;
                    }

`}</style>
       <div className="col-md-6">
  <div>
<h2 id="leanpub-auto-foreword">Foreword</h2>

<p className="p">I love to teach, even though I am no expert. I learn every day and I have the fortune to have great mentors. After all not everyone has the opportunity to learn from mentors and peers. The book is my attempt to give something back. It might help people to get started and advance in React.</p>

<p className="p"><strong>But why me?</strong> In the past I have written a large tutorial to implement a <a href="https://www.robinwieruch.de/the-soundcloud-client-in-react-redux">SoundCloud Client in React + Redux</a>. I never expected the overwhelming reaction. I learned a lot during the process of writing. But even more by getting your feedback. It was my first attempt to teach people in programming.</p>

<p className="p">It also taught me to do better. I realized the SoundCloud tutorial is suited for advanced developers. It uses several tools to bootstrap your application and dives quickly into Redux. Still it helped a lot of people to get started. In my opinion it is a great tutorial to get a bigger picture of React + Redux. I use every free minute to improve the material, but it is time consuming.</p>

<p className="p">In the Road to learn React I want to offer a foundation before you start to dive into the broader React ecosystem. It has less tooling and less external state management, but a lot of information around React. It explains general concepts, patterns and best practices.</p>

<p className="p">You will learn to build your own Hacker News application. It covers real world features like pagination, client-side caching and interactions like searching and sorting. Additionally you will transition from JavaScript ES5 to JavaScript ES6 on the way. In conclusion, the book should give you a solid foundation in React before you dive into more advanced topics like Redux. I hope this book captures my enthusiasm for React and JavaScript and helps you to get started.</p>

<div class="page-break"></div>

</div>

<div>
<h2 id="leanpub-auto-testimonials">Testimonials</h2>

<ul>
  <li className="p">
<strong><a href="https://twitter.com/appsdevpk">Muhammad Kashif</a>:</strong> <em>“The Road to Learn React is a unique book that I recommend to any student or professional interested in learning react basics to advanced level. It is packed with insightful tips and techniques that are hard to find elsewhere, and remarkably thorough in its use of examples and references to sample problems, i have 17 years of experience in web and desktop app development, and before reading this book i was having trouble in learning react, but this book works like magic.”</em>
</li>
  <li className="p">
<strong><a href="https://github.com/nhuntwalker">Nicholas Hunt-Walker, Instructor of Python at a Seattle Coding School</a>:</strong> <em>“This is one of the most well-written &amp; informative coding books I’ve ever worked through. A solid React &amp; ES6 introduction.”</em>
</li>
  <li className="p">
<strong>A Rookie Developer:</strong> <em>“I just finished the book as a rookie developer, thanks for working on this. It was easy to follow and I feel confident in starting a new app from scratch in the coming days. The book was much better than official React.js tutorial that I tried earlier (and couldn’t complete due to lack of detail). The exercises at the end of each section were very rewarding.”</em>
</li>
  <li className="p">
<strong>Student:</strong> <em>“The best book to start learning ReactJS. The project moves along with the concepts being learnt which helps to grasp the subject. I have found ‘Code and learn’ as best way to master programming and this book exactly does that.”</em>
</li>
  <li className="p">
<strong><a href="https://www.goodreads.com/review/show/1880673388">Thomas Lockney</a>:</strong> <em>“Pretty solid introduction to React that doesn’t try to be comprehensive. I just wanted a taste to understand what it was about and this book gave me exactly that. I didn’t follow all the little footnotes to learn about the new ES6 features I’ve missed (“I wouldn’t say I’ve been missing it, Bob.”). But I’m sure for those of you who have fallen behind and are diligent about following those, you can probably learn a lot more than just what the book teaches.”</em>
</li>
</ul>

<div class="page-break"></div>

</div>

<div>
<h2 id="leanpub-auto-education-for-children">Education for Children</h2>

<p className="p">The book is open source and should enable everyone to learn React. However, not everyone is privileged to use open source resources, because not everyone is educated in the English language in the first place. Even though the book is pay what you want, I want to use it to support projects that teach children English in the developing world.</p>

<ul>
  <li className="p">
    <ol class="numeric">
      <li className="p">April to 18. April, 2017, <a href="https://www.robinwieruch.de/giving-back-by-learning-react/">Giving Back, By Learning React</a>
</li>
    </ol>
  </li>
</ul>

<div class="page-break"></div>

</div>

<div>
<h2 id="leanpub-auto-faq">FAQ</h2>

<p className="p"><strong>How do I get updates?</strong> You can <a href="https://www.getrevue.co/profile/rwieruch">subscribe</a> to my Newsletter or follow me on <a href="https://twitter.com/rwieruch">Twitter</a> to get updates. It keeps me motivated to continue. Once you have a copy of the book, it will stay updated. But you have to download the copy again when an update is announced. I will notify everyone by a <a href="https://www.getrevue.co/profile/rwieruch">Newsletter</a> and <a href="https://twitter.com/rwieruch">Twitter</a>.</p>

<p className="p"><strong>Does it use the recent React version?</strong> Books are outdated pretty soon after their release. Since this book is self-published, I can update it whenever I want. In conclusion, I update the resource whenever there is a new React version.</p>

<p className="p"><strong>Does it cover Redux?</strong> It doesn’t. The book should give you a solid foundation before you dive into advanced topics. Still the implementation in the book will show you that you don’t need Redux to build an application. After you have read the book, you should be able to implement a solid application without Redux. You can pre-order my next book to support me: <a href="https://gumroad.com/products/uwiyI">The Road to learn Redux</a>.</p>

<p className="p"><strong>Does it use JavaScript ES6?</strong> Yes. But don’t worry. You will be fine if you are familiar with JavaScript ES5. All JavaScript ES6 features I describe on the journey to learn React will transition from ES5 to ES6 in the book. Every feature along the way will be explained. The book does not only teach React, but also all useful JavaScript ES6 features for React.</p>

<p className="p"><strong>Will you add more chapters in the future?</strong> You can have a look at the Change Log chapter for major updates that already happened. There will be unannounced improvements in between all the time. In general it depends on the community whether I continue to work on the book. If there is an acceptance for the book, I will deliver more chapters and improve the old material. I will keep the content up to date with recent best practices, concepts and patterns. I would love to hear your thoughts about possible chapters to improve and enrich the learning experience.</p>

<p className="p"><strong>What are the reading formats?</strong> In addition to the .pdf, .epub, and .mobi formats, you can read it in pure markdown on <a href="https://github.com/rwieruch/the-road-to-learn-react">GitHub</a>. In general, I recommend reading it on a suitable format, otherwise the code snippets will have ugly line breaks.</p>

<p className="p"><strong>Why is the book pay what you want?</strong> I have put a lot of effort into this and will do so in the future. My desire is to reach as many people as possible. Everyone should be enabled to learn React. Still you could pay - if you can afford it - because it already took me a lot of my time to write and improve the book.</p>

<p className="p"><strong>Can I help to improve it?</strong> Yes. You can have a direct impact with your thoughts and <a href="https://github.com/rwieruch/the-road-to-learn-react">contributions on GitHub</a>. I don’t claim to be an expert nor to write in native English. I would appreciate your help very much.</p>

<p className="p"><strong>Can I support the project?</strong> Yes. Feel free to reach out or to support me. I invest a lot of my time into open source tutorials and learning resources. You can have a look at my <a href="https://www.robinwieruch.de/about/">about me</a> page.</p>

<div class="page-break"></div>

</div>
<div>
<h2 id="leanpub-auto-change-log">Change Log</h2>

<p className="p">
  <strong>10. January 2017:</strong>
</p>

<ul>
  <li className="p"><a href="https://github.com/rwieruch/the-road-to-learn-react/pull/18">v2 Pull Request</a></li>
  <li className="p">even more beginner friendly</li>
  <li className="p">37% more content</li>
  <li className="p">30% improved content</li>
  <li className="p">13 improved and new chapters</li>
  <li className="p">140 pages of learning material</li>
  <li className="p"><a href="https://www.educative.io/collection/5740745361195008/5676830073815040">+ interactive course of the book on educative.io</a></li>
</ul>

<p className="p">
  <strong>08. March 2017:</strong>
</p>

<ul>
  <li className="p"><a href="https://github.com/rwieruch/the-road-to-learn-react/pull/34">v3 Pull Request</a></li>
  <li className="p">20% more content</li>
  <li className="p">25% improved content</li>
  <li className="p">9 new chapters</li>
  <li className="p">170 pages of learning material</li>
</ul>

<p className="p">
  <strong>15. April 2017:</strong>
</p>

<ul>
  <li className="p">upgrade to React 15.5.</li>
</ul>

<div class="page-break"></div>

</div>

    <div>
<h2 id="leanpub-auto-how-to-read-it">How to read it?</h2>

<p className="it">El libro es mi intento de enseñar React, mientras vas a escribir una aplicación. Es una guía práctica para aprender React y no una obra de referencia sobre React. tendráss que escribir una aplicación de noticias del pirata informático que interactúa con un verdadero mundo API. Entre varios temas interesantes, que abarca la state management en React, almacenamiento en caché y las interacciones (clasificación y búsqueda). En el camino vas a aprender las mejores prácticas y patrones en React.</p>

<p className="p">The book is my attempt to teach React while you will write an application. It is a practical guide to learn React and not a reference work about React. You will write a Hacker News application that interacts with a real world API. Among several interesting topics, it covers state management in React, caching and interactions (sorting and searching). On the way you will learn best practices and patterns in React.</p>

<p className="it">Además, el libro te da una transición de JavaScript ES5 a JavaScript ES6. React abarca una gran cantidad de características de JavaScript ES6 y yo quiero mostrar cómo podes utilizarlo.</p>

<p className="p">In addition, the book gives you a transition from JavaScript ES5 to JavaScript ES6. React embraces a lot of JavaScript ES6 features and I want to show you how you can use them.</p>

<p className="it">En general, cada capítulo del libro se acumulará en el capítulo anterior. Cada capítulo te enseñará algo nuevo. No te apresures a atravesar el libro. Debes internalizarlo paso a paso. Se podrían aplicar tus propias implementaciones y leer más sobre el tema. Después de cada capítulo te doy un poco de material de lectura y ejercicios. Si realmente deseas aprender React, te recomiendo leer el material extra y hacer algunos ejercicios prácticos. Después de haber leído un capítulo, ponete cómodo con los aprendizajes antes de continuar.</p>

<p className="p">In general each chapter of the book will build up on the previous chapter. Each chapter will teach you something new. Don’t rush through the book. You should internalize each step. You could apply your own implementations and read more about the topic. After each chapter I give you some reading material and exercises. If you really want to learn React, I highly recommend to read the extra material and do some hands on exercises. After you have read a chapter, make yourself comfortable with the learnings before you continue.</p>

<p className="it">Al final tendrás una completa aplicación React en la producción. Estoy muy interesado en ver los resultados, así que por favor escribime cuando hayas terminado el libro. El capítulo final del libro te dará un puñado de opciones para continuar su viaje React. En general se encuentra una gran cantidad de temas relacionados React  en <a href="https://www.robinwieruch.de/">mi página web personal</a>.</p>

<p className="p">In the end you will have a complete React application in production. I am very keen to see your results, so please text me when you have finished the book. The final chapter of the book will give you a handful of options to continue your React journey. In general you will find a lot of React related topics on <a href="https://www.robinwieruch.de/">my personal website</a>.</p>

<p className="it">Puesto que estás leyendo el libro, supongo que sos nuevo en parReact Eso es perfecto. Al final espero recibir tus comentarios para mejorar el material para que todos puedan aprender React. Podes tener un impacto directo en <a href="https://github.com/rwieruch/the-road-to-learn-react">GitHub</a> o textos míos en <a href="https://twitter.com/rwieruch">Twitter</a>.</p>

<p className="p">Since you are reading the book, I guess you are new to React. That’s perfect. In the end I hope to get your feedback to improve the material to enable everyone to learn React. You can have a direct impact on <a href="https://github.com/rwieruch/the-road-to-learn-react">GitHub</a> or text me on <a href="https://twitter.com/rwieruch">Twitter</a>.</p>


</div>

<div>
<h2 id="leanpub-auto-what-you-can-expect-so-far">What you can expect (so far…)</h2>

<ul>
  <li className="p"><a href="https://intense-refuge-78753.herokuapp.com/">Hacker News App in React</a></li>
  <li className="it">sin configuraciones complicadas</li>

  <li className="p">no complicated configurations</li>
  <li className="it">Create-React app para arrancar tu aplicación</li>

  <li className="p">create-react-app to bootstrap your application</li>
  <li className="it">código ligero y eficiente</li>

  <li className="p">efficient lightweight code</li>
  <li className="it">sólo React setState como la state management (hasta ahora ...)</li>

  <li className="p">only React setState as state management (so far…)</li>
  <li className="it">transición de JavaScript ES5 a JavaScript ES6 a lo largo del camino</li>

  <li className="p">transition from JavaScript ES5 to ES6 along the way</li>
  <li className="it">lReact  API con métodos setstate y de ciclo de vida</li>

  <li className="p">the React API with setState and lifecycle methods</li>
  <li className="it">la interacción con un API mundo real (Hacker News)</li>

  <li className="p">interaction with a real world API (Hacker News)</li>
  <li className="it">interacciones de los usuarios avanzados 

  <li className="p">advanced user interactions</li>
    <ul>
    
      <li className="it">clasificación cliente-sided</li>
      <li className="p">client-sided sorting</li>
      <li className="it">el filtrado de clientes unilateral</li>
      <li className="p">client-sided filtering</li>
      <li className="it">la búsqueda del lado del servidor</li>
      <li className="p">server-sided searching</li>
    </ul>
  </li>
  <li className="it">implementación del caché del cliente</li>
  <li className="p">implementation of client-side caching</li>
  <li className="it">funciones de orden superior y componentes de orden superior</li>
  <li className="p">higher order functions and higher order components</li>
  <li className="it">componentes de la prueba de instantánea con Jest</li>
  <li className="p">snapshot test components with Jest</li>
  <li className="it">componentes de prueba de unidad con Enzyme</li>
  <li className="p">unit test components with Enzyme</li>
  <li className="it">bibliotecas ordenadas en el camino</li>
  <li className="p">neat libraries along the way</li>
  <li className="it">ejercicios y más lecturas en el camino</li>
  <li className="p">exercises and more readings along the way</li>
  <li className="it">interiorizar y reforzar tus aprendizajes</li>
  <li className="p">internalize and reinforce your learnings</li>
  <li className="it">desplegar tu aplicación a la producción</li>
  <li className="p">deploy your application to production</li>
</ul>

<div class="page-break"></div>
</div>

</div>
  </Layout>
)
