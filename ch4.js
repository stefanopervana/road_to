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
<h3 id="leanpub-auto-internal-component-state">Internal Component State</h3>

<p className="it">el estado del componente interno te permite almacenar, modificar y borrar propiedades de tu componente. El componente de clase ES6 puede utilizar un constructor para inicializar el estado del componente interno. El constructor se llama sólo una vez cuando el componente inicializa.</p>

<p className="p">Internal component state allows you to store, modify and delete properties of your component. The ES6 class component can use a constructor to initialize internal component state. The constructor is called only once when the component initializes.</p>

<p className="it">Vamos a introducir un constructor de clase donde podes establecer el estado inicial de los componentes internos.</p>

<p className="p">Let’s introduce a class constructor where you can set the initial internal component state.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class App extends Component &#123;<br></br>
<br></br>
<code className="uil">  constructor(props) &#123;<br></br>
</code><code className="uil">    super(props);<br></br>
</code><code className="uil">
</code><code className="uil">    this.state = &#123;<br></br>
</code><code className="uil">      list: list,<br></br>
</code><code className="uil">    &#125;;<br></br>
</code><code className="uil"><br></br>
</code><code className="uil">  &#125;<br></br>
</code><br></br>
  ...<br></br>

&#125;
</pre></div>

</figure>

<p className="it">En tu caso el estado inicial es la lista de items artificiales. Tene en cuenta que tenes que llamar a <code>super(props);</code> para llamar al constructor de clase extended Component. Es obligatorio, ya que establece <code>this.props</code> en tu constructor. Debes seguir la mejor práctica, de lo contrario podrías encontrarte con errores en el futuro.</p>

<p className="p">In your case the initial state is the artificial list of items. Note that you have to call <code>super(props);</code> to call the constructor of the extended Component class. It’s mandatory, because it sets <code>this.props</code> in your constructor. You should follow the best practice, otherwise you might run into bugs in the future.</p>

<p className="it">El estado está obligando a la clase con el objeto <code>this</code>. Podes acceder al estado de tu componente. Por ejemplo, podes utilizar el método <code>render()</code>. Antes de que hayas asignado una lista estática de artículos. Ahora que estás a punto de utilizar la lista de tu componente interno con estado.</p>

<p className="p">The state is bound to the class with the <code>this</code> object. You can access the state in your component. For instance, it can be used in the <code>render()</code> method. Before you have mapped a static list of items. Now you are about to use the list from your internal component state.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class App extends Component &#123;<br></br>
<br></br>
  ...<br></br>
<br></br>
  render() &#123;<br></br>
    return (<br></br>
      &lt;div className="App"&gt;<br></br>
<code className="uil">        &#123; this.state.list.map(item =&gt;<br></br>
</code>          &lt;div key=&#123;item.objectID&#125;&gt;<br></br>
            &lt;span&gt;<br></br>
              &lt;a href=&#123;item.url&#125;&gt;&#123;item.title&#125;&lt;/a&gt;<br></br>
            &lt;/span&gt;<br></br>
            &lt;span&gt;&#123;item.author&#125;&lt;/span&gt;<br></br>
            &lt;span&gt;&#123;item.num_comments&#125;&lt;/span&gt;<br></br>
            &lt;span&gt;&#123;item.points&#125;&lt;/span&gt;<br></br>
          &lt;/div&gt;<br></br>
        )&#125;<br></br>
      &lt;/div&gt;<br></br>
    );<br></br>
  &#125;<br></br>
&#125;
</pre></div>

</figure>

<p className="it">La lista es parte del componente ahora. Reside en el estado del componente interno. Se podrían añadir objetos, cambiar los elementos o eliminar elementos en y desde tu lista. Cada vez que cambie el estado de tu componente, el método <code>render()</code> de tu componente se ejecutará de nuevo. Así es cómo podes simplemente cambiar el estado de los componentes internos y estar seguro de que el componente vuelve a renderizar.</p>

<p className="p">The list is part of the component now. It resides in the internal component state. You could add items, change items or remove items in and from your list. Every time you change your component state, the <code>render()</code> method of your component will run again. That’s how you can simply change your internal component state and be sure that the component re-renders.</p>

<p className="it">Pero tene cuidado. No mutes el estado directamente. Tenes que utilizar un método llamado <code>setState()</code> para modificar su estado. Lo sabras en un capítulo sucesivo.</p>

<p className="p">But be careful. Don’t mutate the state directly. You have to use a method called <code>setState()</code> to modify your state. You will get to know it in a following chapter.</p>

<h4 id="leanpub-auto-exercises-11">Exercises:</h4>

<ul><li className="it">experimento con el estado interno</li>
  <li className="p">experiment with the internal state
    <ul>
    <li className="it">definir más estados iniciales en el constructor</li>
      <li className="p">define more initial state in the constructor</li>
      <li className="it">utilizar el estado de tu método <code>render()</code></li>
      <li className="p">use the state in your <code>render()</code> method</li>
    </ul>
  </li>

  <li className="it">leer más sobre <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Constructor">el constructor de clase ES6</a>
</li>
  <li className="p">read more about <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Constructor">the ES6 class constructor</a>
</li>
</ul>


</div>

<div>
<h3 id="leanpub-auto-es6-object-initializer">ES6 Object Initializer</h3>

<p className="it">En JavaScript ES6 podes utilizar una propiedad de sintaxis abreviada para inicializar los objetos en manera más concisa. Imaginá la  siguiente inicialización de objetos:</p>

<p className="p">In JavaScript ES6 you can use a shorthand property syntax to initialize your objects more concise. Imagine the following object initialization:</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>

<div className="highlight"><pre><code></code><code className="kr">const</code> <code className="nx">name</code> <code className="o">=</code> <code className="s1">'Robin'</code><code className="p">;</code><br></br>

<code className="kr">const</code> <code className="nx">user</code> <code className="o">=</code> <code className="p">&#123;</code>
  <code className="nx">name</code><code className="o">:</code> <code className="nx">name</code><code className="p">,</code>
<code className="p">&#125;;</code>
</pre></div>

</figure>

<p className="it">Cuando el nombre de la propiedad en tu objeto puede ser el mismo que el nombre de la variable, podes hacer lo siguiente:</p>

<p className="p">When the property name in your object can be the same as your variable name, you can do the following:</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>

<div className="highlight"><pre><code></code><code className="kr">const</code> <code className="nx">name</code> <code className="o">=</code> <code className="s1">'Robin'</code><code className="p">;</code><br></br>

<code className="kr">const</code> <code className="nx">user</code> <code className="o">=</code> <code className="p">&#123;</code>
  <code className="nx">name</code><code className="p">,</code>
<code className="p">&#125;;</code>
</pre></div>

</figure>

<p className="it">En tu aplicación podes hacer lo mismo. La lista de nombres de variable y el nombre de la propiedad del estado comparten el mismo nombre.</p>

<p className="p">In your application you can do the same. The list variable name and the state property name share the same name.</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>

<div className="highlight"><pre><code></code><code className="c1">// ES5</code>
<code className="k">this</code><code className="p">.</code><code className="nx">state</code> <code className="o">=</code> <code className="p">&#123;</code>
  <code className="nx">list</code><code className="o">:</code> <code className="nx">list</code><code className="p">,</code>
<code className="p">&#125;;</code><br></br>

<code className="c1">// ES6</code>
<code className="k">this</code><code className="p">.</code><code className="nx">state</code> <code className="o">=</code> <code className="p">&#123;</code>
  <code className="nx">list</code><code className="p">,</code>
<code className="p">&#125;;</code>
</pre></div>

</figure>

<p className="it">Otra ayuda que ordena son los nombres de métodos abreviados. En ES6 podes inicializar métodos en un objeto más concisa.</p>

<p className="p">Another neat helper are shorthand method names. In ES6 you can initialize methods in an object more concise.</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>

<div className="highlight"><pre><code></code><code className="c1">// ES5</code>
<code className="kd">var</code> <code className="nx">userService</code> <code className="o">=</code> <code className="p">&#123;</code>
  <code className="nx">getUserName</code><code className="o">:</code> <code className="kd">function</code> <code className="p">(</code><code className="nx">user</code><code className="p">)</code> <code className="p">&#123;</code><br></br>
    <code className="k">return</code> <code className="nx">user</code><code className="p">.</code><code className="nx">firstname</code> <code className="o">+</code> <code className="s1">' '</code> <code className="o">+</code> <code className="nx">user</code><code className="p">.</code><code className="nx">lastname</code><code className="p">;</code>
  <code className="p">&#125;,</code>
<code className="p">&#125;;</code>
<br></br>
<code className="c1">// ES6</code>
<code className="kr">const</code> <code className="nx">userService</code> <code className="o">=</code> <code className="p">&#123;</code>
  <code className="nx">getUserName</code><code className="p">(</code><code className="nx">user</code><code className="p">)</code> <code className="p">&#123;</code><br></br>
    <code className="k">return</code> <code className="nx">user</code><code className="p">.</code><code className="nx">firstname</code> <code className="o">+</code> <code className="s1">' '</code> <code className="o">+</code> <code className="nx">user</code><code className="p">.</code><code className="nx">lastname</code><code className="p">;</code>
  <code className="p">&#125;,</code>
<code className="p">&#125;;</code>
</pre></div>

</figure>

<p className="it">Por último, pero no menos importante, se te permite utilizar nombres de las propiedades calculadas en ES6.</p>

<p className="p">Last but not least, you are allowed to use computed property names in ES6.</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>

<div className="highlight"><pre><code></code><code className="c1">// ES5</code>
<code className="kd">var</code> <code className="nx">user</code> <code className="o">=</code> <code className="p">&#123;</code>
  <code className="nx">name</code><code className="o">:</code> <code className="s1">'Robin'</code><code className="p">,</code>
<code className="p">&#125;;</code>
<br></br>
<code className="c1">// ES6</code>
<code className="kr">const</code> <code className="nx">key</code> <code className="o">=</code> <code className="s1">'name'</code><code className="p">;</code>
<code className="kr">const</code> <code className="nx">user</code> <code className="o">=</code> <code className="p">&#123;</code>
  <code className="p">[</code><code className="nx">key</code><code className="p">]</code><code className="o">:</code> <code className="s1">'Robin'</code><code className="p">,</code>
<code className="p">&#125;;</code>
</pre></div>

</figure>

<p className="it">Los nombres de las propiedades calculadas podrían no tener sentido todavía. ¿Por qué en caso de necesitarla? En otro capítulo en el libro se llega a un punto en el que podes utilizarlo.</p>

<p className="p">Computed property names might make no sense yet. Why should you need it? In a future chapter in the book you will come to a point where you can use it.</p>

<h4 id="leanpub-auto-exercises-12">Exercises:</h4>

<ul><li className="it">experimento con ES6 objeto inicializador</li>
  
  <li className="p">experiment with ES6 object initializer</li>

  <li className="it">leer más sobre <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer">ES6 objeto inicializador</a>
</li>
  <li className="p">read more about <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer">ES6 object initializer</a>
</li>
</ul>


</div>

<div>
<h3 id="leanpub-auto-unidirectional-data-flow">Unidirectional Data Flow</h3>

<p className="it">Ahora tenes algún estado interno en el componente App. Sin embargo, no se ha manipulado el estado interno todavía. El estado es estático y por lo tanto es el componente. Una buena manera de experimentar la manipulación del estado es tener algún tipo de interacción de los componentes.</p>

<p className="p">Now you have some internal state in your App component. However, you have not manipulated the internal state yet. The state is static and thus is the component. A good way to experience state manipulation is to have some component interaction.</p>

<p className="it">Vamos a añadir un botón para cada elemento de la lista que se muestra. El botón dice “Descartar” y se eliminará el elemento de la lista. Podría ser útil, finalmente, cuando sólo se desea mantener una lista de elementos no leídos.</p>

<p className="p">Let’s add a button for each item in the displayed list. The button says “Dismiss” and will remove the item from the list. It could be useful eventually when you only want to keep a list of unread items.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class App extends Component &#123;<br></br>
<br></br>
  ...<br></br>
<br></br>
  render() &#123;<br></br>
    return (<br></br>
      &lt;div className="App"&gt;<br></br>
        &#123; this.state.list.map(item =&gt;<br></br>
          &lt;div key=&#123;item.objectID&#125;&gt;<br></br>
            &lt;span&gt;<br></br>
              &lt;a href=&#123;item.url&#125;&gt;&#123;item.title&#125;<br></br>&lt;/a&gt;
            &lt;/span&gt;<br></br>
            &lt;span&gt;&#123;item.author&#125;&lt;/span&gt;<br></br>
            &lt;span&gt;&#123;item.num_comments&#125;&lt;/span&gt;<br></br>
            &lt;span&gt;&#123;item.points&#125;&lt;/span&gt;<br></br>
<code className="uil">            &lt;span&gt;<br></br>
</code><code className="uil">              &lt;button<br></br>
</code><code className="uil">                onClick=&#123;() =&gt; this.onDismiss(item.objectID)&#125;<br></br>
</code><code className="uil">                type="button"<br></br>
</code><code className="uil">              &gt;<br></br>
</code><code className="uil">                Dismiss<br></br>
</code><code className="uil">              &lt;/button&gt;<br></br>
</code><code className="uil">            &lt;/span&gt;<br></br>
</code>          &lt;/div&gt;<br></br>
        )&#125;<br></br>
      &lt;/div&gt;<br></br>
    );<br></br>
  &#125;<br></br>
&#125;
</pre></div>

</figure>

<p className="it">Como podes ver el método <code>onDismiss()</code> en la función <code>onClick</code> queda encerrado por otra función. Sólo de esa manera puede colarse en la propiedad <code>objectID</code>. De lo contrario se tendría que definir la función por fuera. Sin embargo, mediante el uso de una funcion arrow ES6 podes inline a ella.</p>

<p className="p">As you can see the <code>onDismiss()</code> method in the <code>onClick</code> function gets enclosed by another function. Only that way you can sneak in the <code>objectID</code> property. Otherwise you would have to define the function outside. However, by using an ES6 arrow function you can inline it.</p>

<p className="it">Tene en cuenta que los elementos con múltiples atributos se ponen complicados como una línea en algún momento. Es por eso que el elemento de botón ya se utiliza con líneas múltiples y el sangrado para que siga siendo legible. Pero no es obligatorio. Es sólo una recomendación de estilo de código.</p>

<p className="p">Note that elements with multiple attributes get messy as one line at some point. That’s why the button element is already used with multilines and indentation to keep it readable. But it is not mandatory. It is only a code style recommendation.</p>

<p className="it">Ahora tenes que poner en práctica la funcionalidad <code>onDismiss()</code>. Se necesita un ID de elemento para identificar el elemento a descartar. La función está ligada a la clase y por lo tanto se convierte en un método de clase. Tenes que obligar a los métodos de clase en el constructor. Además tenes que definir las funciones en su clase.</p>

<p className="p">Now you have to implement the <code>onDismiss()</code> functionality. It takes an item id to identify the item to dismiss. The function is bound to the class and thus becomes a class method. You have to bind class methods in the constructor. Additionally you have to define its functionality in your class.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class App extends Component &#123;<br></br>
<br></br>
  constructor(props) &#123;<br></br>
    super(props);<br></br>
<br></br>
    this.state = &#123;<br></br>
      list,<br></br>
    &#125;;<br></br>
<br></br>
<code className="uil">    this.onDismiss = this.onDismiss.bind(this);<br></br>
</code>  &#125;<br></br>

<code className="uil">  onDismiss(id) &#123;<br></br>
</code><code className="uil">    ...<br></br>
</code><code className="uil">  &#125;<br></br>
</code><br></br>
  render() &#123;<br></br>
    ...<br></br>
  &#125;<br></br>
&#125;<br></br>
</pre></div>

</figure>

<p className="it">Ahora podes definir lo que ocurre en el interior del método de clase. Puesto que queres quitar el elemento clikeado de la lista, podes hacer eso con la funcionalidad de filtro de array built-in. La función de filtro tiene una función para evaluar cada item de la lista. Si la evaluación de un item es true, el item se queda en la lista. De lo contrario, se elimina. Además, la función devuelve una nueva lista y no muta la lista antigua. Se mantiene inmutable la estructura de datos.</p>

<p className="p">Now you can define what happens inside of the class method. Since you want to remove the clicked item from your list, you can do that with the built-in array filter functionality. The filter function takes a function to evaluate each item in the list. If the evaluation for an item is true, the item stays in the list. Otherwise it will get removed. Additionally the function returns a new list and doesn’t mutate the old list. It keeps the immutable data structure.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>onDismiss(id) &#123;<br></br>
<code className="uil"><br></br>
</code><code className="uil">  function isNotId(item) &#123;<br></br>
</code><code className="uil">    return item.objectID !== id;<br></br>
</code><code className="uil">  &#125;<br></br>
</code><code className="uil"><br></br>
</code><code className="uil">  const updatedList = this.state.list.filter(isNotId);<br></br>
</code>&#125;
</pre></div>

</figure>

<p className="it">podes hacerlo de forma más concisa mediante el uso, nuevamente, de una funcion arrow ES6.</p>

<p className="p">You can do it more concise by using an ES6 arrow function again.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>onDismiss(id) &#123;<br></br>
<code className="uil">  const isNotId = item =&gt; item.objectID !== id;<br></br>
</code><code className="uil">  const updatedList = this.state.list.filter(isNotId);<br></br>
</code>&#125;<br></br>
</pre></div>

</figure>

<p className="it">Incluso podrias en linea - como lo hicimos en el controlador del botón <code>onClick()</code> - pero puede ser que consigas menos legibilidad.</p>

<p className="p">You could even inline it - like we did in the <code>onClick()</code> handler of the button - but it might get less readable.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>onDismiss(id) &#123;
<code className="uil">  const updatedList = this.state.list.filter(item =&gt; item.objectID !== id);
</code>&#125;
</pre></div>

</figure>

<p className="it">La lista elimina el elemento al que se ha hecho clic ahora. Sin embargo, el estado no se actualiza todavía. Por lo tanto, finalmente podes utilizar el método de clase <code>setState()</code> para actualizar la lista en el estado de los componentes internos.</p>

<p className="p">The list removes the clicked item now. However the state isn’t updated yet. Therefore you can finally use the <code>setState()</code> class method to update the list in the internal component state.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>onDismiss(id) &#123;<br></br>
  const isNotId = item =&gt; item.objectID !== id;<br></br>
  const updatedList = this.state.list.filter(isNotId);<br></br>
<code className="uil">  this.setState(&#123; list: updatedList &#125;);<br></br>
</code>&#125;<br></br>
</pre></div>

</figure>

<p className="it">Ahora ejecutá de nuevo la aplicación y probá el botón “Descartar”. Deberia de funcionar. Lo que experimentas ahora es el <strong>flujo de datos unidireccional</strong> en React. Se dispara una acción en su capa view - con <code>onClick()</code>- una función o método de clase modifica el estado de los componentes internos y el método <code>render()</code> del componente se ejecuta de nuevo para actualizar la vista.</p>

<p className="p">Now run again your application and try the “Dismiss” button. It should work. What you experience now is the <strong>unidirectional data flow</strong> in React. You trigger an action in your view - with <code>onClick()</code> - a function or class method modifies the internal component state and the <code>render()</code> method of the component runs again to update the view.</p>


<figure className="image center">
  <img src="images/set-state-to-render-unidirectional.png" alt="Internal state update with unidirectional data flow" />
  <figcaption>Internal state update with unidirectional data flow</figcaption>
</figure>


<h4 id="leanpub-auto-exercises-13">Exercises:</h4>

<ul>
<li className="it">leer más sobre <a href="https://facebook.github.io/react/docs/state-and-lifecycle.html">el estado del ciclo de vida en React</a>
</li>
  <li className="p">read more about <a href="https://facebook.github.io/react/docs/state-and-lifecycle.html">the state and lifecycle in React</a>
</li>
</ul>


</div>

<div>
<h3 id="leanpub-auto-interactions-with-forms-and-events">Interactions with Forms and Events</h3>

<p className="it">Vamos a añadir otra interacción para experimentar formas y eventos en React. La interacción es una funcionalidad de búsqueda. La entrada del campo de búsqueda debes utilizarla para filtrar la lista basada en la propiedad del título de un item.</p>

<p className="p">Let’s add another interaction to experience forms and events in React. The interaction is a search functionality. The input of the search field should be used to filter your list based on the title property of an item.</p>

<p className="it">En primer lugar se define el campo del input en tu JSX.</p>

<p className="p">First you define your input field in your JSX.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class App extends Component &#123;<br></br>
<br></br>
  ...<br></br>
<br></br>
  render() &#123;<br></br>
    return (<br></br>
      &lt;div className="App"&gt;<br></br>
<code className="uil">        &lt;form&gt;<br></br>
</code><code className="uil">          &lt;input type="text" /&gt;<br></br>
</code><code className="uil">        &lt;/form&gt;<br></br>
</code>        &#123; this.state.list.map(item =&gt;<br></br>
          ...<br></br>
        )&#125;<br></br>
      &lt;/div&gt;<br></br>
    );<br></br>
  &#125;<br></br>
&#125;<br></br>
</pre></div>

</figure>

<p className="it">En el siguiente escenario escribiras en el campo y se filtrará la lista temporal con el término buscado. Para ser capaz de filtrar la lista, necesitas el valor del campo del input para actualizar el estado. Pero, ¿cómo se accede al valor? podes utilizar <strong>synthetic events</strong> en React para acceder a la carga del evento.</p>

<p className="p">In the following scenario you will type into the field and filter the list temporary by the search term. To be able to filter the list, you need the value of the input field to update the state. But how do you access the value? You can use <strong>synthetic events</strong> in React to access the event payload.</p>

<p className="it">Vamos a definir una llamada de retorno <code>onChange()</code> para el campo del input.</p>

<p className="p">Let’s define an <code>onChange()</code> callback function for the input field.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class App extends Component &#123;<br></br>
<br></br>
  ...<br></br>
<br></br>
  render() &#123;<br></br>
    return (<br></br>
      &lt;div className="App"&gt;<br></br>
<code className="uil">        &lt;form&gt;<br></br>
</code><code className="uil">          &lt;input<br></br>
</code><code className="uil">            type="text"<br></br>
</code><code className="uil">            onChange=&#123;this.onSearchChange&#125;<br></br>
</code><code className="uil">          /&gt;<br></br>
</code><code className="uil">        &lt;/form&gt;<br></br>
</code>        ...<br></br>
      &lt;/div&gt;<br></br>
    );<br></br>
  &#125;<br></br>
&#125;
</pre></div>

</figure>

<p className="it">La función está ligada al componente y por lo tanto un método de clase de nuevo. Tenes que unirlo y definir el método.</p>

<p className="p">The function is bound to the component and thus a class method again. You have to bind and define the method.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class App extends Component &#123;<br></br>
<br></br>
  constructor(props) &#123;<br></br>
    super(props);<br></br>
<br></br>
    this.state = &#123;<br></br>
      list,<br></br>
    &#125;;<br></br>
<br></br>
<code className="uil">    this.onSearchChange = this.onSearchChange.bind(this);<br></br>
</code><br></br>    this.onDismiss = this.onDismiss.bind(this);
  &#125;<br></br>
<br></br>
<code className="uil">  onSearchChange() &#123;
</code><br></br><code className="uil">    ...
</code><br></br><code className="uil">  &#125;
</code><br></br>
  ...<br></br>
&#125;
</pre></div>

</figure>

<p className="it">El argumento del método te da acceso al evento synthetic de React. El evento tiene el valor del campo del input en su objeto de destino. Ahora podes manipular el estado para el término buscado:</p>

<p className="p">The method argument gives you access to the synthetic React event. The event has the value of the input field in its target object. Now you can manipulate the state for the search term:</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class App extends Component &#123;<br></br>
<br></br>
  ...<br></br>
<br></br>
<code className="uil">  onSearchChange(event) &#123;
</code><br></br><code className="uil">    this.setState(&#123; searchTerm: <br></br>event.target.value &#125;);
</code><br></br><code className="uil">  &#125;<br></br>
</code>
  ...<br></br>
&#125;<br></br>
</pre></div>

</figure>

<p className="it">Además tenes que definir el estado inicial para el <code>searchTerm</code> en el constructor.</p>

<p className="p">Additionally you have to define the initial state for the <code>searchTerm</code> in the constructor.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class App extends Component &#123;<br></br>
<br></br>
  constructor(props) &#123;<br></br>
    super(props);<br></br>
<br></br>
    this.state = &#123;<br></br>
      list,<br></br>
<code className="uil">      searchTerm: '',<br></br>
</code>    &#125;;<br></br>
<br></br>
    this.onSearchChange = this.onSearchChange.bind(this);<br></br>
    this.onDismiss = this.onDismiss.bind(this);<br></br>
  &#125;<br></br>
<br></br>
  ...<br></br>
&#125;<br></br>
</pre></div>

</figure>

<p className="it">Ahora se almacena el valor de entrada al estado interno del componente cada vez que cambia el valor en el campo del input. Sin embargo, la lista no se actualiza todavía. Tenes que filtrar la lista temporal basada en el <code>searchTerm</code>. Así es bastante simple. Antes de asignar la lista podes aplicar un filtro en él. Ya has utilizado la funcionalidad del filtro incorporado en JavaScript.</p>

<p className="p">Now you store the input value to your internal component state every time the value in the input field changes. However, the list doesn’t update yet. You have to filter the list temporary based on the <code>searchTerm</code>. That’s fairly simple. Before you map the list you can apply a filter on it. You have already used the built-in JavaScript filter functionality.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class App extends Component &#123;<br></br>
<br></br>
  ...<br></br>
<br></br>
  render() &#123;<br></br>
    return (<br></br>
      &lt;div className="App"&gt;<br></br>
        &lt;form&gt;<br></br>
          &lt;input<br></br>
            type="text"<br></br>
            onChange=&#123;this.onSearchChange&#125;<br></br>
          /&gt;<br></br>
        &lt;/form&gt;<br></br>
<code className="uil">        &#123; this.state.list.filter(...).map(item =&gt;
</code> <br></br>         ...<br></br>
        )&#125;<br></br>
      &lt;/div&gt;<br></br>
    );<br></br>
  &#125;<br></br>
&#125;
</pre></div>

</figure>

<p className="it">Vamos a acercarte a la función de filtro de una manera diferente esta vez. Queremos definir el argumento de filtro - la función - fuera de nuestro componente de clase ES6. Allí no tenemos acceso al estado del componente - por lo tanto no tenemos acceso a la propiedad <code>searchTerm</code> para evaluar la condición del filtro. Tenemos que pasar la <code>searchTerm</code> de la función de filtro y tiene que devolver una nueva función para evaluar la condición. Eso se llama una función de orden superior.</p>

<p className="p">Let’s approach the filter function in a different way this time. We want to define the filter argument - the function - outside of our ES6 class component. There we don’t have access to the state of the component - thus we have no access to the <code>searchTerm</code> property to evaluate the filter condition. We have to pass the <code>searchTerm</code> to the filter function and have to return a new function to evaluate the condition. That’s called a higher order function.</p>

<p className="it">Normalmente no menciono funciones de orden superior, pero en un libro React se vuelve totalmente lógico. Tiene sentido saber acerca de las funciones de orden superior, porque React trata de un concepto llamado componentes de orden superior. Se llegará a conocer el concepto más adelante en el libro. Ahora, de nuevo, vamos a centrarnos en la funcionalidad del filtro.</p>

<p className="p">Normally I wouldn’t mention higher order functions, but in React  book it makes totally sense. It makes sense to know about higher order functions, because React deals with a concept called higher order components. You will get to know the concept later in the book. Now again, let’s focus on the filter functionality.</p>

<p className="it">En primer lugar hay que definir la función de orden superior fuera de su clase.</p>

<p className="p">First you have to define the higher order function outside of your class.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre><code className="uil">function isSearched(searchTerm) &#123;
</code><br></br><code className="uil">  return function(item) &#123;
</code><br></br><code className="uil">    // some condition which returns true or false
</code><br></br><code className="uil">  &#125;
</code><br></br><code className="uil">&#125;
</code><br></br>
class App extends Component &#123;<br></br>
<br></br>
  ...<br></br>
<br></br>
&#125;<br></br>
</pre></div>

</figure>

<p className="it">La función toma el <code>searchTerm</code> y devuelve otra función que toma un elemento. La función devuelta se utiliza para filtrar la lista basándose en la condición definida en la función.</p>

<p className="p">The function takes the <code>searchTerm</code> and returns another function which takes an item. The returned function will be used to filter the list based on the condition defined in the function.</p>

<p className="it">Vamos a definir la condición.</p>

<p className="p">Let’s define the condition.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>function isSearched(searchTerm) &#123;<br></br>
  return function(item) &#123;<br></br>
<code className="uil">    return !searchTerm ||
</code><br></br><br></br><code className="uil">      item.title.toLowerCase().includes(searchTerm.toLowerCase());
</code><br></br>  &#125;<br></br>
&#125;<br></br>
<br></br>
class App extends Component &#123;<br></br>
<br></br>
  ...<br></br>
<br></br>
&#125;<br></br>
</pre></div>

</figure>

<p className="it">La condición dice varias cosas. Filtra la lista sólo cuando una <code>searchTerm</code> se establece. Cuando una <code>searchTerm</code> se establece, coincidiendo el patrón de la entrada <code>searchTerm</code> con el título del artículo. Podes hacer eso incorporando en <code>includes</code> la funcionalidad de JavaScript. Sólo cuando el patrón coincide, se vuelve verdadero y el elemento queda en la lista. Pero tene cuidado con la coincidencia de patrones: No hay que olvidar las minúsculas en ambas cadenas. De lo contrario habrá desajustes entre el término buscado 'redux' y un título del artículo 'Redux'.</p>

<p className="p">The condition says multiple things. You filter the list only when a <code>searchTerm</code> is set. When a <code>searchTerm</code> is set, you match the incoming <code>searchTerm</code> pattern with the title of the item. You can do that with the built-in <code>includes</code> JavaScript functionality. Only when the pattern matches, you return true and the item stays in the list. But be careful with pattern matching: You shouldn’t forget to lower case both strings. Otherwise there will be mismatches between a search term ‘redux’ and an item title ‘Redux’.</p>

<p className="it">Una cosa que se deja de mencionar: Hicimos trampa un poco utilizando el built-in que incluye la funcionalidad de JavaScript. Ya es una característica ES6. ¿Cómo se vería eso en JavaScript ES5? Se podría utilizar la función <code>indexOf()</code> para obtener el índice del elemento de la lista. Cuando el artículo esté en la lista, <code>indexOf()</code> devolverá un índice positivo.</p>

<p className="p">One thing is left to mention: We cheated a bit by using the built-in includes JavaScript functionality. It is already an ES6 feature. How would that look like in JavaScript ES5? You would use the <code>indexOf()</code> function to get the index of the item in the list. When the item is in the list, <code>indexOf()</code> will return a positive index.</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>

<div className="highlight"><pre><code></code><code className="c1">// ES5</code><br></br>
<code className="nx">string</code><code className="p">.</code><code className="nx">indexOf</code><code className="p">(</code><code className="nx">pattern</code><code className="p">)</code> <code className="o">!==</code> <code className="o">-</code><code className="mi">1</code>
<br></br>
<code className="c1">// ES6</code><br></br>
<code className="nx">string</code><code className="p">.</code><code className="nx">includes</code><code className="p">(</code><code className="nx">pattern</code><code className="p">)</code>
</pre></div>

</figure>

<p className="it">Podes hacer otra refactorización ordenada con una nueva funcion arrow ES6. Esto hace a la función más concisa:</p>

<p className="p">Another neat refactoring can be done with an ES6 arrow function again. It makes the function more concise:</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>

<div className="highlight"><pre><code></code><code className="c1">// ES5</code><br></br>
<code className="kd">function</code> <code className="nx">isSearched</code><code className="p">(</code><code className="nx">searchTerm</code><code className="p">)</code> <code className="p">&#123;</code><br></br>
  <code className="k">return</code> <code className="kd">function</code><code className="p">(</code><code className="nx">item</code><code className="p">)</code> <code className="p">&#123;</code><br></br>
    <code className="k">return</code> <code className="o">!</code><code className="nx">searchTerm</code> <code className="o">||</code><br></br> <code className="nx">item</code><code className="p">.</code><code className="nx">title</code><code className="p">.</code><code className="nx">toLowerCase</code><code className="p">().</code><code className="nx">includes</code><code className="p">(</code><code className="nx">searchTerm</code><code className="p">.</code><code className="nx">toLowerCa</code><code className="o">\</code><br></br>
<code className="nx">se</code><code className="p">());</code><br></br>
  <code className="p">&#125;</code><br></br>
<code className="p">&#125;</code><br></br>
<br></br>
<code className="c1">// ES6</code><br></br>
<code className="kr">const</code> <code className="nx">isSearched</code> <code className="o">=</code> <code className="p">(</code><code className="nx">searchTerm</code><code className="p">)</code> <code className="o">=&gt;</code><br></br> <code className="p">(</code><code className="nx">item</code><code className="p">)</code> <code className="o">=&gt;</code>
  <code className="o">!</code><code className="nx">searchTerm</code> <code className="o">||</code><br></br> <code className="nx">item</code><code className="p">.</code><code className="nx">title</code><code className="p">.</code><code className="nx">toLowerCase</code><code className="p">().</code><code className="nx">includes</code><code className="p">(</code><code className="nx">searchTerm</code><code className="p">.</code><code className="nx">toLowerCase</code><code className="p">());</code>
</pre></div>

</figure>

<p className="it">Se podría argumentar que funcionan es más fácil de leer. Personalmente me quedo con la segunda. El ecosistemReact  utiliza una gran cantidad de conceptos de programación funcional. Sucede con frecuencia que vas a utilizar una función que devuelve una función (funciones de orden superior). En ES6 podes expresar estos más concisa con funciones arrow.</p>

<p className="p">One could argue which function is more readable. Personally I prefer the second one. The React ecosystem uses a lot of functional programming concepts. It happens often that you will use a function which returns a function (higher order functions). In ES6 you can express these more concise with arrow functions.</p>

<p className="it">Por último, pero no menos importante, tenes que utilizar la define <code>isSearched()</code> la función para filtrar la lista.</p>

<p className="p">Last but not least, you have to use the defined <code>isSearched()</code> function to filter your list.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class App extends Component &#123;

  ...

  render() &#123;
    return (
      &lt;div className="App"&gt;
        &lt;form&gt;
          &lt;input
            type="text"
            onChange=&#123;this.onSearchChange&#125;
          /&gt;
        &lt;/form&gt;
<code className="uil">        &#123; this.state.list.filter(isSearched(this.state.searchTerm)).map(item =&gt;
</code>          ...
        )&#125;
      &lt;/div&gt;
    );
  &#125;
&#125;
</pre></div>

</figure>

<p className="it">La funcionalidad de búsqueda deberías funcionar ahora. Intentalo.</p>

<p className="p">The search functionality should work now. Try it.</p>

<h4 id="leanpub-auto-exercises-14">Exercises:</h4>

<ul><li className="it">leer más sobre <a href="https://facebook.github.io/react/docs/handling-events.html">React eventos</a>
</li>
 
  <li className="p">read more about <a href="https://facebook.github.io/react/docs/handling-events.html">React events</a>
</li>

<li className="it">leer más acerca de <a href="https://en.wikipedia.org/wiki/Higher-order_function">las funciones de orden superior</a>
</li>
  <li className="p">read more about <a href="https://en.wikipedia.org/wiki/Higher-order_function">higher order functions</a>
</li>
</ul>


</div>

<div>
<h3 id="leanpub-auto-es6-destructuring">ES6 Destructuring</h3>

<p className="it">Hay una manera de acceder a la ES6 propiedades de los objetos y las matrices más fácil. Se llama desestructuración. Compare el siguiente fragmento de JavaScript ES5 y ES6.</p>


<p className="p">There is a way in ES6 to access properties in objects and arrays easier. It’s called destructuring. Compare the following snippet in JavaScript ES5 and ES6.</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>

<div className="highlight"><pre><code></code><code className="kr">const</code> <code className="nx">user</code> <code className="o">=</code> <code className="p">&#123;</code>
  <code className="nx">firstname</code><code className="o">:</code> <code className="s1">'Robin'</code><code className="p">,</code>
  <code className="nx">lastname</code><code className="o">:</code> <code className="s1">'Wieruch'</code><code className="p">,</code>
<code className="p">&#125;;</code>

<code className="c1">// ES5</code>
<code className="kd">var</code> <code className="nx">firstname</code> <code className="o">=</code> <code className="nx">user</code><code className="p">.</code><code className="nx">firstname</code><code className="p">;</code>
<code className="kd">var</code> <code className="nx">lastname</code> <code className="o">=</code> <code className="nx">user</code><code className="p">.</code><code className="nx">lastname</code><code className="p">;</code>

<code className="c1">// ES6</code>
<code className="kr">const</code> <code className="p">&#123;</code> <code className="nx">firstname</code><code className="p">,</code> <code className="nx">lastname</code> <code className="p">&#125;</code> <code className="o">=</code> <code className="nx">user</code><code className="p">;</code>

<code className="nx">console</code><code className="p">.</code><code className="nx">log</code><code className="p">(</code><code className="nx">firstname</code> <code className="o">+</code> <code className="s1">' '</code> <code className="o">+</code> <code className="nx">lastname</code><code className="p">);</code>
<code className="c1">// output: Robin Wieruch</code>
</pre></div>

</figure>

<p className="it">Si bien hay que añadir una línea adicional cada vez que desees acceder a una propiedad de objeto en ES5, podes hacerlo en una línea en ES6. Además usted no tiene que tener nombres de propiedades duplicadas. Una buena práctica para facilitar la lectura es utilizar líneas múltiples cuando desestructurar un objeto en varias propiedades.</p>


<p className="p">While you have to add an extra line each time you want to access an object property in ES5, you can do it in one line in ES6. Additionally you don’t have to have duplicated property names. A best practice for readability is to use multilines when you destructure an object into multiple properties.</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>

<div className="highlight"><pre><code></code><code className="kr">const</code> <code className="p">&#123;</code>
  <code className="nx">firstname</code><code className="p">,</code>
  <code className="nx">lastname</code>
<code className="p">&#125;</code> <code className="o">=</code> <code className="nx">user</code><code className="p">;</code>
</pre></div>

</figure>

<p className="it">Lo mismo ocurre con las matrices. Podes desestructurar ellos también, pero que sea más fácil de leer con líneas múltiples.</p>


<p className="p">The same goes for arrays. You can destructure them too, but keep it more readable with multilines.</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>

<div className="highlight"><pre><code></code><code className="kr">const</code> <code className="nx">users</code> <code className="o">=</code> <code className="p">[</code><code className="s1">'Robin'</code><code className="p">,</code> <code className="s1">'Andrew'</code><code className="p">,</code> <code className="s1">'Dan'</code><code className="p">];</code>
<code className="kr">const</code> <code className="p">[</code>
  <code className="nx">userOne</code><code className="p">,</code>
  <code className="nx">userTwo</code><code className="p">,</code>
  <code className="nx">userThree</code>
<code className="p">]</code> <code className="o">=</code> <code className="nx">users</code><code className="p">;</code>

<code className="nx">console</code><code className="p">.</code><code className="nx">log</code><code className="p">(</code><code className="nx">userOne</code><code className="p">,</code> <code className="nx">userTwo</code><code className="p">,</code> <code className="nx">userThree</code><code className="p">);</code>
<code className="c1">// output: Robin Andrew Dan</code>
</pre></div>

</figure>

<p className="it">Tal vez usted ha notado que el estado en el componente de aplicación podes obtener desestructurado de la misma manera. Podes acortar la línea de filtros y mapa de código.</p>


<p className="p">Perhaps you have noticed that the state in the App component can get destructured the same way. You can shorten the filter and map line of code.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>  render() &#123;
<code className="uil">    const &#123; searchTerm, list &#125; = this.state;
</code>    return (
      &lt;div className="App"&gt;
        ...
<code className="uil">        &#123; list.filter(isSearched(searchTerm)).map(item =&gt;
</code>          ...
        )&#125;
      &lt;/div&gt;
    );
</pre></div>

</figure>

<p className="it">podes hacerlo de la manera ES5 ES6 o:</p>


<p className="p">You can do it the ES5 or ES6 way:</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>

<div className="highlight"><pre><code></code><code className="c1">// ES5</code>
<code className="kd">var</code> <code className="nx">searchTerm</code> <code className="o">=</code> <code className="k">this</code><code className="p">.</code><code className="nx">state</code><code className="p">.</code><code className="nx">searchTerm</code><code className="p">;</code>
<code className="kd">var</code> <code className="nx">list</code> <code className="o">=</code> <code className="k">this</code><code className="p">.</code><code className="nx">state</code><code className="p">.</code><code className="nx">list</code><code className="p">;</code>

<code className="c1">// ES6</code>
<code className="kr">const</code> <code className="p">&#123;</code> <code className="nx">searchTerm</code><code className="p">,</code> <code className="nx">list</code> <code className="p">&#125;</code> <code className="o">=</code> <code className="k">this</code><code className="p">.</code><code className="nx">state</code><code className="p">;</code>
</pre></div>

</figure>

<p className="it">Pero ya que el libro utiliza JavaScript ES6 mayor parte del tiempo, Debes pegarse a ES6.</p>


<p className="p">But since the book uses JavaScript ES6 most of the time, you should stick to ES6.</p>

<h4 id="leanpub-auto-exercises-15">Exercises:</h4>

<ul><li className="it">leer más sobre <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">ES6 desestructuración</a>
</li>
  <li className="p">read more about <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">ES6 destructuring</a>
</li>
</ul>


</div>
<div>
<h3 id="leanpub-auto-controlled-components">Controlled Components</h3>

<p className="it">Ya has aprendido sobre el flujo de datos unidireccional en React. La misma ley se aplica para el campo del input, que actualiza el estado que a su vez filtra la lista. El estado fue cambiado, el método <code>render()</code> se ejecuta de nuevo y utiliza el reciente <code>searchTerm</code> estado para solicitar la condición de filtro.</p>

<p className="p">You already learned about the unidirectional data flow in React. The same law applies for the input field, which updates the state that in turn filters the list. The state was changed, the <code>render()</code> method runs again and uses the recent <code>searchTerm</code> state to apply the filter condition.</p>

<p className="it">Pero no olvidemos algo en el elemento de entrada? Una etiqueta HTML de entrada viene con un atributo <code>value</code>. El atributo de valor por lo general tiene el valor que se muestra en el campo del input - en nuestro caso la propiedad <code>searchTerm</code>. Sin embargo, parece que no es necesario que en React.</p>

<p className="p">But didn’t we forget something in the input element? A HTML input tag comes with a <code>value</code> attribute. The value attribute usually has the value that is shown in the input field - in our case the <code>searchTerm</code> property. However, it seems like we don’t need that in React.</p>

<p className="it">Así está mal. Los elementos de formulario, como <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code> y <code>&lt;select&gt;</code> mantienen su propio estado. Modifican el valor internamente una vez que alguien cambia desde el exterior. En React eso se llama un <strong>componente no controlada</strong> , ya que maneja su propio estado. En React debes asegurarse de que los elementos <strong>componentes controlados</strong> .</p>

<p className="p">That’s wrong. Form elements such as <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code> and <code>&lt;select&gt;</code> hold their own state. They modify the value internally once someone changes it from the outside. In React that’s called an <strong>uncontrolled component</strong>, because it handles its own state. In React you should make sure to make those elements <strong>controlled components</strong>.</p>

<p className="it">¿Cómo debes hacer eso? Es suficiente con establecer el atributo de valor del campo del input. El valor ya está registrado en la propiedad <code>searchTerm</code> del estado.</p>

<p className="p">How should you do that? You only have to set the value attribute of the input field. The value is already saved in the <code>searchTerm</code> state property.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class App extends Component &#123;

  ...

  render() &#123;
    const &#123; searchTerm, list &#125; = this.state;
    return (
      &lt;div className="App"&gt;
        &lt;form&gt;
          &lt;input
            type="text"
<code className="uil">            value=&#123;searchTerm&#125;
</code>            onChange=&#123;this.onSearchChange&#125;
          /&gt;
        &lt;/form&gt;
        ...
      &lt;/div&gt;
    );
  &#125;
&#125;
</pre></div>

</figure>

<p className="it">Así es. El ciclo de flujo de datos unidireccional para el campo del input es autónomo ahora. El estado del componente interno es la única fuente de la verdad para el campo del input.</p>

<p className="p">That’s it. The unidirectional data flow cycle for the input field is self-contained now. The internal component state is the single source of truth for the input field.</p>

<p className="it">Toda la gestión de estado interno y el flujo unidireccional de datos podrían ser nuevas para usted. Pero una vez que están acostumbrados a ello, será su flujo natural para poner en práctica las cosas en React. En general, React traído un nuevo patrón con el flujo de datos unidireccional al mundo de las aplicaciones de una sola página. Se adoptó por varios frameworks y bibliotecas.</p>

<p className="p">The whole internal state management and unidirectional data flow might be new to you. But once you are used to it, it will be your natural flow to implement things in React. In general, React brought a novel pattern with the unidirectional data flow to the world of single page applications. It is adopted by several frameworks and libraries.</p>

<h4 id="leanpub-auto-exercises-16">Exercises:</h4>

<ul><li className="it">leer más sobre <a href="https://facebook.github.io/react/docs/forms.html">React formas</a>
</li>
  <li className="p">read more about <a href="https://facebook.github.io/react/docs/forms.html">React forms</a>
</li>
</ul>


</div>

<div>
<h3 id="leanpub-auto-composeable-components">Composeable Components</h3>

<p className="it">Hay una más pequeña propiedad que podes acceder en los puntales del objeto: la <code>children</code> hélice. Podes utilizar para pasar a tus elementos componentes desde arriba - que son desconocidos para el propio componente - pero que sea posible componer los componentes entre sí. Vamos a ver cómo esto se ve como cuando pasa únicamente un texto (cadena) como un niño al componente de búsqueda.</p>

<p className="p">There is one more little property which is accessible in the props object: the <code>children</code> prop. You can use it to pass elements to your components from above - which are unknown to the component itself - but make it possible to compose components into each other. Let’s see how this looks like when you only pass a text (string) as a child to the Search component.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class App extends Component &#123;

  ...

  render() &#123;
    const &#123; searchTerm, list &#125; = this.state;
    return (
      &lt;div className="App"&gt;
<code className="uil">        &lt;Search
</code><code className="uil">          value=&#123;searchTerm&#125;
</code><code className="uil">          onChange=&#123;this.onSearchChange&#125;
</code><code className="uil">        &gt;
</code><code className="uil">          Search
</code><code className="uil">        &lt;/Search&gt;
</code>        &lt;Table
          list=&#123;list&#125;
          pattern=&#123;searchTerm&#125;
          onDismiss=&#123;this.onDismiss&#125;
        /&gt;
      &lt;/div&gt;
    );
  &#125;
&#125;
</pre></div>

</figure>

<p className="it">Ahora el componente de búsqueda podes desestructurar la propiedad a los niños de los props. Entonces podes especificar dónde se deben mostrar a los niños.</p>

<p className="p">Now the Search component can destructure the children property from props. Then it can specify where the children should be displayed.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class Search extends Component &#123;
  render() &#123;
<code className="uil">    const &#123; value, onChange, children &#125; = this.props;
</code>    return (
      &lt;form&gt;
<code className="uil">        &#123;children&#125; &lt;input
</code>          type="text"
          value=&#123;value&#125;
          onChange=&#123;onChange&#125;
        /&gt;
      &lt;/form&gt;
    );
  &#125;
&#125;
</pre></div>

</figure>

<p className="it">El “Buscar” texto debes ser visible al lado de su campo del input ahora. Cuando se utiliza el componente de búsqueda en otro lugar, podes elegir un texto diferente si lo desea. Después de todo no es único texto que podes pasar cuando eran niños. Podes pasar un elemento y árboles de elementos (que podes ser encapsulado por los componentes de nuevo) cuando eran niños. La propiedad niños hace que sea posible tejer componentes entre sí.</p>

<p className="p">The “Search” text should be visible next to your input field now. When you use the Search component somewhere else, you can choose a different text if you like. After all it is not only text that you can pass as children. You can pass an element and element trees (which can be encapsulated by components again) as children. The children property makes it possible to weave components into each other.</p>

<h4 id="leanpub-auto-exercises-18">Exercises:</h4>

<ul>
<li className="it">leer más sobre <a href="https://facebook.github.io/react/docs/composition-vs-inheritance.html">el modelo de composición de React</a>
</li>
  <li className="p">read more about <a href="https://facebook.github.io/react/docs/composition-vs-inheritance.html">the composition model of React</a>
</li>
</ul>


</div>
<div>
<h3 id="leanpub-auto-reusable-components">Reusable Components</h3>

<p className="it">Los componentes reutilizables y composeable te ayuden a llegar a las jerarquías de componentes capaces. Son la base de la capa de vista. Los últimos capítulos mencionan a menudo el término reutilización. Podes volver a utilizar la tabla y de Búsqueda componentes ya. No hay que olvidar el componente de aplicación .</p>



<p className="p">Reusable and composeable components empower you to come up with capable component hierarchies. They are the foundation of your view layer. The last chapters mentioned often the term reusability. You can reuse the Table and Search components already. Not to forget the App component.</p>

<p className="it">Vamos a definir un componente más reutilizable - un componente Button - que consigue volver a utilizar con más frecuencia con el tiempo.</p>



<p className="p">Let’s define one more reusable component - a Button component - which gets reused more often eventually.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre><code></code><code className="kr">class</code> <code className="nx">Button</code> <code className="kr">extends</code> <code className="nx">Component</code> <code className="p">&#123;</code>
  <code className="nx">render</code><code className="p">()</code> <code className="p">&#123;</code>
    <code className="kr">const</code> <code className="p">&#123;</code>
      <code className="nx">onClick</code><code className="p">,</code>
      <code className="nx">className</code><code className="p">,</code>
      <code className="nx">children</code><code className="p">,</code>
    <code className="p">&#125;</code> <code className="o">=</code> <code className="k">this</code><code className="p">.</code><code className="nx">props</code><code className="p">;</code>

    <code className="k">return</code> <code className="p">(</code>
      <code className="o">&lt;</code><code className="nx">button</code>
        <code className="nx">onClick</code><code className="o">=</code><code className="p">&#123;</code><code className="nx">onClick</code><code className="p">&#125;</code>
        <code className="nx">className</code><code className="o">=</code><code className="p">&#123;</code><code className="nx">className</code><code className="p">&#125;</code>
        <code className="nx">type</code><code className="o">=</code><code className="s2">"button"</code>
      <code className="o">&gt;</code>
        <code className="p">&#123;</code><code className="nx">children</code><code className="p">&#125;</code>
      <code className="o">&lt;</code><code className="err">/button&gt;</code>
    <code className="p">);</code>
  <code className="p">&#125;</code>
<code className="p">&#125;</code>
</pre></div>

</figure>

<p className="it">Podría parecer redundante para declarar un componente de este tipo. Que vas a utilizar un <code>Button</code> lugar de una <code>button</code>. Sólo se ahorra al <code>type="button"</code>. Excepto por el tipo de atributo tiene que definir todo lo demás cuando se desea utilizar el componente Button. Pero hay que pensar en la inversión a largo plazo aquí. Imagine que tiene varios botones en tu aplicación , pero queres cambiar un atributo, el estilo o el comportamiento para el botón. Sin el componente que tendría que refactorizar cada botón. En cambio, el componente Button asegura tener sólo una única fuente de verdad. Un botón de refactorizar todos los botones a la vez.</p>



<p className="p">It might seem redundant to declare such a component. You will use a <code>Button</code> instead of a <code>button</code>. It only spares the <code>type="button"</code>. Except for the type attribute you have to define everything else when you want to use the Button component. But you have to think about the long term investment here. Imagine you have several buttons in your application, but want to change an attribute, style or behavior for the button. Without the component you would have to refactor every button. Instead the Button component ensures to have only one single source of truth. One Button to refactor all buttons at once.</p>

<p className="it">Puesto que usted ya tiene un elemento de botón, podes utilizar el componente Button en lugar. Se omite el atributo type.</p>



<p className="p">Since you already have a button element, you can use the Button component instead. It omits the type attribute.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class Table extends Component &#123;
  render() &#123;
    const &#123; list, pattern, onDismiss &#125; = this.props;
    return (
      &lt;div&gt;
        &#123; list.filter(isSearched(pattern)).map(item =&gt;
          &lt;div key=&#123;item.objectID&#125;&gt;
            &lt;span&gt;
              &lt;a href=&#123;item.url&#125;&gt;&#123;item.title&#125;&lt;/a&gt;
            &lt;/span&gt;
            &lt;span&gt;&#123;item.author&#125;&lt;/span&gt;
            &lt;span&gt;&#123;item.num_comments&#125;&lt;/span&gt;
            &lt;span&gt;&#123;item.points&#125;&lt;/span&gt;
            &lt;span&gt;
<code className="uil">              &lt;Button onClick=&#123;() =&gt; onDismiss(item.objectID)&#125;&gt;
</code><code className="uil">                Dismiss
</code><code className="uil">              &lt;/Button&gt;
</code>            &lt;/span&gt;
          &lt;/div&gt;
        )&#125;
      &lt;/div&gt;
    );
  &#125;
&#125;
</pre></div>

</figure>

<p className="it">El componente Button espera una propiedad <code>className</code> en los props. Pero no pasó ninguna <code>className</code> cuando se utilizó el botón. Debería ser más explícito en el componente Button que el <code>className</code> es opcional.</p>



<p className="p">The Button component expects a <code>className</code> property in the props. But we didn’t pass any <code>className</code> when the Button was used. It should be more explicit in the Button component that the <code>className</code> is optional.</p>

<p className="it">podes utilizar una función JavaScript ES6: el parámetro por defecto.</p>



<p className="p">You can use a JavaScript ES6 feature: the default parameter.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class Button extends Component &#123;
  render() &#123;
    const &#123;
      onClick,
<code className="uil">      className = '',
</code>      children,
    &#125; = this.props;

    ...
  &#125;
&#125;
</pre></div>

</figure>

<p className="it">Ahora, cada vez que no hay propiedad <code>className</code>, cuyo valor será una cadena vacía.</p>



<p className="p">Now, whenever there is no <code>className</code> property, the value will be an empty string.</p>

<h4 id="leanpub-auto-exercises-19">Exercises:</h4>

<ul>
<li className="it">leer más acerca de <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters">los parámetros por defecto ES6</a>
</li>
  <li className="p">read more about <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters">ES6 default parameters</a>
</li>
</ul>


</div>

<div>
<h3 id="leanpub-auto-component-declarations">Component Declarations</h3>

<p className="it">A estas alturas ya tiene cuatro componentes de la clase ES6. Pero podes hacer mejor. Déjeme introducir componentes funcionales sin estado como alternativa para los componentes de la clase ES6. Antes de que se refactorizar tus componentes, vamos a introducir los diferentes tipos de componentes.</p>

<p className="p">By now you have four ES6 class components. But you can do better. Let me introduce functional stateless components as alternative for ES6 class components. Before you will refactor your components, let’s introduce the different types of components.</p>

<ul>
  <li className="p">
<strong>Functional Stateless Components:</strong> These components are functions which get an input and return an output. The input is the props object. The output is a component instance. So far it is quite similar to an ES6 class component. However, functional stateless components are functions (functional) and they have no internal state (stateless). You cannot access the state with <code>this.state</code> because there is no <code>this</code> object. Additionally they have no lifecycle methods. You didn’t learn about lifecycle methods yet, but you already used two: <code>constructor()</code> and <code>render()</code>. Keep this fact about functional stateless components in mind, when you arrive at the lifecycle methods chapter later on.</li>
  <li className="p">
<strong>ES6 Class Components:</strong> You already used this type of component declaration. In the class definition they extend from the React component. The <code>extend</code> hooks all the lifecycle methods - available in the React component API - to the component. As I mentioned, you already used two of them. Additionally you can store and manipulate state in ES6 class components.</li>
  <li className="p">
<strong>React.createClass:</strong> The component declaration was used in older versions of React and still in JavaScript ES5 React applications. But <a href="https://facebook.github.io/react/blog/2015/03/10/react-v0.13.html">Facebook declared it as deprecated</a> in favor of ES6. They even added a <a href="https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html">deprecation warning in version 15.5</a>. You will not use it in the book.</li>
</ul>

<p className="it">Pero cuándo utilizar componentes funcionales sin estado más de los componentes de clase ES6? Una regla de oro es usar componentes funcionales sin estado cuando no se necesita métodos estatales componente o componentes del ciclo de vida interna. Por lo general, se empieza a poner en práctica tus componentes como componentes funcionales sin estado. Una vez que necesita tener acceso a los métodos del estado o del ciclo de vida, lo que tiene que refactorizar a un componente de clase ES6.</p>

<p className="p">But when to use functional stateless components over ES6 class components? A rule of thumb is to use functional stateless components when you don’t need internal component state or component lifecycle methods. Usually you start to implement your components as functional stateless components. Once you need access to the state or lifecycle methods, you have to refactor it to an ES6 class component.</p>

<p className="it">Volvamos a la aplicación . El componente de aplicación utiliza estado interno. Es por eso que tiene que permanecer como un componente de clase ES6. Pero los otros tres de tus componentes son de clase ES6 sin estado y sin métodos de ciclo de vida. Vamos a refactorizar juntos el componente de búsqueda de un componente funcional sin estado. La Mesa y botón del componente refactorización permanecerá como su ejercicio.</p>

<p className="p">Let’s get back to your application. The App component uses internal state. That’s why it has to stay as an ES6 class component. But the other three of your ES6 class components are stateless without lifecycle methods. Let’s refactor together the Search component to a stateless functional component. The Table and Button component refactoring will remain as your exercise.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre><code className="uil">function Search(props) &#123;
</code><code className="uil">  const &#123; value, onChange, children &#125; = props;
</code><code className="uil">  return (
</code><code className="uil">    &lt;form&gt;
</code><code className="uil">      &#123;children&#125; &lt;input
</code><code className="uil">        type="text"
</code><code className="uil">        value=&#123;value&#125;
</code><code className="uil">        onChange=&#123;onChange&#125;
</code><code className="uil">      /&gt;
</code><code className="uil">    &lt;/form&gt;
</code><code className="uil">  );
</code><code className="uil">&#125;
</code></pre></div>

</figure>

<p className="it">Así es básicamente la misma. Pero podes hacer más sabia código en un componente sin estado funcional. Vos ya conoce la desestructuración ES6. Lo más recomendable es usarlo en la firma de la función a desestructurar los puntales.</p>

<p className="p">That’s basically it. But you can do more code wise in a functional stateless component. You already know the ES6 destructuring. The best practice is to use it in the function signature to destructure the props.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre><code className="uil">function Search(&#123; value, onChange, children &#125;) &#123;
</code>  return (
    &lt;form&gt;
      &#123;children&#125; &lt;input
        type="text"
        value=&#123;value&#125;
        onChange=&#123;onChange&#125;
      /&gt;
    &lt;/form&gt;
  );
&#125;
</pre></div>

</figure>

<p className="it">Pero podes mejorar. Vos ya sabe que las funciones arrow ES6 te permiten mantener tus funciones concisa. Podes quitar el cuerpo del bloque de la función. En un cuerpo concisa rendimiento, implícito se une de este modo podes quitar la instrucción return. Desde tu componente sin estado funcional es una función, podes mantener concisa también.</p>

<p className="p">But it can get better. You know already that ES6 arrow functions allow you to keep your functions concise. You can remove the block body of the function. In a concise body an implicit return is attached thus you can remove the return statement. Since your functional stateless component is a function, you can keep it concise as well.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre><code className="uil">const Search = (&#123; value, onChange, children &#125;) =&gt;
</code><code className="uil">  &lt;form&gt;
</code><code className="uil">    &#123;children&#125; &lt;input
</code><code className="uil">      type="text"
</code><code className="uil">      value=&#123;value&#125;
</code><code className="uil">      onChange=&#123;onChange&#125;
</code><code className="uil">    /&gt;
</code><code className="uil">  &lt;/form&gt;
</code></pre></div>

</figure>

<p className="it">El último paso fue especialmente útil para hacer cumplir sólo para tener props como entrada y un elemento como salida. Nada en el medio. Aún así, podes <em>hacer algo</em> en el medio mediante el uso de un cuerpo de bloque en su funcion arrow ES6.</p>

<p className="p">The last step was especially useful to enforce only to have props as input and an element as output. Nothing in between. Still, you could <em>do something</em> in between by using a block body in your ES6 arrow function.</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>

<div className="highlight"><pre><code></code><code className="kr">const</code> <code className="nx">Search</code> <code className="o">=</code> <code className="p">(&#123;</code> <code className="nx">value</code><code className="p">,</code> <code className="nx">onChange</code><code className="p">,</code> <code className="nx">children</code> <code className="p">&#125;)</code> <code className="o">=&gt;</code> <code className="p">&#123;</code>

  <code className="c1">// do something</code>

  <code className="k">return</code> <code className="p">(</code>
    <code className="o">&lt;</code><code className="nx">form</code><code className="o">&gt;</code>
      <code className="p">&#123;</code><code className="nx">children</code><code className="p">&#125;</code> <code className="o">&lt;</code><code className="nx">input</code>
        <code className="nx">type</code><code className="o">=</code><code className="s2">"text"</code>
        <code className="nx">value</code><code className="o">=</code><code className="p">&#123;</code><code className="nx">value</code><code className="p">&#125;</code>
        <code className="nx">onChange</code><code className="o">=</code><code className="p">&#123;</code><code className="nx">onChange</code><code className="p">&#125;</code>
      <code className="o">/&gt;</code>
    <code className="o">&lt;</code><code className="err">/form&gt;</code>
  <code className="p">);</code>
<code className="p">&#125;</code>
</pre></div>

</figure>

<p className="it">Pero usted no lo necesita por ahora. Es por eso que podes mantener la versión anterior sin el cuerpo del bloque.</p>

<p className="p">But you don’t need it for now. That’s why you can keep the previous version without the block body.</p>

<p className="it">Ahora tenes un componente sin estado funcional de peso ligero. Una vez que se necesita el acceso a tus métodos de ciclo de vida del estado componente o internos, que te refactorearlo a un componente de clase ES6. Además hemos visto cómo JavaScript ES6 podes utilizar en componentes React para hacerlos más elegante.</p>

<p className="p">Now you have one lightweight functional stateless component. Once you would need access to its internal component state or lifecycle methods, you would refactor it to an ES6 class component. In addition you saw how JavaScript ES6 can be used in React components to make them more elegant.</p>

<h4 id="leanpub-auto-exercises-20">Exercises:</h4>

<ul><li className="it">refactorizar el componente Tabla y Button a los apátridas componentes funcionales</li>
  

  <li className="p">refactor the Table and Button component to stateless functional components</li>
  <li className="it">leer más acerca de <a href="https://facebook.github.io/react/docs/components-and-props.html">los componentes de clase ES6 y componentes funcionales sin estado</a>
</li>
  <li className="p">read more about <a href="https://facebook.github.io/react/docs/components-and-props.html">ES6 class components and functional stateless components</a>
</li>
</ul>


</div>

<div>
<h3 id="leanpub-auto-styling-components">Styling Components</h3>

<p className="it">Vamos a añadir algo de estilo básico para tu aplicación y componentes. Podes volver a utilizar los archivos <em>src/App.css</em> y <em>src/index.css</em>. Preparés un poco de CSS para copiar y pegar, pero no dude en utilizar su propio estilo.</p>

<p className="p">Let’s add some basic styling to your application and components. You can reuse the <em>src/App.css</em> and <em>src/index.css</em> files. I prepared some CSS to copy and paste, but feel free to use your own style.</p>

<figure className="code">
  <figcaption>src/index.css</figcaption>

<div className="highlight"><pre><code></code><code className="nt">body</code> <code className="p">&#123;</code>
  <code className="nb">color</code><code className="o">:</code> <code className="m">#222</code><code className="p">;</code>
  <code className="nb">background</code><code className="o">:</code> <code className="m">#f4f4f4</code><code className="p">;</code>
  <code className="nb">font</code><code className="o">:</code> <code className="m">400</code> <code className="m">14px</code> <code className="n">CoreSans</code><code className="o">,</code> <code className="n">Arial</code><code className="o">,</code><code className="nb">sans-serif</code><code className="p">;</code>
<code className="p">&#125;</code>

<code className="nt">a</code> <code className="p">&#123;</code>
  <code className="nb">color</code><code className="o">:</code> <code className="m">#222</code><code className="p">;</code>
<code className="p">&#125;</code>

<code className="nt">a</code><code className="nd">:hover</code> <code className="p">&#123;</code>
  <code className="nb">text-decoration</code><code className="o">:</code> <code className="nb">underline</code><code className="p">;</code>
<code className="p">&#125;</code>

<code className="nt">ul</code><code className="o">,</code> <code className="nt">li</code> <code className="p">&#123;</code>
  <code className="nb">list-style</code><code className="o">:</code> <code className="nb">none</code><code className="p">;</code>
  <code className="nb">padding</code><code className="o">:</code> <code className="m">0</code><code className="p">;</code>
  <code className="nb">margin</code><code className="o">:</code> <code className="m">0</code><code className="p">;</code>
<code className="p">&#125;</code>

<code className="nt">input</code> <code className="p">&#123;</code>
  <code className="nb">padding</code><code className="o">:</code> <code className="m">10px</code><code className="p">;</code>
  <code className="nb">border</code><code className="o">-</code><code className="n">radius</code><code className="o">:</code> <code className="m">5px</code><code className="p">;</code>
  <code className="nb">outline</code><code className="o">:</code> <code className="nb">none</code><code className="p">;</code>
  <code className="nb">margin-right</code><code className="o">:</code> <code className="m">10px</code><code className="p">;</code>
  <code className="nb">border</code><code className="o">:</code> <code className="m">1px</code> <code className="nb">solid</code> <code className="m">#dddddd</code><code className="p">;</code>
<code className="p">&#125;</code>

<code className="nt">button</code> <code className="p">&#123;</code>
  <code className="nb">padding</code><code className="o">:</code> <code className="m">10px</code><code className="p">;</code>
  <code className="nb">border</code><code className="o">-</code><code className="n">radius</code><code className="o">:</code> <code className="m">5px</code><code className="p">;</code>
  <code className="nb">border</code><code className="o">:</code> <code className="m">1px</code> <code className="nb">solid</code> <code className="m">#dddddd</code><code className="p">;</code>
  <code className="nb">background</code><code className="o">:</code> <code className="nb">transparent</code><code className="p">;</code>
  <code className="nb">color</code><code className="o">:</code> <code className="m">#808080</code><code className="p">;</code>
  <code className="nb">cursor</code><code className="o">:</code> <code className="nb">pointer</code><code className="p">;</code>
<code className="p">&#125;</code>

<code className="nt">button</code><code className="nd">:hover</code> <code className="p">&#123;</code>
  <code className="nb">color</code><code className="o">:</code> <code className="m">#222</code><code className="p">;</code>
<code className="p">&#125;</code>

<code className="o">*</code><code className="nd">:focus</code> <code className="p">&#123;</code>
  <code className="nb">outline</code><code className="o">:</code> <code className="nb">none</code><code className="p">;</code>
<code className="p">&#125;</code>
</pre></div>

</figure>

<figure className="code">
  <figcaption>src/App.css</figcaption>

<div className="highlight"><pre><code></code><code className="nc">.page</code> <code className="p">&#123;</code>
  <code className="nb">margin</code><code className="o">:</code> <code className="m">20px</code><code className="p">;</code>
<code className="p">&#125;</code>

<code className="nc">.interactions</code> <code className="p">&#123;</code>
  <code className="nb">text-align</code><code className="o">:</code> <code className="nb">center</code><code className="p">;</code>
<code className="p">&#125;</code>

<code className="nc">.table</code> <code className="p">&#123;</code>
  <code className="nb">margin</code><code className="o">:</code> <code className="m">20px</code> <code className="m">0</code><code className="p">;</code>
<code className="p">&#125;</code>

<code className="nc">.table-header</code> <code className="p">&#123;</code>
  <code className="nb">display</code><code className="o">:</code> <code className="n">flex</code><code className="p">;</code>
  <code className="nb">line-height</code><code className="o">:</code> <code className="m">24px</code><code className="p">;</code>
  <code className="nb">font-size</code><code className="o">:</code> <code className="m">16px</code><code className="p">;</code>
  <code className="nb">padding</code><code className="o">:</code> <code className="m">0</code> <code className="m">10px</code><code className="p">;</code>
  <code className="nb">justify</code><code className="o">-</code><code className="nb">content</code><code className="o">:</code> <code className="n">space</code><code className="o">-</code><code className="n">between</code><code className="p">;</code>
<code className="p">&#125;</code>

<code className="nc">.table-empty</code> <code className="p">&#123;</code>
  <code className="nb">margin</code><code className="o">:</code> <code className="m">200px</code><code className="p">;</code>
  <code className="nb">text-align</code><code className="o">:</code> <code className="nb">center</code><code className="p">;</code>
  <code className="nb">font-size</code><code className="o">:</code> <code className="m">16px</code><code className="p">;</code>
<code className="p">&#125;</code>

<code className="nc">.table-row</code> <code className="p">&#123;</code>
  <code className="nb">display</code><code className="o">:</code> <code className="n">flex</code><code className="p">;</code>
  <code className="nb">line-height</code><code className="o">:</code> <code className="m">24px</code><code className="p">;</code>
  <code className="nb">white-space</code><code className="o">:</code> <code className="nb">nowrap</code><code className="p">;</code>
  <code className="nb">margin</code><code className="o">:</code> <code className="m">10px</code> <code className="m">0</code><code className="p">;</code>
  <code className="nb">padding</code><code className="o">:</code> <code className="m">10px</code><code className="p">;</code>
  <code className="nb">background</code><code className="o">:</code> <code className="m">#ffffff</code><code className="p">;</code>
  <code className="nb">border</code><code className="o">:</code> <code className="m">1px</code> <code className="nb">solid</code> <code className="m">#e3e3e3</code><code className="p">;</code>
<code className="p">&#125;</code>

<code className="nc">.table-header</code> <code className="o">&gt;</code> <code className="nt">span</code> <code className="p">&#123;</code>
  <code className="nb">overflow</code><code className="o">:</code> <code className="nb">hidden</code><code className="p">;</code>
  <code className="nb">text</code><code className="o">-</code><code className="nb">overflow</code><code className="o">:</code> <code className="n">ellipsis</code><code className="p">;</code>
  <code className="nb">padding</code><code className="o">:</code> <code className="m">0</code> <code className="m">5px</code><code className="p">;</code>
<code className="p">&#125;</code>

<code className="nc">.table-row</code> <code className="o">&gt;</code> <code className="nt">span</code> <code className="p">&#123;</code>
  <code className="nb">overflow</code><code className="o">:</code> <code className="nb">hidden</code><code className="p">;</code>
  <code className="nb">text</code><code className="o">-</code><code className="nb">overflow</code><code className="o">:</code> <code className="n">ellipsis</code><code className="p">;</code>
  <code className="nb">padding</code><code className="o">:</code> <code className="m">0</code> <code className="m">5px</code><code className="p">;</code>
<code className="p">&#125;</code>

<code className="nc">.button-inline</code> <code className="p">&#123;</code>
  <code className="nb">border-width</code><code className="o">:</code> <code className="m">0</code><code className="p">;</code>
  <code className="nb">background</code><code className="o">:</code> <code className="nb">transparent</code><code className="p">;</code>
  <code className="nb">color</code><code className="o">:</code> <code className="nb">inherit</code><code className="p">;</code>
  <code className="nb">text-align</code><code className="o">:</code> <code className="nb">inherit</code><code className="p">;</code>
  <code className="o">-</code><code className="n">webkit</code><code className="o">-</code><code className="nb">font</code><code className="o">-</code><code className="n">smoothing</code><code className="o">:</code> <code className="nb">inherit</code><code className="p">;</code>
  <code className="nb">padding</code><code className="o">:</code> <code className="m">0</code><code className="p">;</code>
  <code className="nb">font-size</code><code className="o">:</code> <code className="nb">inherit</code><code className="p">;</code>
  <code className="nb">cursor</code><code className="o">:</code> <code className="nb">pointer</code><code className="p">;</code>
<code className="p">&#125;</code>

<code className="nc">.button-active</code> <code className="p">&#123;</code>
  <code className="nb">border</code><code className="o">-</code><code className="n">radius</code><code className="o">:</code> <code className="m">0</code><code className="p">;</code>
  <code className="nb">border-bottom</code><code className="o">:</code> <code className="m">1px</code> <code className="nb">solid</code> <code className="m">#38BB6C</code><code className="p">;</code>
<code className="p">&#125;</code>
</pre></div>

</figure>

<p className="it">Ahora podes utilizar el estilo de algunos de tus componentes. No se olvide de utilizar React <code>className</code> en lugar de <code>class</code> como atributo HTML.</p>

<p className="p">Now you can use the style in some of your components. Don’t forget to use React <code>className</code> instead of <code>class</code> as HTML attribute.</p>

<p className="it">En primer lugar, aplicarlo en su componente de clase App ES6.</p>

<p className="p">First, apply it in your App ES6 class component.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>class App extends Component &#123;

  ...

  render() &#123;
    const &#123; searchTerm, list &#125; = this.state;
    return (
<code className="uil">      &lt;div className="page"&gt;
</code><code className="uil">        &lt;div className="interactions"&gt;
</code>          &lt;Search
            value=&#123;searchTerm&#125;
            onChange=&#123;this.onSearchChange&#125;
          &gt;
            Search
          &lt;/Search&gt;
<code className="uil">        &lt;/div&gt;
</code>        &lt;Table
          list=&#123;list&#125;
          pattern=&#123;searchTerm&#125;
          onDismiss=&#123;this.onDismiss&#125;
        /&gt;
<code className="uil">      &lt;/div&gt;
</code>    );
  &#125;
&#125;
</pre></div>

</figure>

<p className="it">En segundo lugar, que se aplican en su tabla de componentes sin estado funcional.</p>

<p className="p">Second, apply it in your Table functional stateless component.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>const Table = (&#123; list, pattern, onDismiss &#125;) =&gt;
<code className="uil">  &lt;div className="table"&gt;
</code>    &#123; list.filter(isSearched(pattern)).map(item =&gt;
<code className="uil">      &lt;div key=&#123;item.objectID&#125; className="table-row"&gt;
</code>        &lt;span&gt;
          &lt;a href=&#123;item.url&#125;&gt;&#123;item.title&#125;&lt;/a&gt;
        &lt;/span&gt;
        &lt;span&gt;&#123;item.author&#125;&lt;/span&gt;
        &lt;span&gt;&#123;item.num_comments&#125;&lt;/span&gt;
        &lt;span&gt;&#123;item.points&#125;&lt;/span&gt;
        &lt;span&gt;
          &lt;Button
            onClick=&#123;() =&gt; onDismiss(item.objectID)&#125;
<code className="uil">            className="button-inline"
</code>          &gt;
            Dismiss
          &lt;/Button&gt;
        &lt;/span&gt;
<code className="uil">      &lt;/div&gt;
</code>    )&#125;
<code className="uil">  &lt;/div&gt;
</code></pre></div>

</figure>

<p className="it">Ahora que ha labrado tu aplicación y componentes con CSS básico. Debe tener un aspecto decente. Como ya saben, JSX se mezcla HTML y JavaScript. Se podría argumentar que añadir CSS en la mezcla también. Eso se llama estilo en línea. Se pueden  definir objetos JavaScript y pasarlos al atributo de estilo de un elemento.</p>

<p className="p">Now you have styled your application and components with basic CSS. It should look decent. As you know, JSX mixes up HTML and JavaScript. One could argue to add CSS in the mix as well. That’s called inline style. You can define JavaScript objects and pass them to the style attribute of an element.</p>

<p className="it">Vamos a mantener el ancho de columna Tabla flexibles mediante el uso de estilo en línea.</p>

<p className="p">Let’s keep the Table column width flexible by using inline style.</p>

<figure className="code">
  <figcaption>src/App.js</figcaption>

<div className="highlight"><pre>const Table = (&#123; list, pattern, onDismiss &#125;) =&gt;
  &lt;div className="table"&gt;
    &#123; list.filter(isSearched(pattern)).map(item =&gt;
      &lt;div key=&#123;item.objectID&#125; className="table-row"&gt;
<code className="uil">        &lt;span style=&#123;&#123; width: '40%' &#125;&#125;&gt;
</code><code className="uil">          &lt;a href=&#123;item.url&#125;&gt;&#123;item.title&#125;&lt;/a&gt;
</code><code className="uil">        &lt;/span&gt;
</code><code className="uil">        &lt;span style=&#123;&#123; width: '30%' &#125;&#125;&gt;
</code><code className="uil">          &#123;item.author&#125;
</code><code className="uil">        &lt;/span&gt;
</code><code className="uil">        &lt;span style=&#123;&#123; width: '10%' &#125;&#125;&gt;
</code><code className="uil">          &#123;item.num_comments&#125;
</code><code className="uil">        &lt;/span&gt;
</code><code className="uil">        &lt;span style=&#123;&#123; width: '10%' &#125;&#125;&gt;
</code><code className="uil">          &#123;item.points&#125;
</code><code className="uil">        &lt;/span&gt;
</code><code className="uil">        &lt;span style=&#123;&#123; width: '10%' &#125;&#125;&gt;
</code><code className="uil">          &lt;Button
</code><code className="uil">            onClick=&#123;() =&gt; onDismiss(item.objectID)&#125;
</code><code className="uil">            className="button-inline"
</code><code className="uil">          &gt;
</code><code className="uil">            Dismiss
</code><code className="uil">          &lt;/Button&gt;
</code><code className="uil">        &lt;/span&gt;
</code>      &lt;/div&gt;
    )&#125;
  &lt;/div&gt;
</pre></div>

</figure>

<p className="it">Realmente se colocarán en línea ahora. Se podría definir los objetos de estilo fuera de tus elementos para hacerlo más limpio.</p>

<p className="p">It is really inlined now. You could define the style objects outside of your elements to make it cleaner.</p>

<figure className="code">
  <figcaption>Code Playground</figcaption>

<div className="highlight"><pre><code></code><code className="kr">const</code> <code className="nx">largeColumn</code> <code className="o">=</code> <code className="p">&#123;</code>
  <code className="nx">width</code><code className="o">:</code> <code className="s1">'40%'</code><code className="p">,</code>
<code className="p">&#125;;</code>

<code className="kr">const</code> <code className="nx">midColumn</code> <code className="o">=</code> <code className="p">&#123;</code>
  <code className="nx">width</code><code className="o">:</code> <code className="s1">'30%'</code><code className="p">,</code>
<code className="p">&#125;;</code>

<code className="kr">const</code> <code className="nx">smallColumn</code> <code className="o">=</code> <code className="p">&#123;</code>
  <code className="nx">width</code><code className="o">:</code> <code className="s1">'10%'</code><code className="p">,</code>
<code className="p">&#125;;</code>
</pre></div>

</figure>

<p className="it">Después de que podes utilizar en tus columnas: <code>&lt;span style=&#123;smallColumn&#125;&gt;</code>.</p>

<p className="p">After that you could use it in your columns: <code>&lt;span style=&#123;smallColumn&#125;&gt;</code>.</p>

<p className="it">En general, usted encontrarás las diferentes opiniones y soluciones para el estilo en React. Que utilizó CSS ​​puro y estilo en línea ahora. Es suficiente para empezar.</p>

<p className="p">In general, you will find different opinions and solutions for style in React. You used pure CSS and inline style now. It is sufficient to get started.</p>

<p className="it">No quiero ser dogmático aquí, pero quiero dejar algunas opciones más. Podes leer acerca de ellos y aplicarlos en su propio. Pero si usted es nuevo React , lo recomendaría a pegarse a CSS puro y estilo en línea por ahora.</p>

<p className="p">I don’t want to be opinionated here, but I want to leave you some more options. You can read about them and apply them on your own. But if you are new to React, I would recommend to stick to pure CSS and inline style for now.</p>

<ul>
  <li className="p"><a href="https://github.com/FormidableLabs/radium">radium</a></li>
  <li className="p"><a href="https://github.com/khan/aphrodite">aphrodite</a></li>
  <li className="p"><a href="https://github.com/styled-components/styled-components">styled-components</a></li>
  <li className="p"><a href="https://github.com/css-modules/css-modules">CSS Modules</a></li>
</ul>

<div className="page-break"></div>
<p className="it">Has aprendido los conceptos básicos para escribir su propia aplicación React! Recapitulemos los últimos capítulos:</p>

<p className="p">You have learned the basics to write your own React application! Let’s recap the last chapters:</p>

<ul>
  <li className="p">React
    <ul>
      <li className="it">utilizar this.state y setstate para gestionar su estado componente interno</li>

      <li className="p">use this.state and setState to manage your internal component state</li>
      <li className="it">utilizar formas y eventos en React añadir interacciones</li>

      <li className="p">use forms and events in React to add interactions</li>
      <li className="it">flujo de datos unidireccional es un concepto importante en React</li>

      <li className="p">unidirectional data flow is an important concept in React</li>
      <li className="it">componer los componentes con los niños y los componentes reutilizables</li>

      <li className="p">compose components with children and reusable components</li>
      <li className="it">el uso y la implementación de los componentes de clase ES6 y componentes funcionales sin estado</li>

      <li className="p">usage and implementation of ES6 class components and functional stateless components</li>
      <li className="it">se acerca al estilo de tus componentes</li>

      <li className="p">approaches to style your components</li>
    </ul>
  </li>
  <li className="p">ES6
    <ul>
      <li className="it">flecha funciones con cuerpos de bloque y concisas para acortar tus declaraciones de funciones</li>

      <li className="p">arrow functions with block and concise bodies to shorten your function declarations</li>
      <li className="it">funciones que están enlazados a una clase son métodos de clase</li>

      <li className="p">functions that are bound to a class are class methods</li>
      <li className="it">desestructuración de los objetos y arrays</li>

      <li className="p">destructuring of objects and arrays</li>
      <li className="it">parámetros por defecto</li>

      <li className="p">default parameters</li>
    </ul>
  </li>
  <li className="p">General
    <ul>
      <li className="p">higher order functions</li>
    </ul>
  </li>
</ul>

<p className="it">Una vez más, tiene sentido tomar un descanso. Internalizar los aprendizajes y aplicarlos. Podes experimentar con el código fuente que has escrito hasta ahora. Además, podes leer más en el oficial de <a href="https://facebook.github.io/react/docs/installation.html">la documentación</a>.</p>

<p className="p">Again it makes sense to take a break. Internalize the learnings and apply them on your own. You can experiment with the source code you have written so far. Additionally you can read more in the official <a href="https://facebook.github.io/react/docs/installation.html">documentation</a>.</p>

<p className="it">podes encontrar el código fuente en el <a href="https://github.com/rwieruch/hackernews-client/tree/2705dcd1a2027c4a6ecb8132428b399785afdfa5">repositorio oficial</a>.</p>

<p className="p">You can find the source code in the <a href="https://github.com/rwieruch/hackernews-client/tree/2705dcd1a2027c4a6ecb8132428b399785afdfa5">official repository</a>.</p>



</div>

<div>
<h2 id="leanpub-auto-getting-real-with-an-api">Getting Real with an API</h2>

<p className="it">Ahora es el momento de ser realistas con una API, ya que podes resultar aburrido para hacer frente a los datos artificiales. ¿Sabe usted <a href="https://news.ycombinator.com/">Hacker News</a> ? Es un gran agregador de noticias. Que vas a utilizar la API de Hacker News en busca de historias de tendencias de la plataforma. Hay una <a href="https://github.com/HackerNews/API">básica</a> y la <a href="https://hn.algolia.com/api">búsqueda</a> de la API para obtener datos de la plataforma. Este último tiene sentido en su caso a historias en Hacker News buscar. Podes visitar la especificación API para obtener una visión de la estructura de datos.</p>

<p className="p">Now it’s time to get real with an API, because it can get boring to deal with artificial data. Do you know <a href="https://news.ycombinator.com/">Hacker News</a>? It’s a great news aggregator. You will use the Hacker News API to fetch trending stories from the platform. There is a <a href="https://github.com/HackerNews/API">basic</a> and <a href="https://hn.algolia.com/api">search</a> API to get data from the platform. The latter one makes sense in your case to search stories on Hacker News. You can visit the API specification to get a glimpse of the data structure.</p>


</div>

 </div>


  </Layout>
)
