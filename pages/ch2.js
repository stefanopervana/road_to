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
<h2 id="leanpub-auto-introduction-to-react">Introduction to React</h2>

<p className="it">El capítulo proporciona una introducción a React. Podes preguntarte: ¿Por qué deberías aprender React en primer lugar? El capítulo podría darte la respuesta a esa pregunta. Después vas a sumergirte en el ecosistema por bootstrapping en tu primera aplicación React. En el camino obtendrás una introducción a JSX y ReactDOM. Estas preparado para tu primer componente React.</p>

<p className="p">The chapter gives you an introduction to React. You may ask yourself: Why should I learn React in the first place? The chapter might give you the answer to that question. Afterward you will dive into the ecosystem by bootstrapping your first React application. Along the way you will get an introduction to JSX and ReactDOM. Be prepared for your first React component.</p>


</div>

<div>
<h3 id="leanpub-auto-hi-my-name-is-react">Hi, my name is React.</h3>

<p className="it"><strong>¿Por qué te molestaría aprender React ? </strong>En los últimos años las aplicaciones de una sola página (<a href="https://en.wikipedia.org/wiki/Single-page_application">SPA</a>) han llegado a ser populares. Frameworks como Angular, Ember y Backbone ayudaron a los desarrolladores de JavaScript a construir aplicaciones web modernas más allá del uso de jQuery. La lista no es exhaustiva. Existe una amplia gama de frameworks de SPA. Si tenemos en cuenta las fechas de lanzamiento, la mayoría de ellos se encuentran entre la primera generación de SPAs: Angular 2010, Backbone de 2010, Ember 2011.</p>


<p className="p"><strong>Why should you bother to learn React?</strong> In recent years single page applications (<a href="https://en.wikipedia.org/wiki/Single-page_application">SPA</a>) have become popular. Frameworks like Angular, Ember and Backbone helped JavaScript developers to build modern web applications beyond the usage of jQuery. The list is not exhaustive. There exists a wide range of SPA frameworks. When you consider the release dates, most of them are among the first generation of SPAs: Angular 2010, Backbone 2010, Ember 2011.</p>

<p className="it">El primer lanzamiento fue React 2013 por Facebook. React no es un framework de spa, pero si es una biblioteca de vista. Es la V en la <a href="https://de.wikipedia.org/wiki/Model_View_Controller">MVC</a> (modelo controlador de vista). Sólo se te permite renderizar los componentes como elementos visibles en un navegador. Sin embargo, todo el ecosistema alrededor de React hace posible la construcción de aplicaciones de una sola página.</p>


<p className="p">The initial React release was 2013 by Facebook. React is not an SPA framework but a view library. It is the V in the <a href="https://de.wikipedia.org/wiki/Model_View_Controller">MVC</a> (model view controller). It only enables you to render components as viewable elements in a browser. Yet the whole ecosystem around React makes it possible to build single page applications.</p>

<p className="it">Pero ¿por qué deberías considerar el uso de React sobre la primera generación de frameworks de SPA? Mientras que la primera generación de frameworks trató de resolver un montón de cosas a la vez, React sólo te ayuda a construir tu capa de vista. Es una biblioteca y no un framework. La idea detrás de esto: Su punto de vista es una jerarquía de componentes composeable.</p>


<p className="p">But why should you consider using React over the first generation of SPA frameworks? While the first generation of frameworks tried to solve a lot of things at once, React only helps you to build your view layer. It’s a library and not a framework. The idea behind it: Your view is a hierarchy of composeable components.</p>

<p className="it">En React podes centrarte en tu vista antes de introducir más aspectos de tu aplicación. Todos los demás aspectos es otro bloque de construcción para tu spa. Estos bloques de construcción son esenciales para construir una aplicación madura. Vienen con dos ventajas.</p>


<p className="p">In React you can focus on your view before you introduce more aspects to your application. Every other aspect is another building block for your SPA. These building blocks are essential to build a mature application. They come with two advantages.</p>

<p className="it">En primer lugar podes aprender los bloques de construcción paso a paso. Vos no tenes que preocuparte de entender por completo. Es diferente de un framework que da cada bloque de construcción desde el principio. Este libro se centra en React como el primer bloque de construcción. Más bloques de construcción seguiran con el tiempo.</p>


<p className="p">First you can learn the building blocks step by step. You don’t have to worry about understanding them altogether. It is different from a framework that gives you every building block from the start. This book focuses on React as the first building block. More building blocks follow eventually.</p>

<p className="it">En segundo lugar todos los bloques de construcción son intercambiables. Esto hace que el ecosistema alrededor React un lugar tan innovador. Múltiples soluciones están compitiendo entre sí. Podes escoger la solución más atractiva para vos y su caso de uso.</p>


<p className="p">Second all building blocks are interchangeable. It makes the ecosystem around React such an innovative place. Multiple solutions are competing with each other. You can pick the most appealing solution for you and your use case.</p>

<p className="it">La primera generación de frameworks de SPA llegó a un nivel empresarial. Ellos son más rígidos. React es una instancia innovadora y consigue ser adoptado por varias compañías líderes de pensamiento en tecnología como <a href="https://github.com/facebook/react/wiki/Sites-Using-React">Airbnb, Netflix y Facebook, por supuesto</a>. Todos ellos invierten en el futuro de React y están contentos con React y el propio ecosistema.</p>


<p className="p">The first generation of SPA frameworks arrived at an enterprise level. They are more rigid. React stays innovative and gets adopted by multiple tech thought leader companies like <a href="https://github.com/facebook/react/wiki/Sites-Using-React">Airbnb, Netflix and of course Facebook</a>. All of them invest in the future of React and are content with React and the ecosystem itself.</p>

<p className="it">React es probablemente una de las mejores opciones para la creación de aplicaciones de una sola página en la actualidad. Sólo se entrega la capa de vista, pero el ecosistemReact  es un framework flexible e intercambiable. React tiene una API delgada, un ecosistema increíble y una gran comunidad. Podes leer acerca de mis experiencias <a href="https://www.robinwieruch.de/reasons-why-i-moved-from-angular-to-react/">por eso me mudé de Angular parReact </a>. Yo recomiendo comprender por que se elige React sobre otro framework o biblioteca. Todo el mundo está dispuesto a experimentar y ver a donde nos conducirá React en 2017 y más allá.</p>


<p className="p">React is probably one of the best choices for building single page applications nowadays. It only delivers the view layer, but the React ecosystem is a whole flexible and interchangeable framework. React has a slim API, an amazing ecosystem and a great community. You can read about my experiences <a href="https://www.robinwieruch.de/reasons-why-i-moved-from-angular-to-react/">why I moved from Angular to React</a>. I highly recommend to have an understanding why you would choose React over another framework or library. After all everyone is keen to experience where React will lead us in 2017 and beyond.</p>

<h4 id="leanpub-auto-exercises">Exercises</h4>

<ul>
<li className="it">leer acerca de <a href="https://www.robinwieruch.de/reasons-why-i-moved-from-angular-to-react/">Por qué me moví de Angular React </a>
</li>
  <li className="p">read about <a href="https://www.robinwieruch.de/reasons-why-i-moved-from-angular-to-react/">why I moved from Angular to React</a>
</li>
</ul>


</div>
<div>
<h3 id="leanpub-auto-requirements">Requirements</h3>

<p className="it">Antes de empezar a leer el libro, Debes estar familiarizado con HTML, CSS y JavaScript (ES5). El libro te enseñará JavaScript ES6 y más allá. Si venis de un framework SPA diferente o una biblioteca, ya debes estar familiarizado con los conceptos básicos. Si vos acabas de comenzar en el desarrollo web, Debes sentirte cómodo con HTML, CSS y JavaScript ES5 para aprender React.</p>

<p className="p">Before you start to read the book, you should be familiar with HTML, CSS and JavaScript (ES5). The book will teach JavaScript ES6 and beyond. If you are coming from a different SPA framework or library, you should already be familiar with the basics. If you have just started in web development, you should feel comfortable with HTML, CSS and JavaScript ES5 to learn React.</p>

<p className="it">Cada desarrollador tiene herramientas para construir aplicaciones. Vos necesitarás un editor (IDE) y la herramienta de terminal (línea de comandos). Podes leer mi developer setup para organizar tus herramientas: <a href="https://www.robinwieruch.de/developer-setup/">Developer Setup</a>. Se ajusta para usuarios de Mac, pero podes sustituir la mayor parte de las herramientas en otro sistema operativo.</p>

<p className="p">Every developer needs tools to build applications. You will need an editor (IDE) and terminal (command line) tool. You can read my developer setup to organize your tools: <a href="https://www.robinwieruch.de/developer-setup/">Developer Setup</a>. It is adjusted for Mac users, but you can substitute most of the tools for other operating system.</p>

<p className="it">El editor se utiliza para organizar y escribir el código. El terminal se utiliza para ejecutar comandos. Un comando sirve para iniciar tu aplicación, para ejecutar pruebas o instalar otras bibliotecas para tu proyecto.</p>

<p className="p">The editor is used to organize and write your code. The terminal is used to execute commands. A command can be to start your application, to run tests or to install other libraries for your project.</p>

<p className="it">Por último, pero no menos importante, necesitarás una instalación de <a href="https://nodejs.org/en/">node y npm</a>. Ambos se utilizan para administrar bibliotecas que vas a necesitar en el camino del aprendizaje de React. Si queres, podes instalar paquetes de nodos externos a través de la npm (nodo gestor de paquetes). Estos paquetes de nodos pueden  ser bibliotecas enteras o frameworks.</p>

<p className="p">Last but not least you will need an installation of <a href="https://nodejs.org/en/">node and npm</a>. Both are used to manage libraries you will need along the way to learn React. You will install external node packages via npm (node package manager). These node packages can be libraries or whole frameworks.</p>

<p className="it">Podes verificar tus versiones de node y NPM en la línea de comandos. Si no recibis ninguna salida en el terminal, es necesario instalar node y NPM en primer lugar. Estas son mis versiones:</p>

<p className="p">You can verify your versions of node and npm on the command line. If you don’t get any output in the terminal, you need to install node and npm first. These are my versions:</p>

<figure class="code">
  <figcaption>Command Line</figcaption>

<div class="highlight"><pre><code></code> node --version
*v7.4.0
npm --version
*v4.0.5
</pre></div>

</figure>


</div>
<div>
<h3 id="leanpub-auto-node-and-npm">node and npm</h3>

<p className="it">En este capítulo se te da un poco de curso rápido de node y la npm. No es exhaustiva, pero usted recibirá todas las herramientas necesarias. Si está familiarizado con los dos, podes saltarse este capítulo.</p>

<p className="p">This chapter gives you a little crash course in node and npm. It is not exhaustive, but you will get all the necessary tools. If you are familiar with both of them, you can skip the chapter.</p>

<p className="it">El <strong>gestor de paquetes nodo</strong> (NPM) te permite instalar externos <strong>paquetes de nodos</strong> desde la línea de comandos. Estos paquetes pueden  ser un conjunto de funciones de utilidad, bibliotecas o frameworks enteros. Son las dependencias de tu aplicación. podes instalar estos paquetes a su carpeta de paquete global de node o en la carpeta de proyecto local.</p>

<p className="p">The <strong>node package manager</strong> (npm) allows you to install external <strong>node packages</strong> from the command line. These packages can be a set of utility functions, libraries or whole frameworks. They are the dependencies of your application. You can either install these packages to your global node package folder or to your local project folder.</p>

<p className="it">Los paquetes de nodos globales son accesibles desde todas partes en el terminal y hay que instalarlos sólo una vez. Podes instalar un paquete global escribiendo en tu terminal:</p>

<p className="p">Global node packages are accessible from everywhere in the terminal and you have to install them only once. You can install a global package by typing in your terminal:</p>

<figure class="code">
  <figcaption>Command Line</figcaption>

<div class="highlight"><pre><code></code> npm install -g &lt;package&gt;
</pre></div>

</figure>

<p className="it">La bandera <code>-g</code> le dice a NPM que instale el paquete global. Los paquetes locales se utilizan en la aplicación. Por ejemplo, React como una biblioteca, será un paquete local que puede ser requerida solicitando su uso. Podes instalarla a través del terminal escribiendo:</p>

<p className="p">The <code>-g</code> flag tells npm to install the package globally. Local packages are used in your application. For instance, React as a library will be a local package which can be required in your application for usage. You can install it via the terminal by typing:</p>

<figure class="code">
  <figcaption>Command Line</figcaption>

<div class="highlight"><pre><code></code> npm install &lt;package&gt;
</pre></div>

</figure>

<p className="it">En el caso de React sería:</p>

<p className="p">In the case of React it would be:</p>

<figure class="code">
  <figcaption>Command Line</figcaption>

<div class="highlight"><pre><code></code> npm install react
</pre></div>

</figure>

<p className="it">El paquete instalado aparecerá automáticamente en una carpeta llamada <em>node_modules /</em>. Pero tené cuidado. Siempre que instales un paquete local, no te debes olvidar de ordenada <code>--save</code> con la bandera:</p>

<p className="p">The installed package will automatically appear in a folder called <em>node_modules/</em>. But be careful. Whenever you install a local package you shouldn’t forget the neat <code>--save</code> flag:</p>

<figure class="code">
  <figcaption>Command Line</figcaption>

<div class="highlight"><pre><code></code> npm install --save &lt;package&gt;
</pre></div>

</figure>

<p className="it">La bandera <code>--save</code> le dice a NPM que almacene el requisito de paquete en un archivo llamado <em>package.json</em>. El archivo lo podes encontrar en la carpeta del proyecto.</p>

<p className="p">The <code>--save</code> flag tells npm to store the package requirement in a file called <em>package.json</em>. The file can be found in your project folder.</p>

<p className="it">Cada carpeta del proyecto no viene con un archivo <em>package.json</em>. Hay un comando NPM para inicializar un proyecto NPM y por lo tanto un archivo <em>package.json</em>. Sólo cuando se tiene ese archivo, podes instalar nuevos paquetes locales a través de la npm.</p>

<p className="p">Not every project folder comes with a <em>package.json</em> file though. There is a npm command to initialize a npm project and thus a <em>package.json</em> file. Only when you have that file, you can install new local packages via npm.</p>

<figure class="code">
  <figcaption>Command Line</figcaption>

<div class="highlight"><pre><code></code> npm init -y
</pre></div>

</figure>

<p className="it">La bandera <code>-y</code> es un acceso directo para inicializar todos los valores predeterminados en tu <em>package.json</em>. Si no lo utilizas, tenes que decidir cómo configurar el archivo.</p>

<p className="p">The <code>-y</code> flag is a shortcut to initialize all the defaults in your <em>package.json</em>. If you don’t use it, you have to decide how to configure the file.</p>

<p className="it">Una palabra más sobre el <em>package.json</em>. El archivo te permite compartir tu proyecto con otros desarrolladores sin compartir todos los paquetes de node. El archivo tiene todas las referencias de los paquetes de node utilizados en tu proyecto. Estos paquetes son llamados dependencias. Todo el mundo puede copiar el proyecto sin las dependencias. Las dependencias son referencias en el <em>package.json</em>. Alguien que copia tu proyecto puede  instalar todos los paquetes mediante el uso de la línea de comandos <code>npm install</code>.</p>

<p className="p">One more word about the <em>package.json</em>. The file enables you to share your project with other developers without sharing all the node packages. The file has all the references of node packages used in your project. These packages are called dependencies. Everyone can copy your project without the dependencies. The dependencies are references in the <em>package.json</em>. Someone who copies your project can install all packages by using <code>npm install</code> on the command line.</p>

<p className="it">Quiero cubrir un comando más de NPM para evitar confusiones:</p>

<p className="p">I want to cover one more npm command to prevent confusion:</p>

<figure class="code">
  <figcaption>Command Line</figcaption>

<div class="highlight"><pre><code></code> npm install --save-dev &lt;package&gt;
</pre></div>

</figure>

<p className="it">La bandera <code>--save-dev</code> indica que el paquete node sólo se utiliza en el entorno de desarrollo. No va a ser utilizado en la producción cuando se implementa la aplicación en un servidor. ¿Qué tipo de paquete de node podria ser? Imaginate que deseas probar la aplicación con la ayuda de un paquete de node. Es necesario instalar ese paquete a través de la npm, pero queres excluirlo de tu entorno de producción. Allí no deseas probar la aplicación. Debe ser probado ya y ver si funciona fuera de la caja para los usuarios. Eso es sólo un caso de uso en el que se desea utilizar la bandera <code>--save-dev</code>.</p>

<p className="p">The <code>--save-dev</code> flag indicates that the node package is only used in the development environment. It will not be used in production when you deploy your application on a server. What kind of node package could that be? Imagine you want to test your application with the help of a node package. You need to install that package via npm, but want to exclude it from your production environment. There you don’t want to test your application anymore. It should be tested already and work out of the box for users. That’s only one use case where you would want to use the <code>--save-dev</code> flag.</p>

<p className="it">Te encontrarás con más comandos de npm en tu camino. Pero estos serán suficientes por ahora.</p>

<p className="p">You will encounter more npm commands on your way. But these will be sufficient for now.</p>

<h4 id="leanpub-auto-exercises-1">Exercises:</h4>

<ul>
  <li className="it">configurar un tiro de proyecto npm </li>

  <li className="p">setup a throw away npm project</li>
  </ul>
    <ul>
      <li className="it">crear una nueva carpeta con <code>mkdir &lt;folder_name&gt;</code> </li> 

      <li className="p">create a new folder with <code>mkdir &lt;folder_name&gt;</code>
</li>
      <li className="it">naveguá a la carpeta con <code>cd &lt;folder_name&gt;</code> </li>

      <li className="p">navigate into the folder with <code>cd &lt;folder_name&gt;</code>
</li>
      <li className="it">ejecutá <code>npm init -y</code> </li>

      <li className="p">execute <code>npm init -y</code>
</li>
      <li className="it">instalá un paquete local, como React con <code>npm install --save react</code> </li>

      <li className="p">install a local package like React with <code>npm install --save react</code>
</li>
      <li className="it">echá un vistazo al archivo <em>package.json</em> y la carpeta <em>node_modules/</em></li>

      <li className="p">have a look into the <em>package.json</em> file and the <em>node_modules/</em> folder</li>
      <li className="it">averiguá cómo desinstalar el paquete de nodo <em>react</em></li>

      <li className="p">find out how to uninstall the <em>react</em> node package</li>
    </ul>
  <ul>
  <li className="it">leer más acerca de <a href="https://docs.npmjs.com/">npm</a> </li>

  <li className="p">read more about <a href="https://docs.npmjs.com/">npm</a>
</li>
</ul>


</div>

<div>
<h3 id="leanpub-auto-installation">Installation</h3>

<p className="it">Hay varios enfoques para empezar con una aplicación React.</p>

<p className="p">There are multiple approaches to get started with React  application.</p>

<p className="it">La primera de ellas es el uso de un CDN. Esto puede sonar más complicado de lo que es. Un CDN es una <a href="https://en.wikipedia.org/wiki/Content_delivery_network">red de entrega de contenido</a>. Varias compañías tienen archivos públicos de host CDN para los usuarios. Estos archivos pueden  ser bibliotecas como React. Después de todo, una biblioteca puede ser sólo un archivo JavaScript. Se puede alojarse en algún lugar y se puede requerir en tu aplicación.</p>

<p className="p">The first one is to use a CDN. That may sound more complicated than it is. A CDN is a <a href="https://en.wikipedia.org/wiki/Content_delivery_network">content delivery network</a>. Several companies have CDNs that host files publicly for users. These files can be libraries like React. After all a library can be only one JavaScript file. It can be hosted somewhere and you can require it in your application.</p>

<p className="it">Cómo utilizar un CDN para iniciarse en React? Podes tener inline la etiqueta <code>&lt;script&gt;</code> en el código HTML que apunta a una URL de CDN. Para empezar en React necesitas dos archivos (bibliotecas): <em>React</em> y <em>React-dom</em>.</p>

<p className="p">How to use a CDN to get started in React? You can inline the <code>&lt;script&gt;</code> tag in your HTML that points to a CDN url. To get started in React you need two files (libraries): <em>react</em> and <em>react-dom</em>.</p>

<figure class="code">
  <figcaption>Code Playground</figcaption>

<div class="highlight"><pre><code></code><code class="o">&lt;</code><code class="nx">script</code> <code class="nx">src</code><code class="o">=</code><code class="s2">"https://unpkg.com/react@15/dist/react.js"</code><code class="o">&gt;&lt;</code><code class="err">/script&gt;</code>
<code class="o">&lt;</code><code class="nx">script</code> <code class="nx">src</code><code class="o">=</code><code class="s2">"https://unpkg.com/react-dom@15/dist/react-dom.js"</code><code class="o">&gt;&lt;</code><code class="err">/script&gt;</code>
</pre></div>

</figure>

<p className="it">Pero ¿por qué deberías utilizar un CDN cuando se tiene NPM para instalar paquetes de node (bibliotecas)?</p>

<p className="p">But why should you use a CDN when you have npm to install node packages (libraries)?</p>

<p className="it">Cuando tu aplicacióntiene un <em>package.json</em> de archivos, podes instalar <em>React</em> y <em>React-dom</em> desde la línea de comandos. El requisito es que la carpeta se inicializa como proyecto NPM con un <em>package.json</em> archivo. Podes instalar varios paquetes de node en una línea con npm.</p>

<p className="p">When your application has a <em>package.json</em> file, you can install <em>react</em> and <em>react-dom</em> from the command line. The requirement is that the folder is initialized as npm project with a <em>package.json</em> file. You can install multiple node packages in one line with npm.</p>

<figure class="code">
  <figcaption>Command Line</figcaption>

<div class="highlight"><pre><code></code> npm install --save react react-dom
</pre></div>

</figure>

<p className="it">Este enfoque se utiliza a menudo para agregar React a una aplicación existente.</p>

<p className="p">That approach is often used to add React to an existing application.</p>

<p className="it">Por desgracia, eso no es todo. Tendrías que hacer frente a <a href="http://babeljs.io/">Babel</a> para que tu aplicación seaconsciente de JSX - la sintaxis React - y JavaScript ES6. Babel transpila tu código para que los navegadores puedan  interpretar ES6 y JSX. No todos los navegadores son capaces de interpretar la sintaxis. El setup incluye una gran cantidad de configuración y herramientas. Puede ser abrumador para los principiantes en React molestar con toda la configuración.</p>

<p className="p">Unfortunately that’s not everything. You would have to deal with <a href="http://babeljs.io/">Babel</a> to make your application aware of JSX - the React syntax - and JavaScript ES6. Babel transpiles your code that browsers can interpret ES6 and JSX. Not all browsers are capable of interpreting the syntax. The setup includes a lot of configuration and tooling. It can be overwhelming for React beginners to bother with all the configuration.</p>

<p className="it">Debido a esta razón, Facebook introdujo <em>create-react-app</em> como una solución cero-configuración de React. El siguiente capítulo te mostrará cómo configurar tu aplicación.</p>

<p className="p">Because of this reason, Facebook introduced <em>create-react-app</em> as a zero-configuration React solution. The next chapter will show you how to setup your application.</p>

<h4 id="leanpub-auto-exercises-2">Exercises:</h4>

<ul>
<li className="it">leer más sobre <a href="https://facebook.github.io/react/docs/installation.html">instalaciones de React</a>
</li>
  <li className="p">read more about <a href="https://facebook.github.io/react/docs/installation.html">React installations</a>
</li>
</ul>


</div>

<div>
<h3 id="leanpub-auto-zero-configuration-setup">Zero-Configuration Setup</h3>

<p className="it">En el camino de aprender React vas a utilizar <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> para arrancar la aplicación. Se trata de un kit de inicio obstinado aún sin configuración para React  introducido por Facebook en 2016. Lo <a href="https://twitter.com/dan_abramov/status/806985854099062785"> recomendaría a los principiantes en un 96%</a>. En <em>create-react-app</em> la utilería y la configuración evolucionan en el fondo mientras la atención se centra en la implementación de la aplicación.</p>

<p className="p">In the Road to learn React you will use <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> to bootstrap your application. It’s an opinionated yet zero-configuration starter kit for React introduced by Facebook in 2016. People would <a href="https://twitter.com/dan_abramov/status/806985854099062785">recommend it to beginners by 96%</a>. In <em>create-react-app</em> the tooling and configuration evolve in the background while the focus is on the application implementation.</p>

<p className="it">Para empezar, tendrás que instalar el paquete a los paquetes de nodos globales. Después de que siempre tenga a su disposición en la línea de comandos para arrancar nuevas aplicaciones de React.</p>

<p className="p">To get started, you will have to install the package to your global node packages. After that you always have it available on the command line to bootstrap new React applications.</p>

<figure class="code">
  <figcaption>Command Line</figcaption>

<div class="highlight"><pre><code></code> npm install -g create-react-app
</pre></div>

</figure>

<p className="it">podes comprobar la versión de <em>create-react-app</em> para verificar la instalación correcta en la línea de comandos:</p>

<p className="p">You can check the version of <em>create-react-app</em> to verify a successful installation on your command line:</p>

<figure class="code">
  <figcaption>Command Line</figcaption>

<div class="highlight"><pre><code></code> create-react-app --version
</pre></div>

</figure>

<p className="it">Se te debes dar una salida sobre la versión.</p>

<p className="p">It should give you an output about the version.</p>

<p className="it">Ahora podes arrancar tu primera aplicación React. Lo llamamos <em>HackerNews</em>, pero podes elegir un nombre diferente. Después simplemente naveguá a la carpeta:</p>

<p className="p">Now you can bootstrap your first React application. We call it <em>hackernews</em>, but you can choose a different name. Afterward simply navigate into the folder:</p>

<figure class="code">
  <figcaption>Command Line</figcaption>

<div class="highlight"><pre><code></code> create-react-app hackernews<br></br>
cd hackernews
</pre></div>

</figure>

<p className="it">Ahora podes abrir la aplicación en tu editor. Se te debe presentar la siguiente estructura de carpetas:</p>

<p className="p">Now you can open the application in your editor. The following folder structure should be presented to you:</p>

<figure class="code">
  <figcaption>Folder Structure</figcaption>

<div class="highlight"><pre><code></code> hackernews/<br></br>
  README.md<br></br>
  node_modules/<br></br>
  package.json<br></br>
  .gitignore<br></br>
  public/<br></br>
    favicon.ico<br></br>
    index.html<br></br>
  src/<br></br>
    App.css<br></br>
    App.js<br></br>
    App.test.js<br></br>
    index.css<br></br>
    index.js<br></br>
    logo.svg
</pre></div>

</figure>

<p className="it">Al principio todo lo que necesitas se encuentra en la carpeta <em>src/</em>.</p>

<p className="p">In the beginning everything you need is located in the <em>src/</em> folder.</p>

<p className="it">La atención se centra principalmente en el archivo <em>src/App.js</em> para implementar componentes React. Será utilizado para implementar tu aplicación, pero más tarde es posible que desee dividir tus componentes en varios archivos.</p>

<p className="p">The main focus lies on the <em>src/App.js</em> file to implement React components. It will be used to implement your application, but later you might want to split up your components into multiple files.</p>

<p className="it">Además se encuentra un archivo <em>src/App.test.js</em> para pruebas y un <em>src/index.js</em> como punto de entrada al mundo React. Veremos ambos archivos en un capítulo posterior. Además, hay un archivo <em>src/index.css</em> y un archivo <em>src/App.css</em> para el estilo de tu aplicación y componentes. Todos están equipados con estilo por defecto cuando los abras.</p>

<p className="p">Additionally you will find a <em>src/App.test.js</em> file for tests and a <em>src/index.js</em> as entry point to the React world. You will get to know both files in a later chapter. In addition, there is a <em>src/index.css</em> and a <em>src/App.css</em> file to style your application and components. They all come with default style when you open them.</p>

<p className="it">Al lado de la carpeta <em>src/</em> se encuentra el  archivo<em>package.json</em> y la carpeta <em>node_modules/</em> para administrar tus paquetes de node. La aplicación <em>create-react-app</em> es un proyecto de la npm. Podes utilizar la npm para instalar y desinstalar paquetes de nodos a tu proyecto.</p>

<p className="p">Next to to the <em>src/</em> folder you will find the <em>package.json</em> file and <em>node_modules/</em> folder to manage your node packages. The <em>create-react-app</em> application is a npm project. You can use npm to install and uninstall node packages to your project.</p>

<p className="it">El proyecto <em>create-react-app</em> viene con las siguientes secuencias de comandos de la npm para tu línea de comandos:</p>

<p className="p">The <em>create-react-app</em> project comes with the following npm scripts for your command line:</p>

<figure class="code">
  <figcaption>Command Line</figcaption>

<div class="highlight"><pre><code></code>// Runs the application in http://localhost:3000<br></br>
npm start<br></br>
<br></br>
// Runs the tests<br></br>
npm test<br></br>
<br></br>
// Builds the application for production<br></br>
npm run build
</pre></div>

</figure>

<p className="it">Las secuencias de comandos se definen también en tu <em>package.json</em>. Tu aplicación boilerplate React es bootstrapped ahora.</p>

<p className="p">The scripts are defined in your <em>package.json</em> too. Your boilerplate React application is bootstrapped now.</p>

<h4 id="leanpub-auto-exercises-3">Exercises:</h4>

<ul>
  <li className="it">Dale <code>npm start</code> a tu aplicación y visitá la página en el navegador</li>

  <li className="p">
<code>npm start</code> your application and visit the page in your browser</li>
  <li className="it">ejecutá el guión interactivo <code>npm test</code></li>

  <li className="p">run the interactive <code>npm test</code> script</li>
  <li className="it">familiarizate con la estructura de carpetas</li>

  <li className="p">make yourself familiar with the folder structure</li>
  <li className="it">familiarizate con el contenido de los archivos</li>

  <li className="p">make yourself familiar with the content of the files</li>
  <li className="it">lee más acerca de <a href="https://github.com/facebookincubator/create-react-app">las secuencias de comandos y crea una aplicación React</a> </li>

  <li className="p">read more about <a href="https://github.com/facebookincubator/create-react-app">the scripts and create-react-app</a>
</li>
</ul>


</div>

<div>
<h3 id="leanpub-auto-introduction-to-jsx">Introduction to JSX</h3>

<p className="it">Ahora se va a conocer JSX. Es la sintaxis en React. Como ya he mencionado antes, <em>create-react-app</em> bootstrapped una aplicación repetitiva. Todos los archivos vienen con implementaciones por defecto. Vamos a bucear en el código fuente.</p>

<p className="p">Now you will get to know JSX. It is the syntax in React. As I mentioned before, <em>create-react-app</em> has already bootstrapped a boilerplate application. All files come with default implementations. Let’s dive into the source code.</p>

<p className="it">El único archivo que vas a tocar en un principio será el archivo <em>src/App.js</em>.</p>

<p className="p">The only file you will touch in the beginning will be the <em>src/App.js</em> file.</p>

<figure class="code">
  <figcaption>src/App.js</figcaption>

<div class="highlight"><pre><code></code><code class="kr">import</code> <code class="nx">React</code><code class="p">,</code> <code class="p">&#123;</code> <code class="nx">Component</code> <code class="p">&#125;</code> <code class="nx">from</code> <code class="s1">'react'</code><code class="p">;</code><br></br>
<code class="kr">import</code> <code class="nx">logo</code> <code class="nx">from</code> <code class="s1">'./logo.svg'</code><code class="p">;</code><br></br>
<code class="kr">import</code> <code class="s1">'./App.css'</code><code class="p">;</code><br></br>
<br></br>
<code class="kr">class</code> <code class="nx">App</code> <code class="kr">extends</code> <code class="nx">Component</code> <code class="p">&#123;</code><br></br>
  <code class="nx">render</code><code class="p">()</code> <code class="p">&#123;</code><br></br>
    <code class="k">return</code> <code class="p">(</code><br></br>
      <code class="o">&lt;</code><code class="nx">div</code> <code class="nx">className</code><code class="o">=</code><code class="s2">"App"</code><code class="o">&gt;</code><br></br>
        <code class="o">&lt;</code><code class="nx">div</code> <code class="nx">className</code><code class="o">=</code><code class="s2">"App-header"</code><code class="o">&gt;</code><br></br>
          <code class="o">&lt;</code><code class="nx">img</code> <code class="nx">src</code><code class="o">=</code><code class="p">&#123;</code><code class="nx">logo</code><code class="p">}</code> <code class="nx">className</code><code class="o">=</code><code class="s2">"App-logo"</code> <code class="nx">alt</code><code class="o">=</code><code class="s2">"logo"</code> <code class="o">/&gt;</code><br></br>
          <code class="o">&lt;</code><code class="nx">h2</code><code class="o">&gt;</code><code class="nx">Welcome</code> <code class="nx">to</code> <code class="nx">React</code><code class="o">&lt;</code><code class="err">/h2&gt;</code><br></br>
        <code class="o">&lt;</code><code class="err">/div&gt;</code><br></br>
        <code class="o">&lt;</code><code class="nx">p</code> <code class="nx">className</code><code class="o">=</code><code class="s2">"App-intro"</code><code class="o">&gt;</code><br></br>
          <code class="nx">To</code> <code class="nx">get</code> <code class="nx">started</code><code class="p">,</code> <code class="nx">edit</code> <code class="o">&lt;</code><code class="nx">code</code><code class="o">&gt;</code><code class="nx">src</code><code class="o">/</code><code class="nx">App</code><code class="p">.</code><code class="nx">js</code><code class="o">&lt;</code><code class="err">/code&gt; and save to reload.</code><br></br>
        <code class="o">&lt;</code><code class="err">/p&gt;</code><br></br>
      <code class="o">&lt;</code><code class="err">/div&gt;</code><br></br>
    <code class="p">);</code><br></br>
  <code class="p">&#125;</code><br></br>
<code class="p">&#125;</code><br></br>
<br></br>
<code class="kr">export</code> <code class="k">default</code> <code class="nx">App</code><code class="p">;</code>
</pre></div>

</figure>

<p className="it">No te dejes confundir por las declaraciones de importación/exportación y declaración de la clase. Estas características ya están en JavaScript ES6. Vamos a volver a ello en un capítulo posterior.</p>

<p className="p">Don’t let yourself get confused by the import/export statements and class declaration. These features are already JavaScript ES6. We will revisit those in a later chapter.</p>

<p className="it">En el archivo que tiene un <strong>componente de clase ES6</strong> con el nombre de la aplicación. Es una declaración de componentes. Básicamente después de haber declarado un componente, podes utilizarlo como elemento en toda tu aplicación. Se producirá un <strong>ejemplo</strong> de tu <strong>componente</strong> o en otras palabras: se crea una instancia del componente.</p>

<p className="p">In the file you have an <strong>ES6 class component</strong> with the name App. It is a component declaration. Basically after you have declared a component, you can use it as element everywhere in your application. It will produce an <strong>instance</strong> of your <strong>component</strong> or in other words: the component gets instantiated.</p>

<p className="it">El <strong>elemento</strong> que devuelve se especifica en el método <code>render()</code>. Los elementos son los componentes que están hechos. Es útil para entender las diferencias entre componentes, instancia y elemento.</p>

<p className="p">The <strong>element</strong> it returns is specified in the <code>render()</code> method. Elements are what components are made of. It is useful to understand the differences between component, instance and element.</p>

<p className="it">Muy pronto se verá en que se utiliza el componente App. De lo contrario, no podrías ver el resultado representado en el navegador, ¿verdad? El componente App es únicamente la declaración, pero no el uso. Se podría crear una instancia del componente en algún lugar en tu JSX con <code>&lt;App /&gt;</code>.</p>

<p className="p">Pretty soon you will see where the App component is used. Otherwise you wouldn’t see the rendered output in the browser, would you? The App component is only the declaration, but not the usage. You would instantiate the component somewhere in your JSX with <code>&lt;App /&gt;</code>.</p>

<p className="it">El contenido en el bloque de render se ve muy similar a HTML, pero es JSX. JSX te permite mezclar HTML y JavaScript. Es potente y confuso cuando estás acostumbrado a HTML plano. Es por eso que un buen punto de partida es usar HTML básico en tu JSX. A continuación, podes empezar a incrustar expresiones de JavaScript en el medio mediante el uso de llaves.</p>

<p className="p">The content in the render block looks pretty similar to HTML, but it’s JSX. JSX allows you to mix HTML and JavaScript. It’s powerful yet confusing when you are used to plain HTML. That’s why a good starting point is to use basic HTML in your JSX. Next you can start to embed JavaScript expressions in between by using curly braces.</p>

<p className="it">En primer lugar vamos a quitar todo el desorden en el archivo.</p>

<p className="p">First let’s remove all the clutter in the file.</p>

<figure class="code">
  <figcaption>src/App.js</figcaption>
<br></br>
<div class="highlight"><pre><code></code><code class="kr">import</code> <code class="nx">React</code><code class="p">,</code> <code class="p">&#123;</code> <code class="nx">Component</code> <code class="p">&#125;</code> <code class="nx">from</code> <code class="s1">'react'</code><code class="p">;</code><br></br>
<code class="kr">import</code> <code class="s1">'./App.css'</code><code class="p">;</code><br></br>
<br></br>
<code class="kr">class</code> <code class="nx">App</code> <code class="kr">extends</code> <code class="nx">Component</code> <code class="p">&#123;</code><br></br>
  <code class="nx">render</code><code class="p">()</code> <code class="p">&#123;</code><br></br>
    <code class="k">return</code> <code class="p">(</code><br></br>
      <code class="o">&lt;</code><code class="nx">div</code> <code class="nx">className</code><code class="o">=</code><code class="s2">"App"</code><code class="o">&gt;</code><br></br>
        <code class="o">&lt;</code><code class="nx">h2</code><code class="o">&gt;</code><code class="nx">Welcome</code> <code class="nx">to</code> <code class="nx">React</code><code class="o">&lt;</code><code class="err">/h2&gt;</code><br></br>
      <code class="o">&lt;</code><code class="err">/div&gt;</code><br></br>
    <code class="p">);</code><br></br>
  <code class="p">&#125;</code><br></br>
<code class="p">&#125;</code><br></br>
<br></br>
<code class="kr">export</code> <code class="k">default</code> <code class="nx">App</code><code class="p">;</code>
</pre></div>

</figure>

<p className="it">Ahora sólo regresa HTML sin JavaScript. Vamos a hacer del “Bienvenido React ” una variable. Una variable puede ser utilizada en tu JSX.</p>

<p className="p">Now you only return HTML without JavaScript. Let’s make the “Welcome to React” a variable. A variable can be used in your JSX.</p>

<figure class="code">
  <figcaption>src/App.js</figcaption>

<div class="highlight"><pre>import React, &#123; Component &#125; from 'react';<br></br>
import './App.css';<br></br>
<br></br>
class App extends Component &#125;<br></br>
  render() &#125;<br></br>
<code class="uil">    var helloWorld = 'Welcome to React';<br></br>
</code>    return (<br></br>
      &lt;div className="App"&gt;<br></br>
<code class="uil">        &lt;h2&gt;&#123;helloWorld}&lt;/h2&gt;<br></br>
</code>      &lt;/div&gt;<br></br>
    );<br></br>
  &#125;<br></br>
&#125;<br></br>
<br></br>
export default App;
</pre></div>

</figure>

<p className="it">Debería funcionar cuando se inicia el programa desde la línea de comandos.</p>

<p className="p">It should work when you start your application on the command line.</p>

<p className="it">Además podes haber notado el atributo <code>className</code>. Refleja el nivel <code>class</code> de atributos en HTML. Debido a razones técnicas, JSX tuvo que sustituir a un puñado de atributos HTML internos. Podes encontrar todos los <a href="https://facebook.github.io/react/docs/dom-elements.html">atributos HTML admitidos en la documentación React</a>. En su camino de aprendizaje de React te encontrarás con algunos atributos más de JSX.</p>

<p className="p">Additionally you might have noticed the <code>className</code> attribute. It reflects the standard <code>class</code> attribute in HTML. Because of technical reasons, JSX had to replace a handful of internal HTML attributes. You can find all of the <a href="https://facebook.github.io/react/docs/dom-elements.html">supported HTML attributes in the React documentation</a>. On your way to learn React you will come across some more JSX attributes.</p>

<h4 id="leanpub-auto-exercises-4">Exercises:</h4>

<ul>
  <li className="it">definir más variables y hacerlas en su JSX </li>
  <li className="p">define more variables and render them in your JSX
    <ul>
      <li className="it">utilizar un objeto complejo para representar un usuario con un primer nombre y apellido</li>
      <li className="p">use a complex object to represent an user with a first name and last name</li>
    </ul>
  </li>
  <li className="it">leer más sobre <a href="https://facebook.github.io/react/docs/introducing-jsx.html">JSX</a> </li>
  <li className="p">read more about <a href="https://facebook.github.io/react/docs/introducing-jsx.html">JSX</a>
</li>
  <li className="it">leer más sobre <a href="https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html">componentes React, elementos y las instancias</a> </li>
  <li className="p">read more about <a href="https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html">React components, elements and instances</a>
</li>
</ul>


</div>


</div>
  </Layout>
)

