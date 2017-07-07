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
 <div>
<h3 id="leanpub-auto-reactdom">ReactDOM</h3>

<p className="it"> Antes de continuar con el componente App, es posible que desees ver dónde se utiliza. Se encuentra en tu punto de entrada al mundo React: el archivo <em>src/index.js</em>. </p>

<p className="p">Before you continue with the App component, you might want to see where it is used. It is located in your entry point to the React world: the <em>src/index.js</em> file.</p>

<figure class="code">
  <figcaption>src/index.js</figcaption>

<div class="highlight"><pre><code></code><code class="kr">import</code> <code class="nx">React</code> <code class="nx">from</code> <code class="s1">'react'</code><code class="p">;</code><br></br>
<code class="kr">import</code> <code class="nx">ReactDOM</code> <code class="nx">from</code> <code class="s1">'react-dom'</code><code class="p">;</code><br></br>
<code class="kr">import</code> <code class="nx">App</code> <code class="nx">from</code> <code class="s1">'./App'</code><code class="p">;</code><br></br>
<code class="kr">import</code> <code class="s1">'./index.css'</code><code class="p">;</code><br></br>
<br></br>
<code class="nx">ReactDOM</code><code class="p">.</code><code class="nx">render</code><code class="p">(</code><br></br>
  <code class="o">&lt;</code><code class="nx">App</code> <code class="o">/&gt;</code><code class="p">,</code><br></br>
  <code class="nb">document</code><code class="p">.</code><code class="nx">getElementById</code><code class="p">(</code><code class="s1">'root'</code><code class="p">)</code><br></br>
<code class="p">);</code>
</pre></div>

</figure>
<p className = "it"> Básicamente <code>ReactDOM.render()</code> utiliza un nodo DOM en su HTML para reemplazarlo con su JSX. Así es como puede integrar fácilmente React en cualquier aplicación extranjera. No está prohibido usar <code>ReactDOM.render()</code> varias veces en tu aplicación. Podes usarlo en varios lugares para iniciar la sintaxis simple de JSX, el componente React, varios componentes React o una aplicación completa. </p>

<p className="p">Basically <code>ReactDOM.render()</code> uses a DOM node in your HTML to replace it with your JSX. That’s how you can easily integrate React in every foreign application. It is not forbidden to use <code>ReactDOM.render()</code> multiple times across your application. You can use it at multiple places to bootstrap simple JSX syntax, React  component, multiple React components or a whole application.</p>

<p className="p"><code>ReactDOM.render()</code> expects two arguments.</p>

<p className = "it"> El primer argumento que se renderiza es JSX. El segundo argumento especifica el lugar donde la aplicación de React se insertará en tu HTML. Espera un elemento con un <code>id='root'</code>. Podes abrir el archivo <em>public/index.html</em> para encontrar el atributo id. </p>

<p className="p">The first argument is JSX that gets rendered. The second argument specifies the place where the React application hooks into your HTML. It expects an element with an <code>id='root'</code>. You can open your <em>public/index.html</em> file to find the id attribute.</p>

<p className = "it"> En la implementación <code>ReactDOM.render()</code> ya toma tu componente App. Sin embargo, sería bueno pasar JSX más simple, siempre y cuando sea JSX. No tiene que ser una instancia de un componente. </p>

<p className="p">In the implementation <code>ReactDOM.render()</code> already takes your App component. However, it would be fine to pass simpler JSX as long as it is JSX. It doesn’t have to be an instantiation of a component.</p>

<figure class="code">
  <figcaption>Code Playground</figcaption>

<div class="highlight"><pre><code></code><code class="nx">ReactDOM</code><code class="p">.</code><code class="nx">render</code><code class="p">(</code>
  <code class="o">&lt;</code><code class="nx">h1</code><code class="o">&gt;</code><code class="nx">Hello</code> <code class="nx">React</code> <code class="nx">World</code><code class="o">&lt;</code><code class="err">/h1&gt;,</code>
  <code class="nb">document</code><code class="p">.</code><code class="nx">getElementById</code><code class="p">(</code><code class="s1">'root'</code><code class="p">)</code>
<code class="p">);</code>
</pre></div>

</figure>

<h4 id="leanpub-auto-exercises-6">Exercises:</h4>

<ul>
<li>Abrí el <em>public/index.html</em> para ver dónde se conectan las aplicaciones React en tu HTML </li>
  <li>open the <em>public/index.html</em> to see where the React applications hooks into your HTML</li>
  <li>read more about <a href="https://facebook.github.io/react/docs/rendering-elements.html">rendering elements in React</a>
</li>
</ul>


</div>	
<div>
<h3 id="leanpub-auto-hot-module-reloading">Hot Module Reloading</h3>

<p className="it">Hay una cosa que se podes hacer en el <em>index.js src /</em> archivo para mejorar su experiencia como desarrollador.</p>

<p>There is one thing that you can do in the <em>src/index.js</em> file to improve your experience as a developer.</p>

<p className="it">En <em>crear una aplicación React</em> ya es una ventaja que el navegador se actualiza automáticamente la página cuando cambie tu código fuente. Probarlo cambiando la <code>helloWorld</code> variable en su <em>/ app.js src</em> archivo. El navegador debes actualizar la página. Pero se podes hacer mejor.</p>

<p>In <em>create-react-app</em> it is already an advantage that the browser automatically refreshes the page when you change your source code. Try it by changing the <code>helloWorld</code> variable in your <em>src/App.js</em> file. The browser should refresh the page. But you can do better.</p>

<p className="it">Módulo caliente Recarga (HMR) es una herramienta para recargar tu aplicaciónen el navegador. El navegador no realiza una actualización de la página. Se podes activar fácilmente en <em>crear una aplicación React</em>. En tus <em>src / index.js</em> - su punto de entrada parReact  - hay que añadir una pequeña configuración.</p>

<p>Hot Module Reloading (HMR) is a tool to reload your application in the browser. The browser doesn’t perform a page refresh. You can easily activate it in <em>create-react-app</em>. In your <em>src/index.js</em> - your entry point to React - you have to add one little configuration.</p>

<figure class="code">
  <figcaption>src/index.js</figcaption>

<div class="highlight"><pre>import React from 'react';<br></br>
import ReactDOM from 'react-dom';<br></br>
import App from './App';<br></br>
import './index.css';<br></br>
<br></br>
ReactDOM.render(<br></br>
  &lt;App /&gt;,<br></br>
  document.getElementById('root')<br></br>
);<br></br>
<br></br>
<code class="uil">if (module.hot) &#123;<br></br>
</code><code class="uil">  module.hot.accept()<br></br>
</code><code class="uil">&#125;
</code></pre></div>

</figure>

<p className="it">Eso es. Inténtelo de nuevo para cambiar la <code>hellowWorld</code> variable en su <em>/ app.js src</em> archivo. El navegador no debes llevar a cabo una actualización de la página, pero vuelve a cargar la aplicación y muestra la salida correcta.</p>

<p>That’s it. Try again to change the <code>hellowWorld</code> variable in your <em>src/App.js</em> file. The browser shouldn’t perform a page refresh, but the application reloads and shows the correct output.</p>

<p className="it">HMR viene con múltiples ventajas.</p>

<p>HMR comes with multiple advantages.</p>

<p className="it">Imagínese que estás depurando el código con <code>console.log()</code> declaraciones. Estas declaraciones se quedarán en su consola de desarrollador, a pesar de que cambie tu código, ya que el navegador no se actualiza la página más. Eso podes ser conveniente para los propósitos de depuración.</p>

<p>Imagine you are debugging your code with <code>console.log()</code> statements. These statements will stay in your developer console, even though you change your code, because the browser doesn’t refresh the page anymore. That can be convenient for debugging purposes.</p>

<p className="it">En una aplicación cada vez mayor de una actualización de la página retrasa su productividad. Vos tiene que esperar a que se cargue la página. Una recarga de la página podes tardar varios segundos en una aplicación de gran tamaño. HMR quita esta desventaja.</p>

<p>In a growing application a page refresh delays your productivity. You have to wait until the page loads. A page reload can take several seconds in a large application. HMR takes away this disadvantage.</p>

<p className="it">El mayor beneficio es que se podes mantener el estado de la aplicación con HMR. Imagine que tiene un cuadro de diálogo en tu aplicacióncon múltiples pasos y estás en el paso 3. Básicamente se trata de un asistente. Sin HMR que iba a cambiar el código fuente de su navegador y actualiza la página. Tendrías que abrir el cuadro de diálogo de nuevo y sin tener que navegar desde el paso 1 al paso 3. Con HMR tus estancias de diálogo abiertos en el paso 3. Se mantiene el estado de la aplicación a pesar de que los cambios en el código fuente. La aplicación en sí vuelve a cargar, pero no la página.</p>

<p>The biggest benefit is that you can keep the application state with HMR. Imagine you have a dialog in your application with multiple steps and you are at step 3. Basically it is a wizard. Without HMR you would change the source code and your browser refreshes the page. You would have to open the dialog again and would have to navigate from step 1 to step 3. With HMR your dialog stays open at step 3. It keeps the application state even though the source code changes. The application itself reloads, but not the page.</p>

<h4 id="leanpub-auto-exercises-7">Exercises:</h4>

<ul>
  <li className="it">abrir la carpeta <em>public/index.html</em> para ver donde el React aplicaciones engancha en su HTML</li>
  

  <li>change your <em>src/App.js</em> source code a few times to see HMR in action</li>
  <li className="it">leer más acerca de <a href="https://facebook.github.io/react/docs/rendering-elements.html">la prestación de los elementos en React</a>
</li>
<li>watch the first 10 minutes of <a href="https://www.youtube.com/watch?v=xsSnOQynTHs">Live React: Hot Reloading with Time Travel</a> by Dan Abramov</li>
</ul>


</div>
<div>
<h3 id="leanpub-auto-complex-javascript-in-jsx">Complex JavaScript in JSX</h3>

<p className="it">Volvamos a su componente de aplicación. Hasta el momento que renderizó algunas variables primitivas en su JSX. Ahora usted comenzará a hacer una lista de elementos. La lista estará datos artificiales en el comienzo, pero más tarde se obtendrás los datos de una API externa. Eso será mucho más excitante.</p>


<p>Let’s get back to your App component. So far you rendered some primitive variables in your JSX. Now you will start to render a list of items. The list will be artificial data in the beginning, but later you will fetch the data from an external API. That will be far more exciting.</p>

<p className="it">En primer lugar tiene que definir la lista de elementos.</p>


<p>First you have to define the list of items.</p>

<figure class="code">
  <figcaption>src/App.js</figcaption>

<div class="highlight"><pre>import React, &#123; Component &#125; from 'react';<br></br>
import './App.css';<br></br>
<br></br>
<code class="uil">const list = [<br></br>
</code><code class="uil">  &#123;<br></br>
</code><code class="uil">    title: 'React',<br></br>
</code><code class="uil">    url: 'https://facebook.github.io/react/',<br></br>
</code><code class="uil">    author: 'Jordan Walke',<br></br>
</code><code class="uil">    num_comments: 3,<br></br>
</code><code class="uil">    points: 4,<br></br>
</code><code class="uil">    objectID: 0,<br></br>
</code><code class="uil">  &#125;,<br></br>
</code><code class="uil">  &#123;<br></br>
</code><code class="uil">    title: 'Redux',<br></br>
</code><code class="uil">    url: 'https://github.com/reactjs/redux',<br></br>
</code><code class="uil">    author: 'Dan Abramov, Andrew Clark',<br></br>
</code><code class="uil">    num_comments: 2,<br></br>
</code><code class="uil">    points: 5,<br></br>
</code><code class="uil">    objectID: 1,<br></br>
</code><code class="uil">  &#125;,<br></br>
</code><code class="uil">];<br></br>
</code><br></br>
class App extends Component &#123;<br></br>
  ...<br></br>
&#125;<br></br>
</pre></div>

</figure>

<p className="it">Los datos artificiales reflejarán los datos que buscará más tarde de la API. Un elemento de la lista tiene un título, una URL y un autor. Además viene con un identificador, puntos (que indican qué tan popular es un artículo) y un recuento de los comentarios.</p>


<p>The artifical data will reflect the data we will fetch later on from the API. An item in the list has a title, an url and a author. Additionally it comes with an identifier, points (which indicate how popular an article is) and a count of comments.</p>

<p className="it">Ahora podes utilizar el código JavaScript integrado en <code>map</code> la funcionalidad en su JSX. Le permite iterar sobre la lista de elementos para mostrarlos. Como se ha mencionado, que va a utilizar llaves para encapsular la expresión JavaScript en su JSX.</p>


<p>Now you can use the built-in JavaScript <code>map</code> functionality in your JSX. It enables you to iterate over your list of items to display them. As mentioned, you will use curly braces to encapsulate the JavaScript expression in your JSX.</p>

<figure class="code">
  <figcaption>src/App.js</figcaption>

<div class="highlight"><pre>class App extends Component &#123;<br></br>
<br></br>
  render() &#123;<br></br>
    return (<br></br>
      &lt;div className="App"&gt;<br></br>
<code class="uil">        &#123; list.map(function(item) &#123;<br></br>
</code><code class="uil">          return &lt;div&gt;&#123;item.title&#125;&lt;/div&gt;;<br></br>
</code><code class="uil">        &#125;)&#125;<br></br>
</code>      &lt;/div&gt;<br></br>
    );<br></br>
  &#125;<br></br>
&#125;<br></br>
<br></br>
export default App;
</pre></div>

</figure>

<p className="it">Eso es bastante potente en JSX. Por lo general, es posible que haya utilizado <code>map</code> para convertir una lista de elementos a otra lista de elementos. Esta vez se utiliza <code>map</code> para convertir una lista de elementos a los elementos HTML.</p>


<p>That’s pretty powerful in JSX. Usually you might have used <code>map</code> to convert one list of items to another list of items. This time you use <code>map</code> to convert a list of items to HTML elements.</p>

<p className="it">Hasta ahora, sólo la <code>title</code> va a abrir para cada elemento. Pero vamos a mostrar un poco más de las propiedades de los elementos.</p>


<p>So far, only the <code>title</code> will be displayed for each item. But let’s display some more of the item properties.</p>

<figure class="code">
  <figcaption>src/App.js</figcaption>

<div class="highlight"><pre>class App extends Component &#123;

  render() &#123;
    return (
      &lt;div className="App"&gt;
<code class="uil">        &#123; list.map(function(item) &#123;
</code><code class="uil">          return (
</code><code class="uil">            &lt;div&gt;<br></br>
</code><code class="uil">              &lt;span&gt;<br></br>
</code><code class="uil">                &lt;a href=&#123;item.url&#125;&gt;&#123;item.title&#125;&lt;/a&gt;<br></br>
</code><code class="uil">              &lt;/span&gt;<br></br>
</code><code class="uil">              &lt;span&gt;&#123;item.author&#125;&lt;/span&gt;<br></br>
</code><code class="uil">              &lt;span&gt;&#123;item.num_comments&#125;&lt;/span&gt;<br></br>
</code><code class="uil">              &lt;span&gt;&#123;item.points&#125;&lt;/span&gt;<br></br>
</code><code class="uil">            &lt;/div&gt;<br></br>
</code><code class="uil">          );<br></br>
</code><code class="uil">        &#125;)&#125;<br></br>
</code>      &lt;/div&gt;<br></br>
    );<br></br>
  &#125;<br></br>
&#125;<br></br>
<br></br>
export default App;
</pre></div>

</figure>

<p className="it">Se podes ver cómo la función de mapa es simplemente inlined en su JSX. Cada propiedad del elemento aparece en una <code>&lt;span&gt;</code> etiqueta. Por otra parte la propiedad url del elemento se utiliza en el <code>href</code> atributo de la etiqueta de anclaje.</p>


<p>You can see how the map function is simply inlined in your JSX. Each item property is displayed in a <code>&lt;span&gt;</code> tag. Moreover the url property of the item is used in the <code>href</code> attribute of the anchor tag.</p>

<p className="it">React hará todo el trabajo por usted y mostrar cada elemento. Sin embargo, se debes añadir un ayudante parReact  a abrazar todo su potencial y mejorar su rendimiento. Tiene que asignar un atributo clave para cada elemento de la lista. Sólo de esa manerReact  es capaz de identificar añadido, cambiado y artículos cuando la lista de cambios eliminado. Los elementos de la lista artificiales vienen con un identificador ya.</p>


<p>React will do all the work for you and display each item. But you should add one helper for React to embrace its full potential and improve its performance. You have to assign a key attribute to each list element. Only that way React is able to identify added, changed and removed items when the list changes. The artificial list items come with an identifier already.</p>

<figure class="code">
  <figcaption>src/App.js</figcaption>

<div class="highlight"><pre>&#123; list.map(function(item) &#123;<br></br>
  return (<br></br>
<code class="uil">    &lt;div key=&#123;item.objectID&#125;&gt;<br></br>
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

<p className="it">Debes asegurarse de que el atributo clave es un identificador estable. No cometa el error de utilizar el índice de elemento de la array. El índice de array no es estable en absoluto. Por ejemplo, cuando la lista cambia su orden, React tendrás un tiempo difícil la identificación de los elementos correctamente.</p>


<p>You should make sure that the key attribute is a stable identifier. Don’t make the mistake of using the item index in the array. The array index isn’t stable at all. For instance, when the list changes its order, React will have a hard time identifying the items properly.</p>

<figure class="code">
  <figcaption>src/App.js</figcaption>

<div class="highlight"><pre><code></code><code class="c1">// don't do this</code><br></br>
<code class="p">&#123;</code> <code class="nx">list</code><code class="p">.</code><code class="nx">map</code><code class="p">(</code><code class="kd">function</code><code class="p">(</code><code class="nx">item</code><code class="p">,</code> <code class="nx">key</code><code class="p">)</code> <code class="p">&#123;</code><br></br>
  <code class="k">return</code> <code class="p">(</code><br></br>
    <code class="o">&lt;</code><code class="nx">div</code> <code class="nx">key</code><code class="o">=</code><code class="p">&#123;</code><code class="nx">key</code><code class="p">&#125;</code><code class="o">&gt;</code><br></br>
      <code class="p">...</code><br></br>
    <code class="o">&lt;</code><code class="err">/div&gt;</code><br></br>
  <code class="p">);</code><br></br>
<code class="p">&#125;)&#125;</code><br></br>
</pre></div>

</figure>

<p className="it">Se está mostrando ambos elementos de la lista ahora. Podes comenzar tu aplicación, abra el navegador y ver tanto los elementos de la lista mostrada.</p>


<p>You are displaying both list items now. You can start your app, open your browser and see both items of the list displayed.</p>

<h4 id="leanpub-auto-exercises-8">Exercises:</h4>

<ul>
  <li className="it">leer más sobre <a href="https://facebook.github.io/react/docs/lists-and-keys.html">React listas y claves</a>
</li>


<li>read more about <a href="https://facebook.github.io/react/docs/lists-and-keys.html">React lists and keys</a>
</li>

<li className="it">recapitular el <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">estándar incorporado funcionalidades de array en JavaScript</a>
</li>


<li>recap the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">standard built-in Array functionalities in JavaScript</a>
</li>

<li className="it">utilizar expresiones de JavaScript más por tu cuenta en JSX</li>

<li>use more JavaScript expressions on your own in JSX</li>
</ul>


</div>
<div>
<h3 id="leanpub-auto-es6-arrow-functions">ES6 Arrow Functions</h3>

<p className="it">JavaScript ES6 introdujo las funciones de dirección. Una expresión de la función de flecha es más corta que una expresión de función.</p>

<p>JavaScript ES6 introduced arrow functions. An arrow function expression is shorter than a function expression.</p>

<figure class="code">
  <figcaption>Code Playground</figcaption>

<div class="highlight"><pre><code></code><code class="c1">// function expression</code>
<code class="kd">function</code> <code class="p">()</code> <code class="p">&#123;</code> <code class="p">...</code> <code class="p">&#125;</code><br></br>
<br></br>
<code class="c1">// arrow function expression</code><br></br>
<code class="p">()</code> <code class="o">=&gt;</code> <code class="p">&#123;</code> <code class="p">...</code> <code class="p">&#125;</code>
</pre></div>

</figure>

<p className="it">Pero hay que ser conscientes de tus funcionalidades. Uno de ellos es un comportamiento diferente con el <code>this</code> objeto. Una expresión función siempre define su propio <code>this</code> objeto. Las expresiones de función Flecha todavía tienen el <code>this</code> objeto del contexto circundante. No se confunda cuando se utiliza <code>this</code> en una función de la flecha.</p>

<p>But you have to be aware of its functionalities. One of them is a different behavior with the <code>this</code> object. A function expression always defines its own <code>this</code> object. Arrow function expressions still have the <code>this</code> object of the enclosing context. Don’t get confused when using <code>this</code> in an arrow function.</p>

<p className="it">Hay otro hecho valiosa acerca de las funciones de dirección en relación con el paréntesis. Se podes quitar el paréntesis cuando la función obtiene sólo un argumento, sino que tienen que mantenerlos cuando se pone múltiples argumentos.</p>

<p>There is another valuable fact about arrow functions regarding the parenthesis. You can remove the parenthesis when the function gets only one argument, but have to keep them when it gets multiple arguments.</p>

<figure class="code">
  <figcaption>Code Playground</figcaption>
<br></br>
<div class="highlight"><pre><code></code><code class="c1">// allowed</code><br></br>
<code class="nx">item</code> <code class="o">=&gt;</code> <code class="p">&#123;</code> <code class="p">...</code> <code class="p">&#125;</code><br></br>
<br></br>
<code class="c1">// allowed</code><br></br>
<code class="p">(</code><code class="nx">item</code><code class="p">)</code> <code class="o">=&gt;</code> <code class="p">&#123;</code> <code class="p">...</code> <code class="p">&#125;</code>
<br></br>
<code class="c1">// not allowed</code><br></br>
<code class="nx">item</code><code class="p">,</code> <code class="nx">key</code> <code class="o">=&gt;</code> <code class="p">&#123;</code> <code class="p">...</code> <code class="p">&#125;</code>
<br></br>
<code class="c1">// allowed</code><br></br>
<code class="p">(</code><code class="nx">item</code><code class="p">,</code> <code class="nx">key</code><code class="p">)</code> <code class="o">=&gt;</code> <code class="p">&#123;</code> <code class="p">...</code> <code class="p">&#125;</code>
</pre></div>

</figure>

<p className="it">Sin embargo, vamos a echar un vistazo a la <code>map</code> función. Se podes escribir de manera más concisa con una función de flecha ES6.</p>

<p>However, let’s have a look at the <code>map</code> function. You can write it more concisely with an ES6 arrow function.</p>

<figure class="code">
  <figcaption>src/App.js</figcaption>

<div class="highlight"><pre><code class="uil">&#123; list.map(item =&gt; &#123;<br></br>
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

<p className="it">Además, podes quitar el <em>cuerpo del bloque</em> de la función de flecha ES6. En un <em>cuerpo concisa</em> rendimiento, implícito se une de este modo se podes quitar la instrucción de retorno. Eso va a ocurrir con más frecuencia en el libro, así que asegúrese de entender la diferencia entre un cuerpo y un cuerpo de bloque concisa.</p>

<p>Additionally you can remove the <em>block body</em> of the ES6 arrow function. In a <em>concise body</em> an implicit return is attached thus you can remove the return statement. That will happen more often in the book, so be sure to understand the difference between a block body and a concise body.</p>

<figure class="code">
  <figcaption>src/App.js</figcaption>

<div class="highlight"><pre><code class="uil">&#123; list.map(item =&gt;<br></br>
</code>  &lt;div key=&#123;item.objectID&#125;&gt;<br></br>
    &lt;span&gt;<br></br>
      &lt;a href=&#123;item.url&#125;&gt;&#123;item.title&#125;&lt;/a&gt;<br></br>
    &lt;/span&gt;<br></br>
    &lt;span&gt;&#123;item.author&#125;&lt;/span&gt;<br></br>
    &lt;span&gt;&#123;item.num_comments&#125;&lt;/span&gt;<br></br>
    &lt;span&gt;&#123;item.points&#125;&lt;/span&gt;<br></br>
  &lt;/div&gt;<br></br>
<code class="uil">)&#125;
</code></pre></div>

</figure>

<p className="it">Tu JSX parece más concisa y fácil de leer ahora. Se omite la declaración de la función, las llaves y la instrucción de retorno.</p>

<p>Your JSX looks more concise and readable now. It omits the function statement, the curly braces and the return statement.</p>

<h4 id="leanpub-auto-exercises-9">Exercises:</h4>

<ul>
<li className="it">leer más acerca de <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions">las funciones arrow de ES6</a>
</li>
  <li>read more about <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions">ES6 arrow functions</a>
</li>
</ul>


</div>
 <div>
<h3 id="leanpub-auto-es6-classes">ES6 Classes</h3>

<p className="it">JavaScript ES6 introdujo clases. Una clase se utiliza comúnmente en los lenguajes de programación orientados a objetos. JavaScript ha sido y es muy flexible en tus paradigmas de programación. Podes hacer la programación funcional y el lado de programación orientado a objetos al lado del otro por tus casos de uso particulares.</p>

<p>JavaScript ES6 introduced classes. A class is commonly used in object-oriented programming languages. JavaScript was and is very flexible in its programming paradigms. You can do functional programming and object-oriented programming side by side for their particular use cases.</p>

<p className="it">A pesar de que React abarca la programación funcional, por ejemplo, con las estructuras de datos inmutables, las clases se utilizan para declarar componentes. Se llaman los componentes de clase ES6. React mezcla las partes buenas de ambos paradigmas de programación.</p>

<p>Even though React embraces functional programming, for instance with immutable data structures, classes are used to declare components. They are called ES6 class components. React mixes the good parts of both programming paradigms.</p>

<p className="it">Vamos a considerar la siguiente clase de desarrollador para examinar una clase de JavaScript ES6 sin pensar en un componente.</p>

<p>Let’s consider the following Developer class to examine a JavaScript ES6 class without thinking about a component.</p>

<figure class="code">
  <figcaption>Code Playground</figcaption>

<div class="highlight"><pre><code></code><code class="kr">class</code> <code class="nx">Developer</code> <code class="p">&#123;</code><br></br>
  <code class="nx">constructor</code><code class="p">(</code><code class="nx">firstname</code><code class="p">,</code> <code class="nx">lastname</code><code class="p">)</code> <code class="p">&#123;</code><br></br>
    <code class="k">this</code><code class="p">.</code><code class="nx">firstname</code> <code class="o">=</code> <code class="nx">firstname</code><code class="p">;</code><br></br>
    <code class="k">this</code><code class="p">.</code><code class="nx">lastname</code> <code class="o">=</code> <code class="nx">lastname</code><code class="p">;</code><br></br>
  <code class="p">&#125;</code><br></br>
<br></br>
  <code class="nx">getName</code><code class="p">()</code> <code class="p">&#123;</code>
    <code class="k">return</code> <code class="k">this</code><code class="p">.</code><code class="nx">firstname</code> <code class="o">+</code> <code class="s1">' '</code> <code class="o">+</code> <code class="k">this</code><code class="p">.</code><code class="nx">lastname</code><code class="p">;</code><br></br>
  <code class="p">&#125;</code><br></br>
<code class="p">&#125;</code>
</pre></div>

</figure>

<p className="it">Una clase tiene un constructor para que sea instanciable. El constructor podes tomar argumentos para asignarlo a la instancia de clase. Además una clase podes definir funciones. Dado que la función está asociada con una clase, se llama un método. A veces se hace referencia como método de clase.</p>

<p>A class has a constructor to make it instantiable. The constructor can take arguments to assign it to the class instance. Additionally a class can define functions. Because the function is associated with a class, it is called a method. Sometimes it is referenced as class method.</p>

<p className="it">La clase Developer es solamente la declaración de clase. Se pueden  crear múltiples instancias de la clase mediante la invocación de la misma. Es similar al componente de clase ES6, que tiene una declaración, pero hay que usarlo en otro lugar para crear instancias de ella.</p>

<p>The Developer class is only the class declaration. You can create multiple instances of the class by invoking it. It is similar to the ES6 class component, that has a declaration, but you have to use it somewhere else to instantiate it.</p>

<p className="it">Vamos a ver cómo se podes crear una instancia de la clase y cómo se podes utilizar tus métodos.</p>

<p>Let’s see how you can instantiate the class and how you can use its methods.</p>

<figure class="code">
  <figcaption>Code Playground</figcaption>

<div class="highlight"><pre><code></code><code class="kr">const</code> <code class="nx">robin</code> <code class="o">=</code> <code class="k">new</code> <code class="nx">Developer</code><code class="p">(</code><code class="s1">'Robin'</code><code class="p">,</code> <code class="s1">'Wieruch'</code><code class="p">);</code><br></br>
<code class="nx">console</code><code class="p">.</code><code class="nx">log</code><code class="p">(</code><code class="nx">robin</code><code class="p">.</code><code class="nx">getName</code><code class="p">());</code><br></br>
<code class="c1">// output: Robin Wieruch</code>
</pre></div>

</figure>

<p className="it">React utiliza clases JavaScript ES6 para los componentes de clase ES6. Ya ha utilizado un componente de clase ES6.</p>

<p>React uses JavaScript ES6 classes for ES6 class components. You already used one ES6 class component.</p>

<figure class="code">
  <figcaption>src/App.js</figcaption>

<div class="highlight"><pre><code></code><code class="kr">import</code> <code class="nx">React</code><code class="p">,</code> <code class="p">&#123;</code> <code class="nx">Component</code> <code class="p">&#125;</code> <code class="nx">from</code> <code class="s1">'react'</code><code class="p">;</code><br></br>
<br></br>
<code class="p">...</code><br></br>
<br></br>
<code class="kr">class</code> <code class="nx">App</code> <code class="kr">extends</code> <code class="nx">Component</code> <code class="p">&#123;</code><br></br>
  <code class="nx">render</code><code class="p">()</code> <code class="p">&#123;</code><br></br>
    <code class="p">...</code><br></br>
  <code class="p">&#125;</code><br></br>
<code class="p">&#125;</code>
</pre></div>

</figure>

<p className="it">La clase App extiende desde <code>Component</code>. Básicamente se declara el componente de aplicación, sino que se extiende a partir de otro componente. Lo que se extienden significa? En la programación orientada a objetos que tiene el principio de la herencia. Se utiliza para pasar por encima de las funcionalidades de una clase a otra clase.</p>

<p>The App class extends from <code>Component</code>. Basically you declare the App component, but it extends from another component. What does extend mean? In object-oriented programming you have the principle of inheritance. It is used to pass over functionalities from one class to another class.</p>

<p className="it">La clase App amplía la funcionalidad de la clase de componentes. Para ser más específicos, hereda las funcionalidades de la clase Component. El componente se utiliza para extender una clase básica ES6 a una clase de componente ES6. Tiene todas las funcionalidades de un componente necesita tener. Una de estas funcionalidades, un método, que ya han utilizado: el <code>render()</code> método. Sin embargo, usted aprenderá acerca más funcionalidades.</p>

<p>The App class extends functionality from the Component class. To be more specific, it inherits functionalities from the Component class. The Component is used to extend a basic ES6 class to a ES6 component class. It has all the functionalities a component needs to have. One of these functionalities, a method, you have already used: the <code>render()</code> method. But you will learn about more functionalities.</p>

<p className="it">La <code>Component</code> clase encapsula todas las funcionalidades React que un desarrollador no necesita ver. Se permite a los desarrolladores usar clases como componentes en React.</p>

<p>The <code>Component</code> class encapsulates all the React functionalities that a developer doesn’t need to see. It enables developers to use classes as components in React.</p>

<p className="it">Los métodos de un React <code>Component</code> expone es la interfaz pública. Uno de estos métodos tiene que ser sobrescritos, los otros no necesitan ser sobrescrito. Vos aprenderá acerca de estas últimas cuando el libro llega a métodos de ciclo de vida en un capítulo posterior. El <code>render()</code> método tiene que ser sobrescritos, ya que define la salida de un React <code>Component</code>.</p>

<p>The methods React  <code>Component</code> exposes is the public interface. One of these methods has to be overwritten, the others don’t need to be overwritten. You will learn about the latter ones when the book arrives at lifecycle methods in a later chapter. The <code>render()</code> method has to be overwritten, because it defines the output of React  <code>Component</code>.</p>

<p className="it">Ahora que sabes lo básico alrededor de JavaScript clases ES6 y la forma en que se utilizan en React a extenderlas a los componentes. Como ya he dicho, podrá aprender más acerca de los métodos de componentes cuando el libro se describen React métodos de ciclo de vida.</p>

<p>Now you know the basics around JavaScript ES6 classes and how they are used in React to extend them to components. As I said, you will learn more about the Component methods when the book describes React lifecycle methods.</p>

<h4 id="leanpub-auto-exercises-10">Exercises:</h4>

<ul>
  <li>read more about <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes">ES6 classes</a>
</li>
</ul>

<div class="page-break"></div>
<p className="it">Has aprendido a arrancar tu propia aplicación React! Recapitulemos los últimos capítulos:</p>

<p>You have learned to bootstrap your own React application! Let’s recap the last chapters:</p>

<ul>
  <li>React
    <ul>
    <li className="it">Create-React-app bootstraps una aplicación React</li>
      <li>create-react-app bootstraps React  application</li>
      <li className="it">JSX se mezcla HTML y JavaScript para definir componentes React</li>
      <li>JSX mixes up HTML and JavaScript to define React components</li>
      <li className="it">componentes, instancias y elementos son cosas diferentes</li>
      <li>components, instances and elements are different things</li>
      <li className="it">ReactDOM.render () es un punto de entrada para una aplicación React</li>
      <li>ReactDOM.render() is an entry point for React  application</li>
      <li className="it">incorporado en JavaScript funcionalidades se pueden  utilizar en JSX</li>
      <li>built-in JavaScript functionalities can be used in JSX
        <ul>
        <li className="it">mapa se podes utilizar para hacer una lista de elementos como elementos HTML</li>
          <li>map can be used to render a list of items as HTML elements</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>ES6
    <ul>
    <li className="it">declaraciones de variables con const y permiten a los casos de uso particulares</li>
      <li>variable declarations with const and let for particular use cases</li>
      <li className="it">funciones de dirección se pueden  utilizar para acortar tus declaraciones de funciones</li>
      <li>arrow functions can be used to shorten your function declarations</li>
      <li className="it">clases se utilizan para definir los componentes en React</li>
      <li>classes are used to define components in React</li>
    </ul>
  </li>
</ul>

<p className="it">Tiene sentido hacer una pausa en este punto. Internalizar los aprendizajes y aplicarlos en su propio. Podes experimentar con el código fuente que ha escrito hasta ahora.</p>

<p>It makes sense to take a break at this point. Internalize the learnings and apply them on your own. You can experiment with the source code you have written so far.</p>

<p className="it">podes encontrar el código fuente en el <a href="https://github.com/rwieruch/hackernews-client/tree/0c5a701170dcc72fe68bdd594df3a6522f58fbb3">repositorio oficial</a>.</p>

<p>You can find the source code in the <a href="https://github.com/rwieruch/hackernews-client/tree/0c5a701170dcc72fe68bdd594df3a6522f58fbb3">official repository</a>.</p>



</div>
<div>
<h2 id="leanpub-auto-basics-in-react">Basics in React</h2>
<p className="it">El capítulo te guiará a través de los fundamentos de React. Cubre el estado y las interacciones de los componentes, ya que los componentes estáticos son un poco aburrido, ¿no es así? Además, aprenderá acerca de las diferentes formas de declarar un componente y cómo mantener los componentes composeable y reutilizable. Esté preparado para dar vida a tus componentes.</p>
<p>The chapter will guide you through the basics of React. It covers state and interactions in components, because static components are a bit dull, aren’t they? Additionally you will learn about the different ways to declare a component and how to keep components composeable and reusable. Be prepared to breathe life into your components.</p>


</div>






 </div>

 </div>
  </Layout>
)
