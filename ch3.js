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

                    .hll { background-color: #ffffcc }

.c { color: #408080; font-style: italic } /* Comment */
.err { color: #FF0000 }
.k { color: #008000; font-weight: 600 } /* Keyword */
.o { color: #666666 } /* Operator */
.cm { color: #408080; font-style: italic } /* Comment.Multiline */
.cp { color: #BC7A00 } /* Comment.Preproc */
.c1 { color: #408080; font-style: italic } /* Comment.Single */
.cs { color: #408080; font-style: italic } /* Comment.Special */
.gd { color: #A00000 } /* Generic.Deleted */
.ge { font-style: italic } /* Generic.Emph */
.gr { color: #FF0000 } /* Generic.Error */
.gh { color: #000080; font-weight: 600 } /* Generic.Heading */
.gi { color: #00A000 } /* Generic.Inserted */
.go { color: #888888 } /* Generic.Output */
.gp { color: #000080; font-weight: 600 } /* Generic.Prompt */
.gs { font-weight: 600 } /* Generic.Strong */
.gu { color: #800080; font-weight: 600 } /* Generic.Subheading */
.gt { color: #0044DD } /* Generic.Traceback */
.kc { color: #008000; font-weight: 600 } /* Keyword.Constant */
.kd { color: #008000; font-weight: 600 } /* Keyword.Declaration */
.kn { color: #008000; font-weight: 600 } /* Keyword.Namespace */
.kp { color: #008000 } /* Keyword.Pseudo */
.kr { color: #008000; font-weight: 600 } /* Keyword.Reserved */
.kt { color: #B00040 } /* Keyword.Type */
.m { color: #666666 } /* Literal.Number */
.s { color: #BA2121 } /* Literal.String */
.na { color: #7D9029 } /* Name.Attribute */
.nb { color: #008000 } /* Name.Builtin */
.nc { color: #0000FF; font-weight: 600 } /* Name.Class */
.no { color: #880000 } /* Name.Constant */
.nd { color: #AA22FF } /* Name.Decorator */
.ni { color: #999999; font-weight: 600 } /* Name.Entity */
.ne { color: #D2413A; font-weight: 600 } /* Name.Exception */
.nf { color: #0000FF } /* Name.Function */
.nl { color: #A0A000 } /* Name.Label */
.nn { color: #0000FF; font-weight: 600 } /* Name.Namespace */
.nt { color: #008000; font-weight: 600 } /* Name.Tag */
.nv { color: #19177C } /* Name.Variable */
.ow { color: #AA22FF; font-weight: 600 } /* Operator.Word */
.w { color: #bbbbbb } /* Text.Whitespace */
.mf { color: #666666 } /* Literal.Number.Float */
.mh { color: #666666 } /* Literal.Number.Hex */
.mi { color: #666666 } /* Literal.Number.Integer */
.mo { color: #666666 } /* Literal.Number.Oct */
.sb { color: #BA2121 } /* Literal.String.Backtick */
.sc { color: #BA2121 } /* Literal.String.Char */
.sd { color: #BA2121; font-style: italic } /* Literal.String.Doc */
.s2 { color: #BA2121 } /* Literal.String.Double */
.se { color: #BB6622; font-weight: 600 } /* Literal.String.Escape */
.sh { color: #BA2121 } /* Literal.String.Heredoc */
.si { color: #BB6688; font-weight: 600 } /* Literal.String.Interpol */
.sx { color: #008000 } /* Literal.String.Other */
.sr { color: #BB6688 } /* Literal.String.Regex */
.s1 { color: #BA2121 } /* Literal.String.Single */
.ss { color: #19177C } /* Literal.String.Symbol */
.bp { color: #008000 } /* Name.Builtin.Pseudo */
.vc { color: #19177C } /* Name.Variable.Class */
.vg { color: #19177C } /* Name.Variable.Global */
.vi { color: #19177C } /* Name.Variable.Instance */
.il { color: #666666 } /* Literal.Number.Integer.Long */

`}</style>
       <div className="col-md-6">
 <div>
 <div>
<h3 id="leanpub-auto-reactdom">ReactDOM</h3>

<p className="it"> Antes de continuar con el componente App, es posible que desees ver dónde se utiliza. Se encuentra en tu punto de entrada al mundo React: el archivo <em>src/index.js</em>. </p>

<p className="p">Before you continue with the App component, you might want to see where it is used. It is located in your entry point to the React world: the <em>src/index.js</em> file.</p>

<figure className="code">
  <figcaption>src/index.js</figcaption>

<div className="highlight"><pre><code></code><code className="kr">import</code> <code className="nx">React</code> <code className="nx">from</code> <code className="s1">'react'</code><code className="p">;</code><br></br>
<code className="kr">import</code> <code className="nx">ReactDOM</code> <code className="nx">from</code> <code className="s1">'react-dom'</code><code className="p">;</code><br></br>
<code className="kr">import</code> <code className="nx">App</code> <code className="nx">from</code> <code className="s1">'./App'</code><code className="p">;</code><br></br>
<code className="kr">import</code> <code className="s1">'./index.css'</code><code className="p">;</code><br></br>
<br></br>
<code className="nx">ReactDOM</code><code className="p">.</code><code className="nx">render</code><code className="p">(</code><br></br>
  <code className="o">&lt;</code><code className="nx">App</code> <code className="o">/&gt;</code><code className="p">,</code><br></br>
  <code className="nb">document</code><code className="p">.</code><code className="nx">getElementById</code><code className="p">(</code><code className="s1">'root'</code><code className="p">)</code><br></br>
<code className="p">);</code>
</pre></div>

</figure>
<p className = "it"> Básicamente <code>ReactDOM.render()</code> utiliza un nodo DOM en tu HTML para reemplazarlo con tu JSX. Así es como puede integrar fácilmente React en cualquier aplicación extranjera. No está prohibido usar <code>ReactDOM.render()</code> varias veces en tu aplicación. Podes usarlo en varios lugares para iniciar la sintaxis simple de JSX, el componente React, varios componentes React o una aplicación completa. </p>

<p className="p">Basically <code>ReactDOM.render()</code> uses a DOM node in your HTML to replace it with your JSX. That’s how you can easily integrate React in every foreign application. It is not forbidden to use <code>ReactDOM.render()</code> multiple times across your application. You can use it at multiple places to bootstrap simple JSX syntax, React  component, multiple React components or a whole application.</p>

<p className="it"><code>ReactDOM.render()</code> espera dos argumentos.</p>

<p className="p"><code>ReactDOM.render()</code> expects two arguments.</p>

<p className = "it"> El primer argumento que se renderiza es JSX. El segundo argumento especifica el lugar donde la aplicación de React se insertará en tu HTML. Espera un elemento con un <code>id='root'</code>. Podes abrir el archivo <em>public/index.html</em> para encontrar el atributo id. </p>

<p className="p">The first argument is JSX that gets rendered. The second argument specifies the place where the React application hooks into your HTML. It expects an element with an <code>id='root'</code>. You can open your <em>public/index.html</em> file to find the id attribute.</p>

<p className = "it"> En la implementación <code>ReactDOM.render()</code> toma tu componente App. Sin embargo, sería bueno pasar simple JSX, siempre y cuando sea JSX. No tiene que ser una instancia de un componente. </p>

<p className="p">In the implementation <code>ReactDOM.render()</code> already takes your App component. However, it would be fine to pass simpler JSX as long as it is JSX. It doesn’t have to be an instantiation of a component.</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>

<div className="highlight"><pre><code></code><code className="nx">ReactDOM</code><code className="p">.</code><code className="nx">render</code><code className="p">(</code><br></br>
  <code className="o">&lt;</code><code className="nx">h1</code><code className="o">&gt;</code><code className="nx">Hello</code> <code className="nx">React</code> <code className="nx">World</code><code className="o">&lt;</code><code className="err">/h1&gt;,</code><br></br>
  <code className="nb">document</code><code className="p">.</code><code className="nx">getElementById</code><code className="p">(</code><code className="s1">'root'</code><code className="p">)</code><br></br>
<code className="p">);</code>
</pre></div>

</figure>

<h4 id="leanpub-auto-exercises-6">Exercises:</h4>

<ul>
<li className="it">Abrí el <em>public/index.html</em> para ver dónde se conectan las aplicaciones React en tu HTML </li>
  <li className="p">open the <em>public/index.html</em> to see where the React applications hooks into your HTML</li>
  <li className="it">lee más acerca de <a href="https://facebook.github.io/react/docs/rendering-elements.html">la renderización de los elementos en React</a></li>
  <li className="p">read more about <a href="https://facebook.github.io/react/docs/rendering-elements.html">rendering elements in React</a>
</li>
</ul>


</div>	
<div>
<h3 id="leanpub-auto-hot-module-reloading">Hot Module Reloading</h3>

<p className="it">Hay una cosa que podes hacer en el archivo <em>src/index.js</em> para mejorar tu experiencia como desarrollador.</p>

<p className="p">There is one thing that you can do in the <em>src/index.js</em> file to improve your experience as a developer.</p>

<p className="it">En <em>create-react-app</em> ya es una ventaja que el navegador actualiza automáticamente la página cuando cambies tu código fuente. Probalo cambiando la variable <code>helloWorld</code> en tu archivo <em>src/App.js</em>. El navegador debe actualizar la página. Pero se puede hacer mejor.</p>

<p className="p">In <em>create-react-app</em> it is already an advantage that the browser automatically refreshes the page when you change your source code. Try it by changing the <code>helloWorld</code> variable in your <em>src/App.js</em> file. The browser should refresh the page. But you can do better.</p>

<p className="it">Hot Module Reloading (HMR) es una herramienta para recargar tu aplicación en el navegador. El navegador no realiza una actualización de la página. Se puede activar fácilmente en <em>create-react-app</em>. En tu <em>src/index.js</em> - tu punto de entrada React  - hay que añadir una pequeña configuración.</p>

<p className="p">Hot Module Reloading (HMR) is a tool to reload your application in the browser. The browser doesn’t perform a page refresh. You can easily activate it in <em>create-react-app</em>. In your <em>src/index.js</em> - your entry point to React - you have to add one little configuration.</p>

<figure className="code">
  <figcaption>src/index.js</figcaption>

<div className="highlight"><pre>import React from 'react';<br></br>
import ReactDOM from 'react-dom';<br></br>
import App from './App';<br></br>
import './index.css';<br></br>
<br></br>
ReactDOM.render(<br></br>
  &lt;App /&gt;,<br></br>
  document.getElementById('root')<br></br>
);<br></br>
<br></br>
<code className="uil">if (module.hot) &#123;<br></br>
</code><code className="uil">  module.hot.accept()<br></br>
</code><code className="uil">&#125;
</code></pre></div>

</figure>

<p className="it">Así es. Intentalo de nuevo para cambiar la variable <code>hellowWorld</code> en tu archivo <em>src/App.js</em>. El navegador no debe llevar a cabo una actualización de la página, pero vuelve a cargar la aplicación y muestra la salida correcta.</p>

<p className="p">That’s it. Try again to change the <code>hellowWorld</code> variable in your <em>src/App.js</em> file. The browser shouldn’t perform a page refresh, but the application reloads and shows the correct output.</p>

<p className="it">HMR viene con múltiples ventajas.</p>

<p className="p">HMR comes with multiple advantages.</p>

<p className="it">Imaginate que estás depurando el código con declaraciones <code>console.log()</code>. Estas declaraciones se quedarán en tu consola de desarrollador, a pesar de que cambie tu código, ya que el navegador no actualiza más la página. Eso puede ser conveniente para los propósitos de depuración.</p>

<p className="p">Imagine you are debugging your code with <code>console.log()</code> statements. These statements will stay in your developer console, even though you change your code, because the browser doesn’t refresh the page anymore. That can be convenient for debugging purposes.</p>

<p className="it">En una aplicación cada vez mayor, una actualización de la página retrasa tu productividad. Tenes que esperar a que se cargue la página. Una recarga de la página puede tardar varios segundos en una aplicación de gran tamaño. HMR quita esta desventaja.</p>

<p className="p">In a growing application a page refresh delays your productivity. You have to wait until the page loads. A page reload can take several seconds in a large application. HMR takes away this disadvantage.</p>

<p className="it">El mayor beneficio es que podes mantener el estado de la aplicación con HMR. Imaginate que tenes un cuadro de diálogo en tu aplicación con múltiples pasos y estás en el paso 3. Básicamente se trata de un asistente. Sin HMR que iba a cambiar el código fuente de tu navegador y actualiza la página. Tendrías que abrir el cuadro de diálogo de nuevo y sin tener que navegar desde el paso 1 al paso 3. Con HMR tus estancias de diálogo abiertos en el paso 3. Se mantiene el estado de la aplicación a pesar de los cambios en el código fuente. La aplicación en sí vuelve a cargar, pero no la página.</p>

<p className="p">The biggest benefit is that you can keep the application state with HMR. Imagine you have a dialog in your application with multiple steps and you are at step 3. Basically it is a wizard. Without HMR you would change the source code and your browser refreshes the page. You would have to open the dialog again and would have to navigate from step 1 to step 3. With HMR your dialog stays open at step 3. It keeps the application state even though the source code changes. The application itself reloads, but not the page.</p>

<h4 id="leanpub-auto-exercises-7">Exercises:</h4>

<ul>
  
  <li className="p">change your <em>src/App.js</em> source code a few times to see HMR in action</li>

  
<li className="p">watch the first 10 minutes of <a href="https://www.youtube.com/watch?v=xsSnOQynTHs">Live React: Hot Reloading with Time Travel</a> by Dan Abramov</li>
</ul>


</div>
<div>
<h3 id="leanpub-auto-complex-javascript-in-jsx">Complex JavaScript in JSX</h3>

<p className="it">Volvamos a tu componente App. Hasta el momento renderizó algunas variables primitivas en tu JSX. Ahora comenzarás a renderizar una lista de elementos. La lista tendrá datos artificiales en el comienzo, pero más tarde obtendrás los datos de una API externa. Eso será mucho más excitante.</p>


<p className="p">Let’s get back to your App component. So far you rendered some primitive variables in your JSX. Now you will start to render a list of items. The list will be artificial data in the beginning, but later you will fetch the data from an external API. That will be far more exciting.</p>

<p className="it">En primer lugar tenes que definir la lista de elementos.</p>


<p className="p">First you have to define the list of items.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>import React, &#123; Component &#125; from 'react';<br></br>
import './App.css';<br></br>
<br></br>
<code className="uil">const list = [<br></br>
</code><code className="uil">  &#123;<br></br>
</code><code className="uil">    title: 'React',<br></br>
</code><code className="uil">    url: 'https://facebook.github.io/react/',<br></br>
</code><code className="uil">    author: 'Jordan Walke',<br></br>
</code><code className="uil">    num_comments: 3,<br></br>
</code><code className="uil">    points: 4,<br></br>
</code><code className="uil">    objectID: 0,<br></br>
</code><code className="uil">  &#125;,<br></br>
</code><code className="uil">  &#123;<br></br>
</code><code className="uil">    title: 'Redux',<br></br>
</code><code className="uil">    url: 'https://github.com/reactjs/redux',<br></br>
</code><code className="uil">    author: 'Dan Abramov, Andrew Clark',<br></br>
</code><code className="uil">    num_comments: 2,<br></br>
</code><code className="uil">    points: 5,<br></br>
</code><code className="uil">    objectID: 1,<br></br>
</code><code className="uil">  &#125;,<br></br>
</code><code className="uil">];<br></br>
</code><br></br>
class App extends Component &#123;<br></br>
  ...<br></br>
&#125;<br></br>
</pre></div>

</figure>

<p className="it">Los datos artificiales reflejarán los datos que más tarde buscarás de la API. Un elemento de la lista tiene un título, una URL y un autor. Además viene con un identificador, puntaje (que indica qué tan popular es un artículo) y un recuento de los comentarios.</p>


<p className="p">The artifical data will reflect the data we will fetch later on from the API. An item in the list has a title, an url and a author. Additionally it comes with an identifier, points (which indicate how popular an article is) and a count of comments.</p>

<p className="it">Ahora podes utilizar el código JavaScript integrado en la funcionalidad <code>map</code> en tu JSX. Te permite iterar sobre la lista de elementos para mostrarlos. Como se ha mencionado, vas a utilizar llaves para encapsular la expresión JavaScript en tu JSX.</p>


<p className="p">Now you can use the built-in JavaScript <code>map</code> functionality in your JSX. It enables you to iterate over your list of items to display them. As mentioned, you will use curly braces to encapsulate the JavaScript expression in your JSX.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class App extends Component &#123;<br></br>
<br></br>
  render() &#123;<br></br>
    return (<br></br>
      &lt;div className="App"&gt;<br></br>
<code className="uil">        &#123; list.map(function(item) &#123;<br></br>
</code><code className="uil">          return &lt;div&gt;&#123;item.title&#125;&lt;/div&gt;;<br></br>
</code><code className="uil">        &#125;)&#125;<br></br>
</code>      &lt;/div&gt;<br></br>
    );<br></br>
  &#125;<br></br>
&#125;<br></br>
<br></br>
export default App;
</pre></div>

</figure>

<p className="it">Así es bastante potente en JSX. Por lo general, es posible que hayas utilizado <code>map</code> para convertir una lista de elementos a otra lista de elementos. Esta vez se utiliza <code>map</code> para convertir una lista de elementos a los elementos HTML.</p>


<p className="p">That’s pretty powerful in JSX. Usually you might have used <code>map</code> to convert one list of items to another list of items. This time you use <code>map</code> to convert a list of items to HTML elements.</p>

<p className="it">Hasta ahora, sólo el <code>title</code> va a abrir para cada elemento. Pero vamos a mostrar un poco más de las propiedades de los elementos.</p>


<p className="p">So far, only the <code>title</code> will be displayed for each item. But let’s display some more of the item properties.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class App extends Component &#123;<br></br>
<br></br>
  render() &#123;<br></br>
    return (<br></br>
      &lt;div className="App"&gt;<br></br>
<code className="uil">        &#123; list.map(function(item) &#123;<br></br>
</code><code className="uil">          return (<br></br>
</code><code className="uil">            &lt;div&gt;<br></br>
</code><code className="uil">              &lt;span&gt;<br></br>
</code><code className="uil">                &lt;a href=&#123;item.url&#125;&gt;&#123;item.title&#125;&lt;/a&gt;<br></br>
</code><code className="uil">              &lt;/span&gt;<br></br>
</code><code className="uil">              &lt;span&gt;&#123;item.author&#125;&lt;/span&gt;<br></br>
</code><code className="uil">              &lt;span&gt;&#123;item.num_comments&#125;&lt;/span&gt;<br></br>
</code><code className="uil">              &lt;span&gt;&#123;item.points&#125;&lt;/span&gt;<br></br>
</code><code className="uil">            &lt;/div&gt;<br></br>
</code><code className="uil">          );<br></br>
</code><code className="uil">        &#125;)&#125;<br></br>
</code>      &lt;/div&gt;<br></br>
    );<br></br>
  &#125;<br></br>
&#125;<br></br>
<br></br>
export default App;
</pre></div>

</figure>

<p className="it">Se puede ver cómo la función map esta simplemente inlined en tu JSX. Cada propiedad del elemento aparece en una etiqueta <code>&lt;span&gt;</code>. Por otra parte la propiedad url del elemento se utiliza en el atributo <code>href</code> de la etiqueta de anclaje.</p>


<p className="p">You can see how the map function is simply inlined in your JSX. Each item property is displayed in a <code>&lt;span&gt;</code> tag. Moreover the url property of the item is used in the <code>href</code> attribute of the anchor tag.</p>

<p className="it">React hará todo el trabajo por vos y mostrará cada elemento. Sin embargo, debes añadir un ayudante para que React abrase todo su potencial y mejore su rendimiento. Tenes que asignar un atributo clave para cada elemento de la lista. Sólo de esa manera React es capaz de identificar el añadido, el cambiado y remocion de artículos cuando la lista ha cambiado. Los elementos de la lista artificial vienen con un identificador ya.</p>


<p className="p">React will do all the work for you and display each item. But you should add one helper for React to embrace its full potential and improve its performance. You have to assign a key attribute to each list element. Only that way React is able to identify added, changed and removed items when the list changes. The artificial list items come with an identifier already.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>&#123; list.map(function(item) &#123;<br></br>
  return (<br></br>
<code className="uil">    &lt;div key=&#123;item.objectID&#125;&gt;<br></br>
</code>      &lt;span&gt;<br></br>
        &lt;a href=&#123;item.url&#125;&gt;&#123;item.title&#125;&lt;/a&gt;<br></br>
      &lt;/span&gt;<br></br>
      &lt;span&gt;&#123;item.author&#125;&lt;/span&gt;<br></br>
      &lt;span&gt;&#123;item.num_comments&#125;&lt;/span&gt;<br></br>
      &lt;span&gt;&#123;item.points&#125;&lt;/span&gt;<br></br>
    &lt;/div&gt;<br></br>
  );<br></br>
&#125;)&#125;<br></br>
</pre></div>

</figure>

<p className="it">Debes asegurarte de que el atributo clave es un identificador estable. No cometas el error de utilizar el índice de elemento de la array. El índice de la array no es estable en absoluto. Por ejemplo, cuando la lista cambia su orden, a React se le difícultará la identificación de los elementos correctamente.</p>


<p className="p">You should make sure that the key attribute is a stable identifier. Don’t make the mistake of using the item index in the array. The array index isn’t stable at all. For instance, when the list changes its order, React will have a hard time identifying the items properly.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre><code></code><code className="c1">// don't do this</code><br></br>
<code className="p">&#123;</code> <code className="nx">list</code><code className="p">.</code><code className="nx">map</code><code className="p">(</code><code className="kd">function</code><code className="p">(</code><code className="nx">item</code><code className="p">,</code> <code className="nx">key</code><code className="p">)</code> <code className="p">&#123;</code><br></br>
  <code className="k">return</code> <code className="p">(</code><br></br>
    <code className="o">&lt;</code><code className="nx">div</code> <code className="nx">key</code><code className="o">=</code><code className="p">&#123;</code><code className="nx">key</code><code className="p">&#125;</code><code className="o">&gt;</code><br></br>
      <code className="p">...</code><br></br>
    <code className="o">&lt;</code><code className="err">/div&gt;</code><br></br>
  <code className="p">);</code><br></br>
<code className="p">&#125;)&#125;</code><br></br>
</pre></div>

</figure>

<p className="it">Se están mostrando ambos elementos de la lista ahora. Podes comenzar tu aplicación, abrir el navegador y ver los elementos de la lista mostrada.</p>


<p className="p">You are displaying both list items now. You can start your app, open your browser and see both items of the list displayed.</p>

<h4 id="leanpub-auto-exercises-8">Exercises:</h4>

<ul>
  <li className="it">leer más sobre <a href="https://facebook.github.io/react/docs/lists-and-keys.html">React listas y claves</a>
</li>


<li className="p">read more about <a href="https://facebook.github.io/react/docs/lists-and-keys.html">React lists and keys</a>
</li>

<li className="it">recapitular el <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">estándar de incorporación funcionalidades de array en JavaScript</a>
</li>


<li className="p">recap the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">standard built-in Array functionalities in JavaScript</a>
</li>

<li className="it">utilizar más expresiones de JavaScript por tu cuenta en JSX</li>

<li className="p">use more JavaScript expressions on your own in JSX</li>
</ul>


</div>
<div>
<h3 id="leanpub-auto-es6-arrow-functions">ES6 Arrow Functions</h3>

<p className="it">JavaScript ES6 introdujo las funciones arrow. Una expresión de la funcion arrow es más corta que una expresión de función.</p>

<p className="p">JavaScript ES6 introduced arrow functions. An arrow function expression is shorter than a function expression.</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>

<div className="highlight"><pre><code></code><code className="c1">// function expression</code>
<code className="kd">function</code> <code className="p">()</code> <code className="p">&#123;</code> <code className="p">...</code> <code className="p">&#125;</code><br></br>
<br></br>
<code className="c1">// arrow function expression</code><br></br>
<code className="p">()</code> <code className="o">=&gt;</code> <code className="p">&#123;</code> <code className="p">...</code> <code className="p">&#125;</code>
</pre></div>

</figure>

<p className="it">Pero hay que ser conscientes de tus funcionalidades. Una de ellas es un comportamiento diferente con el objeto <code>this</code>. Una expresión función siempre define su propio objeto <code>this</code>. Las expresiones de función Arrow todavía tienen el objeto <code>this</code> del contexto circundante. No te confundas cuando utilizas <code>this</code> en una función arrow.</p>

<p className="p">But you have to be aware of its functionalities. One of them is a different behavior with the <code>this</code> object. A function expression always defines its own <code>this</code> object. Arrow function expressions still have the <code>this</code> object of the enclosing context. Don’t get confused when using <code>this</code> in an arrow function.</p>

<p className="it">Hay otro hecho valioso acerca de las funciones arrow en relación con el paréntesis. Podes quitar el paréntesis cuando la función obtiene sólo un argumento, pero tenes que mantenerlos cuando se ponen múltiples argumentos.</p>

<p className="p">There is another valuable fact about arrow functions regarding the parenthesis. You can remove the parenthesis when the function gets only one argument, but have to keep them when it gets multiple arguments.</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>
<br></br>
<div className="highlight"><pre><code></code><code className="c1">// allowed</code><br></br>
<code className="nx">item</code> <code className="o">=&gt;</code> <code className="p">&#123;</code> <code className="p">...</code> <code className="p">&#125;</code><br></br>
<br></br>
<code className="c1">// allowed</code><br></br>
<code className="p">(</code><code className="nx">item</code><code className="p">)</code> <code className="o">=&gt;</code> <code className="p">&#123;</code> <code className="p">...</code> <code className="p">&#125;</code>
<br></br>
<code className="c1">// not allowed</code><br></br>
<code className="nx">item</code><code className="p">,</code> <code className="nx">key</code> <code className="o">=&gt;</code> <code className="p">&#123;</code> <code className="p">...</code> <code className="p">&#125;</code>
<br></br>
<code className="c1">// allowed</code><br></br>
<code className="p">(</code><code className="nx">item</code><code className="p">,</code> <code className="nx">key</code><code className="p">)</code> <code className="o">=&gt;</code> <code className="p">&#123;</code> <code className="p">...</code> <code className="p">&#125;</code>
</pre></div>

</figure>

<p className="it">Sin embargo, vamos a echar un vistazo a la función <code>map</code>. Podes escribir de manera más concisa con una funcion arrow ES6.</p>

<p className="p">However, let’s have a look at the <code>map</code> function. You can write it more concisely with an ES6 arrow function.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre><code className="uil">&#123; list.map(item =&gt; &#123;<br></br>
</code>  return (<br></br>
    &lt;div key=&#123;item.objectID&#125;&gt;<br></br>
      &lt;span&gt;<br></br>
        &lt;a href=&#123;item.url&#125;&gt;&#123;item.title&#125;&lt;/a&gt;<br></br>
      &lt;/span&gt;<br></br>
      &lt;span&gt;&#123;item.author&#125;&lt;/span&gt;<br></br>
      &lt;span&gt;&#123;item.num_comments&#125;&lt;/span&gt;<br></br>
      &lt;span&gt;&#123;item.points&#125;&lt;/span&gt;<br></br>
    &lt;/div&gt;<br></br>
  );<br></br>
&#125;)&#125;
</pre></div>

</figure>

<p className="it">Además, podes quitar el <em>block body</em> de la funcion arrow ES6. En un <em>concise body</em> rendimiento, implícito se une de este modo podes quitar la instrucción return. Eso va a ocurrir con más frecuencia en el libro, así que asegurate de entender la diferencia entre un cuerpo y un un body y un concise body.</p>

<p className="p">Additionally you can remove the <em>block body</em> of the ES6 arrow function. In a <em>concise body</em> an implicit return is attached thus you can remove the return statement. That will happen more often in the book, so be sure to understand the difference between a block body and a concise body.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre><code className="uil">&#123; list.map(item =&gt;<br></br>
</code>  &lt;div key=&#123;item.objectID&#125;&gt;<br></br>
    &lt;span&gt;<br></br>
      &lt;a href=&#123;item.url&#125;&gt;&#123;item.title&#125;&lt;/a&gt;<br></br>
    &lt;/span&gt;<br></br>
    &lt;span&gt;&#123;item.author&#125;&lt;/span&gt;<br></br>
    &lt;span&gt;&#123;item.num_comments&#125;&lt;/span&gt;<br></br>
    &lt;span&gt;&#123;item.points&#125;&lt;/span&gt;<br></br>
  &lt;/div&gt;<br></br>
<code className="uil">)&#125;
</code></pre></div>

</figure>

<p className="it">Tu JSX parece más conciso y fácil de leer ahora. Se omite la declaración de la función, las llaves y la instrucción return.</p>

<p className="p">Your JSX looks more concise and readable now. It omits the function statement, the curly braces and the return statement.</p>

<h4 id="leanpub-auto-exercises-9">Exercises:</h4>

<ul>
<li className="it">leer más acerca de <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions">las funciones arrow de ES6</a>
</li>
  <li className="p">read more about <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions">ES6 arrow functions</a>
</li>
</ul>


</div>
 <div>
<h3 id="leanpub-auto-es6-classes">ES6 Classes</h3>

<p className = "it"> Las clases introducidas en JavaScript ES6. Una clase se utiliza comúnmente en lenguajes de programación orientados a objetos. JavaScript era y es muy flexible en sus paradigmas de programación. Podes hacer la programación funcional y la programación orientada a objetos de lado a lado para yus casos de uso particulares. </p>

<p className="p">JavaScript ES6 introduced classes. A class is commonly used in object-oriented programming languages. JavaScript was and is very flexible in its programming paradigms. You can do functional programming and object-oriented programming side by side for their particular use cases.</p>

<p className="it">A pesar de que React abarca la programación funcional, por ejemplo, con las estructuras de datos inmutables, las clases se utilizan para declarar componentes. Se llaman los componentes de clase ES6. React mezcla las partes buenas de ambos paradigmas de programación.</p>

<p className="p">Even though React embraces functional programming, for instance with immutable data structures, classes are used to declare components. They are called ES6 class components. React mixes the good parts of both programming paradigms.</p>

<p className="it">Vamos a considerar la siguiente clase de desarrollador para examinar una clase de JavaScript ES6 sin pensar en un componente.</p>

<p className="p">Let’s consider the following Developer class to examine a JavaScript ES6 class without thinking about a component.</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>

<div className="highlight"><pre><code></code><code className="kr">class</code> <code className="nx">Developer</code> <code className="p">&#123;</code><br></br>
  <code className="nx">constructor</code><code className="p">(</code><code className="nx">firstname</code><code className="p">,</code> <code className="nx">lastname</code><code className="p">)</code> <code className="p">&#123;</code><br></br>
    <code className="k">this</code><code className="p">.</code><code className="nx">firstname</code> <code className="o">=</code> <code className="nx">firstname</code><code className="p">;</code><br></br>
    <code className="k">this</code><code className="p">.</code><code className="nx">lastname</code> <code className="o">=</code> <code className="nx">lastname</code><code className="p">;</code><br></br>
  <code className="p">&#125;</code><br></br>
<br></br>
  <code className="nx">getName</code><code className="p">()</code> <code className="p">&#123;</code>
    <code className="k">return</code> <code className="k">this</code><code className="p">.</code><code className="nx">firstname</code> <code className="o">+</code> <code className="s1">' '</code> <code className="o">+</code> <code className="k">this</code><code className="p">.</code><code className="nx">lastname</code><code className="p">;</code><br></br>
  <code className="p">&#125;</code><br></br>
<code className="p">&#125;</code>
</pre></div>

</figure>

<p className="it">Una clase tiene un constructor para que sea instanciable. El constructor puede tomar argumentos para asignarlo a la instancia de clase. Además a una clase podes definirle funciones. Dado que la función está asociada con una clase, se llama un método. A veces se hace referencia como método de clase.</p>

<p className="p">A class has a constructor to make it instantiable. The constructor can take arguments to assign it to the class instance. Additionally a class can define functions. Because the function is associated with a class, it is called a method. Sometimes it is referenced as class method.</p>

<p className="it">La clase Developer es solamente la declaración de clase. Se pueden  crear múltiples instancias de la clase mediante la invocación de la misma. Es similar al componente de clase ES6, que tiene una declaración, pero hay que usarlo en otro lugar para crear instancias de ella.</p>

<p className="p">The Developer class is only the class declaration. You can create multiple instances of the class by invoking it. It is similar to the ES6 class component, that has a declaration, but you have to use it somewhere else to instantiate it.</p>

<p className="it">Vamos a ver cómo podes crear una instancia de la clase y cómo podes utilizar sus métodos.</p>

<p className="p">Let’s see how you can instantiate the class and how you can use its methods.</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>

<div className="highlight"><pre><code></code><code className="kr">const</code> <code className="nx">robin</code> <code className="o">=</code> <code className="k">new</code> <code className="nx">Developer</code><code className="p">(</code><code className="s1">'Robin'</code><code className="p">,</code> <code className="s1">'Wieruch'</code><code className="p">);</code><br></br>
<code className="nx">console</code><code className="p">.</code><code className="nx">log</code><code className="p">(</code><code className="nx">robin</code><code className="p">.</code><code className="nx">getName</code><code className="p">());</code><br></br>
<code className="c1">// output: Robin Wieruch</code>
</pre></div>

</figure>

<p className="it">React utiliza clases JavaScript ES6 para los componentes de clase ES6. Ya has utilizado un componente de clase ES6.</p>

<p className="p">React uses JavaScript ES6 classes for ES6 class components. You already used one ES6 class component.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre><code></code><code className="kr">import</code> <code className="nx">React</code><code className="p">,</code> <code className="p">&#123;</code> <code className="nx">Component</code> <code className="p">&#125;</code> <code className="nx">from</code> <code className="s1">'react'</code><code className="p">;</code><br></br>
<br></br>
<code className="p">...</code><br></br>
<br></br>
<code className="kr">class</code> <code className="nx">App</code> <code className="kr">extends</code> <code className="nx">Component</code> <code className="p">&#123;</code><br></br>
  <code className="nx">render</code><code className="p">()</code> <code className="p">&#123;</code><br></br>
    <code className="p">...</code><br></br>
  <code className="p">&#125;</code><br></br>
<code className="p">&#125;</code>
</pre></div>

</figure>

<p className="it">La clase App se extiende desde <code>Component</code>. Básicamente declaras el componente App, pero se extiende a partir de otro componente. Qué significa que se extiende? En la programación orientada a objetos tenes el principio de la herencia. Se utiliza para pasar por encima de las funcionalidades de una clase a otra clase.</p>




<p className="p">The App class extends from <code>Component</code>. Basically you declare the App component, but it extends from another component. What does extend mean? In object-oriented programming you have the principle of inheritance. It is used to pass over functionalities from one class to another class.</p>

<p className="it">La clase App amplía la funcionalidad de la clase de componentes. Para ser más específicos, hereda las funcionalidades de la clase Component. El componente se utiliza para extender una clase básica ES6 a una clase de componente ES6. Tiene todas las funcionalidades de un componente necesita tener. Una de estas funcionalidades, un método, que ya han utilizado: el método <code>render()</code>. Sin embargo, usted aprenderás acerca más funcionalidades.</p>

<p className="p">The App class extends functionality from the Component class. To be more specific, it inherits functionalities from the Component class. The Component is used to extend a basic ES6 class to a ES6 component class. It has all the functionalities a component needs to have. One of these functionalities, a method, you have already used: the <code>render()</code> method. But you will learn about more functionalities.</p>

<p className="it">La clase <code>Component</code> encapsula todas las funcionalidades React que un desarrollador no necesita ver. Se permite a los desarrolladores usar clases como componentes en React.</p>

<p className="p">The <code>Component</code> class encapsulates all the React functionalities that a developer doesn’t need to see. It enables developers to use classes as components in React.</p>

<p className="it">Los métodos que un <code>Component</code> React expone son la interfaz pública. Uno de estos métodos tiene que ser sobrescrito, los otros no necesitan ser sobrescritos. Aprenderás acerca de estos últimas cuando el libro llege a métodos de ciclo de vida en un capítulo posterior. El método <code>render()</code> tiene que ser sobrescrito, ya que define la salida de un <code>Component</code> React.</p>



<p className="p">The methods React  <code>Component</code> exposes is the public interface. One of these methods has to be overwritten, the others don’t need to be overwritten. You will learn about the latter ones when the book arrives at lifecycle methods in a later chapter. The <code>render()</code> method has to be overwritten, because it defines the output of React  <code>Component</code>.</p>

<p className="it">Ahora ya sabes lo básico alrededor de las clases en JavaScript ES6 y la forma en que se utilizan en React para extenderlas a los componentes. Como ya he dicho, podrás aprender más acerca de los métodos de componentes cuando el libro describa los métodos React de ciclo de vida.</p>



<p className="p">Now you know the basics around JavaScript ES6 classes and how they are used in React to extend them to components. As I said, you will learn more about the Component methods when the book describes React lifecycle methods.</p>

<h4 id="leanpub-auto-exercises-10">Exercises:</h4>

<ul>
  <li className="p">read more about <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes">ES6 classes</a>
</li>
</ul>

<div className="page-break"></div>
<p className="it">Has aprendido a arrancar tu propia aplicación React! Recapitulemos los últimos capítulos:</p>

<p className="p">You have learned to bootstrap your own React application! Let’s recap the last chapters:</p>

<ul>
  <li className="p">React
    <ul>
    <li className="it">Create-React-app bootstraps una aplicación React</li>
      <li className="p">create-react-app bootstraps React  application</li>
      <li className="it">JSX se mezcla HTML y JavaScript para definir componentes React</li>
      <li className="p">JSX mixes up HTML and JavaScript to define React components</li>
      <li className="it">componentes, instancias y elementos son cosas diferentes</li>
      <li className="p">components, instances and elements are different things</li>
      <li className="it">ReactDOM.render() es un punto de entrada para una aplicación React</li>
      <li className="p">ReactDOM.render() is an entry point for React  application</li>
      <li className="it">el incorporado en JavaScript de funcionalidades que se pueden  utilizar en JSX</li>
      <li className="p">built-in JavaScript functionalities can be used in JSX
        <ul>
        <li className="it">podes utilizar map para hacer una lista de elementos como elementos HTML</li>
          <li className="p">map can be used to render a list of items as HTML elements</li>
        </ul>
      </li>
    </ul>
  </li>
  <li className="p">ES6
    <ul>
    <li className="it">declaraciones de variables con const y let en casos de uso particulares</li>
      <li className="p">variable declarations with const and let for particular use cases</li>
      <li className="it">las funciones arrow se pueden  utilizar para acortar tus declaraciones de funciones</li>
      <li className="p">arrow functions can be used to shorten your function declarations</li>
      <li className="it">las clases se utilizan para definir los componentes en React</li>
      <li className="p">classes are used to define components in React</li>
    </ul>
  </li>
</ul>

<p className="it">Tiene sentido hacer una pausa en este punto. Internalizar los aprendizajes y aplicarlos. Podes experimentar con el código fuente que has escrito hasta ahora.</p>

<p className="p">It makes sense to take a break at this point. Internalize the learnings and apply them on your own. You can experiment with the source code you have written so far.</p>

<p className="it">podes encontrar el código fuente en el <a href="https://github.com/rwieruch/hackernews-client/tree/0c5a701170dcc72fe68bdd594df3a6522f58fbb3">repositorio oficial</a>.</p>

<p className="p">You can find the source code in the <a href="https://github.com/rwieruch/hackernews-client/tree/0c5a701170dcc72fe68bdd594df3a6522f58fbb3">official repository</a>.</p>



</div>
<div>
<h2 id="leanpub-auto-basics-in-react">Basics in React</h2>
<p className="it">El capítulo te guiará a través de los fundamentos de React. Cubre el estado y las interacciones de los componentes, ya que los componentes estáticos son un poco aburridos, ¿no es así? Además, aprenderás acerca de las diferentes formas de declarar un componente y cómo mantener los componentes composeable y reutilizable. Estate preparado para dar vida a tus componentes.</p>
<p className="p">The chapter will guide you through the basics of React. It covers state and interactions in components, because static components are a bit dull, aren’t they? Additionally you will learn about the different ways to declare a component and how to keep components composeable and reusable. Be prepared to breathe life into your components.</p>


</div>






 </div>

 </div>
  </Layout>
)
