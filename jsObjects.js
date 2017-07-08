import Layout from '../components/layout'
import Link from 'next/link'

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
<div class="w3-col l10 m12" id="main">
  <p>Atenti</p>

<h1>JavaScript <span class="color_h1">Objects</span></h1>
<div class="w3-clear nextprev">
<a class="w3-left w3-btn" href="js_validation_api.asp">❮ Previous</a>
<a class="w3-right w3-btn" href="js_properties.asp">Next ❯</a>
</div>

<div class="w3-panel w3-note">
<p className="it">En JavaScript, los objetos son el rey. Si entendes los objetos, entendes JavaScript.</p>

<p className="p">In JavaScript, objects are king. If you understand objects, you understand JavaScript.</p>
</div>


<p className="it">En JavaScript, casi "todo" es un objeto.</p>

<p className="p">In JavaScript, almost "everything" is an object.</p>

<ul>
  <li className="it">Los booleanos pueden ser objetos (si se definen con la <strong>nueva</strong> palabra clave)</li>

  <li className="p">Booleans can be objects (if defined with the <strong>new</strong> keyword)</li>
  <li className="it">Los números pueden ser objetos (si se definen con la <strong>nueva</strong> palabra clave)</li>

  <li className="p">Numbers can be objects (if defined with the <strong>new</strong> keyword)</li>
  <li className="it">Las cadenas pueden ser objetos (si se definen con la <strong>nueva</strong> palabra clave)</li>

  <li className="p">Strings can be objects (if defined with the <strong>new</strong> keyword)</li>
  <li className="it">Las fechas son siempre objetos</li>

  <li className="p">Dates are always objects</li>
  <li className="it">Las matemáticas son siempre objetos</li>

  <li className="p">Maths are always objects</li>
    <li className="it">Las expresiones regulares son siempre objetos</li>

    <li className="p">Regular expressions are always objects</li>
  <li className="it">Las arrays son siempre objetos</li>

  <li className="p">Arrays are always objects</li>
  <li className="it">Las funciones son siempre objetos</li>

  <li className="p">Functions are always objects</li>
    <li className="it">Los objetos son siempre objetos</li>

    <li className="p">Objects are always objects</li>
</ul>
<p className="it">Todos los valores JavaScript, excepto las primitivas, son objetos.</p>

<p className="p">All JavaScript values, except primitives, are objects.</p>



<h2>JavaScript Primitives</h2>
<p className="it">Un <strong>valor primitivo</strong> es un valor que no tiene propiedades o métodos.</p>

<p className="p">A <strong>primitive value</strong> is a value that has no properties or methods.</p>
<p className="it">Un <strong>tipo de datos primitivo</strong> es un dato que tiene un valor primitivo.</p>

<p className="p">A <strong>primitive data type</strong> is data that has a primitive value.</p>
<p className="it">JavaScript define 5 tipos de tipos de datos primitivos:</p>

<p className="p">JavaScript defines 5 types of primitive data types:</p>
<ul>
<li className="p">string</li>
<li className="p">number</li>
<li className="p">boolean</li>
<li className="p">null</li>
<li className="p">undefined</li>
</ul>

<p className="it">Los valores primitivos son inmutables (están codificados y por lo tanto no se pueden cambiar).</p>

<p className="p">Primitive values are immutable (they are hardcoded and therefore cannot be changed).</p>

<div class="w3-panel w3-note">
<p className="it">Si x = 3.14, podes cambiar el valor de x. Pero no podes cambiar el valor de 3.14.</p>

<p className="p">if x = 3.14, you can change the value of x. But you cannot change the value of 3.14.</p>
</div>
<div className="image"><a></a><img src="/static/js001ing.jpg" width="100%" alt="Image"/></div><br></br>
<div className="image"><a></a><img src="/static/js001.jpg" width="100%" alt="Image"/></div>



<h2>Objects are Variables Containing Variables</h2>
<p className="it">Las variables JavaScript pueden contener valores individuales:</p>

<p className="p">JavaScript variables can contain single values:</p>

<div className="image"><a></a><img src="/static/js002.jpg" width="100%" alt="Image"/></div>
<p className="it">Los objetos son variables también. Pero los objetos pueden contener muchos valores.</p>

<p className="p">Objects are variables too. But objects can contain many 
values. </p>
<p className="it">Los valores se escriben como pares <strong>nombre: valor</strong> (nombre y valor separados por dos puntos).</p>

<p className="p">The values are written as <strong>name : value</strong> pairs (name and value separated by a 
colon).</p>

<div className="image"><a></a><img src="/static/js003.jpg" width="100%" alt="Image"/></div>

<div class="w3-panel w3-note">
<p className="it">Un objeto JavaScript es una colección de <strong>valores con nombre</strong></p>

<p className="p">A JavaScript object is a collection of <strong>named values</strong></p>
</div>


<h2>Object Properties</h2>

<p className="it">Los valores nombrados, en los objetos JavaScript, se llaman <strong>propiedades</strong> .</p>

<p className="p">The named values, in JavaScript objects, are called <strong>properties</strong>.</p>
<div className="image"><a></a><img src="/static/js004.jpg" width="100%" alt="Image"/></div>

<p className="it">Los objetos escritos como pares de valor nominal son similares a:</p>

<p className="p">Objects written as name value pairs are similar to:</p>
<ul>
 <li className="it">Arrays asociativos en PHP</li>

 <li className="p">Associative arrays in PHP</li>
 <li className="it">Diccionarios en Python</li>

 <li className="p">Dictionaries in Python</li>
 <li className="it">Tablas de hash en C</li>

 <li className="p">Hash tables in C</li>
 <li className="it">Mapas de hash en Java</li>

 <li className="p">Hash maps in Java</li>
 <li className="it">Hashes en Ruby y Perl</li>

 <li className="p">Hashes in Ruby and Perl</li>
</ul>


<h2>Object Methods</h2>
<p className="it">Los métodos son <strong>acciones</strong> que se pueden realizar en objetos.</p>

<p className="p">Methods are <strong>actions</strong> that can be performed on objects.</p>

<p className="it">Las propiedades del objeto pueden ser valores primitivos, otros objetos y funciones.</p>

<p className="p">Object properties can be both primitive values, other objects, and functions.</p>

<p className="it">Un <strong>método de objeto</strong> es una propiedad de objeto que contiene una <strong>definición de función</strong> .</p>

<p className="p">An <strong>object method</strong> is an object property containing a <strong>function 
definition</strong>.</p>

<div className="image"><a></a><img src="/static/js005.jpg" width="100%" alt="Image"/></div>

<div class="w3-panel w3-note">
<p className="it">Los objetos JavaScript son contenedores para valores denominados, llamados propiedades y métodos.</p>

<p className="p">JavaScript objects are containers for named values, called properties and methods.</p>
</div>

<p className="it">Aprenderás más sobre los métodos en los próximos capítulos.</p>

<p className="p">You will learn more about methods in the next chapters.</p>


<h2>Creating a JavaScript Object</h2>
<p className="it">Con JavaScript, podes definir y crear tus propios objetos.</p>

<p className="p">With JavaScript, you can define and create your own objects.</p>
<p className="it">Hay diferentes maneras de crear nuevos objetos:</p>

<p className="p">There are different ways to create new objects:</p>
<ul>
  <li className="it">Definí y creá un solo objeto, utilizando un objeto literal.</li>

  <li className="p">Define and create a single object, using an object literal.</li>
  <li className="it">Definí y creá un solo objeto, con la palabra clave new.</li>

  <li className="p">Define and create a single object, with the keyword new.</li>
  <li className="it">Definí un constructor de objetos y, a continuación, creá objetos del tipo construido.</li>

  <li className="p">Define an object constructor, and then create objects of the constructed type.</li>
</ul>

<div class="w3-panel w3-note">
<p className="it">En ECMAScript 5, también se puede crear un objeto con la función Object.create ().</p>

<p className="p">In ECMAScript 5, an object can also be created with the function Object.create().</p>
</div>


<h2>Using an Object Literal</h2>
<p className="it">Esta es la forma más fácil de crear un objeto JavaScript.</p>

<p className="p">This is the easiest way to create a JavaScript Object.</p>
<p className="it">Utilizando un object literal, ambos definen y crean un objeto en una sentencia.</p>

<p className="p">Using an object literal, you both define and create an object in one 
statement.</p>
<p className="it">Un objet literal es una lista de pares nombre: valor (como edad: 50) dentro de llaves &#123;&#125;.</p>

<p className="p">An object literal is a list of name:value pairs (like age:50) inside curly braces &#123;&#125;.</p>
<p className="it">El siguiente ejemplo crea un nuevo objeto JavaScript con cuatro propiedades:</p>

<p className="p">The following example creates a new JavaScript object with four properties:</p>
<div className="image"><a></a><img src="/static/js006.jpg" width="100%" alt="Image"/></div>
<p className="it">Los espacios y los saltos de línea no son importantes. Una definición de objeto puede abarcar varias líneas:</p>

<p className="p">Spaces and line breaks are not important. An object definition can span multiple lines:</p>
<div className="image"><a></a><img src="/static/js007.jpg" width="100%" alt="Image"/></div>


<h2>Using the JavaScript Keyword new</h2>
<p className="it">El ejemplo siguiente también crea un nuevo objeto JavaScript con cuatro propiedades:</p>

<p className="p">The following example also creates a new JavaScript object with four properties:</p>
<div className="image"><a></a><img src="/static/js008.jpg" width="100%" alt="Image"/></div>

<div class="w3-panel w3-note">
<p className="it">Los dos ejemplos anteriores hacen exactamente lo mismo. No es necesario utilizar new Object(). <br></br> Por simplicidad, legibilidad y velocidad de ejecución, utilizá el primero (el método del objeto literal).</p>

<p className="p">The two examples above do exactly the same. There is no need to use new Object().<br></br>
For simplicity, readability and execution speed, use the first one (the object literal method).</p>
</div>


<h2>Using an Object Constructor</h2>
<p className="it">Los ejemplos anteriores están limitados en muchas situaciones. Sólo crean un solo objeto.</p>

<p className="p">The examples above are limited in many situations. They only create a single 
object.</p>
<p className="it">A veces nos gusta tener un "tipo de objeto" que se puede utilizar para crear muchos objetos de un tipo.</p>

<p className="p">Sometimes we like to have an "object type" that can be used to create many 
objects of one type.</p>
<p className="it">La forma estándar de crear un "tipo de objeto" es usar una función de constructor de objetos:</p>

<p className="p">The standard way to create an "object type" is to use an object constructor 
function:</p>
<div className="image"><a></a><img src="/static/js009.jpg" width="100%" alt="Image"/></div>
<p className="it">La función anterior (person) es un constructor de objetos.</p>

<p className="p">The above function (person) is an object constructor.</p>
<p className="it">Una vez que tengas un constructor de objetos, podes crear nuevos objetos del mismo tipo:</p>

<p className="p">Once you have an object constructor, you can create new objects of the same 
type:</p>

<div className="image"><a></a><img src="/static/js010.jpg" width="100%" alt="Image"/></div>


<h2>The <em><strong>this</strong></em> Keyword</h2>

<p className="it">En JavaScript, lo que se llama <strong>this</strong>, es el objeto que "posee" el código JavaScript.</p>

<p className="p">In JavaScript, the thing called <strong>this</strong>, is the object that 
"owns" the JavaScript code.</p>

<p className="it">El valor de <strong>this</strong>, cuando se utiliza en una función, es el objeto que "posee" la función.</p>

<p className="p">The value of <strong>this</strong>, when used in a function, is the object that "owns" the function.</p>

<p className="it">El valor de <strong>this</strong>, cuando se utiliza en un objeto, es el propio objeto.</p>

<p className="p">The value of <strong>this</strong>, when used in an object, is the object 
itself.</p>
<p className="it">La palabra clave <strong>this</strong> en un constructor de objetos no tiene un valor. Es sólo un sustituto del nuevo objeto.</p>

<p className="p">The <strong>this</strong> keyword in an object constructor does not have a 
value. It is only a substitute for the new object.</p>
<p className="it">El valor de <strong>this</strong> se convertirá en el nuevo objeto cuando el constructor se utiliza para crear un objeto.</p>

<p className="p">The value of <strong>this</strong> will become the new object when the 
constructor is used to create an object.</p>

<div class="w3-panel w3-note">
<p className="it">Tené en cuenta que <strong>this</strong> no es una variable. Es una palabra clave. No podes cambiar el valor de <strong>this</strong> .</p>

<p className="p">Note that <strong>this</strong> is not a variable.
It is a keyword. You cannot change the value of <strong>this</strong>.</p>
</div>


<h2>Built-in JavaScript Constructors</h2>
<p className="it">JavaScript tiene constructores integrados (built-in) para objetos nativos:</p>

<p className="p">JavaScript has built-in constructors for native objects:</p>
<div className="image"><a></a><img src="/static/js011.jpg" width="100%" alt="Image"/></div>

<p className="it">El objeto Math() no está en la lista. Math es un objeto global. La nueva palabra clave no se puede utilizar en Math.</p>

<p className="p">The Math() object is not in the list. Math is a global object. The new keyword cannot be used on 
Math.</p>


<h2>Did You Know?</h2>
<p className="it">Como podes ver, JavaScript tiene versiones de objetos de los tipos primitivos de datos String, Number y Boolean.</p>

<p className="p">As you can see, JavaScript has object versions of the primitive 
data types String, Number, and Boolean.</p>
<p className="it">No hay razón para crear objetos complejos. Los valores primitivos se ejecutan mucho más rápido.</p>

<p className="p">There is no reason to create complex objects. Primitive values execute much faster.</p>

<p className="it">Y no hay razón para usar new Array(). Utilizá array literals en su lugar: []</p>

<p className="p">And there is no reason to use new Array(). Use array literals instead: []</p>
<p className="it">Y no hay ninguna razón para usar new RegExp(). Utilizá pattern literals en su lugar: / () /</p>

<p className="p">And there is no reason to use new RegExp(). Use pattern literals instead: /()/</p>
<p className="it">Y no hay ninguna razón para usar new Function(). En su lugar, utilizá expresiones de función: function() &#123;&#125;.</p>

<p className="p">And there is no reason to use new Function(). Use function expressions instead: 
function () &#123;&#125;.</p>
<p className="it">Y no hay razón para usar new Object(). Utilizá object literals en su lugar: &#123;&#125;</p>

<p className="p">And there is no reason to use new Object(). Use object literals instead: &#123;&#125;</p>
<div className="image"><a></a><img src="/static/js012.jpg" width="100%" alt="Image"/></div>



<h2>String Objects</h2>
<p className="it">Normalmente, las cadenas se crean como primitivas: <strong>var firstName = "John"</strong></p>

<p className="p">Normally, strings are created as primitives: <strong>var firstName = "John"</strong></p>
<p className="it">Pero las cadenas también se pueden crear como objetos usando la palabra clave <strong>new</strong>: <strong>var firstName = new String ("John")</strong></p>

<p className="p">But strings can also be created as objects using the <strong>new</strong> keyword: <strong>var 
firstName = new 
String("John")</strong></p>
<p className="it">Aprendé por qué las cadenas no se deben crear como objeto en el capítulo <a href="js_strings.asp">JS Strings</a> .</p>

<p className="p">Learn why strings should not be created as object in the chapter
<a href="js_strings.asp">JS Strings</a>. </p>


<h2>Number Objects</h2>
<p className="it">Normalmente, los números se crean como primitivas: <strong>var x = 123</strong></p>

<p className="p">Normally, numbers are created as primitives: <strong>var x = 123</strong></p>
<p className="it">Pero los números también se pueden crear como objetos usando la palabra clave <strong>new</strong>: <strong>var x = new Number (123)</strong></p>

<p className="p">But numbers can also be created as objects using the <strong>new</strong> keyword: <strong>var x = new 
Number(123)</strong></p>
<p className="it">Aprendé por qué los números no deben crearse como objeto en el capítulo <a href="js_numbers.asp">Números JS</a> .</p>

<p className="p">Learn why numbers should not be created as object in the chapter
<a href="js_numbers.asp">JS Numbers</a>. </p>


<h2>Boolean Objects</h2>
<p className="it">Normalmente, los booleanos se crean como primitivas: <strong>var x = false</strong></p>

<p className="p">Normally, booleans are created as primitives: <strong>var x = 
false</strong></p>
<p className="it">Pero los booleanos también se pueden crear como objetos usando lapalabra clave <strong>new</strong> : <strong>var x = new Boolean (false)</strong></p>

<p className="p">But booleans can also be created as objects using the <strong>new</strong> keyword: <strong>var x = new 
Boolean(false)</strong></p>
<p className="it">Aprendé por qué los booleanos no se deben crear como objeto en el capítulo <a href="js_booleans.asp">JS Booleans</a> .</p>

<p className="p">Learn why booleans should not be created as object in the chapter
<a href="js_booleans.asp">JS Booleans</a>. </p>


<h2>JavaScript Objects are Mutable</h2>
<p className="it">Los objetos son mutables: Son dirigidos por referencia, no por valor.</p>

<p className="p">Objects are mutable: They are addressed by reference, not by value.</p>
<p className="it">Si la persona es un objeto, la siguiente declaración no creará una copia de la persona:</p>

<p className="p">If person is an object, the following statement will not create a copy of person:</p>

<div className="image"><a></a><img src="/static/js013.jpg" width="100%" alt="Image"/></div>

<p className="it">El objeto x <strong>no</strong> es <strong>una copia</strong> de person. Él <strong>es</strong> person. Tanto x como person son el mismo objeto.</p>

<p className="p">The object x is <strong>not a copy</strong> of person. It <strong>is</strong> 
person. 
Both x and person are the same object.</p>
<p className="it">Cualquier cambio en x también cambiará a person, porque x y persona son el mismo objeto. </p>

<p className="p">Any changes to x will also change person, because x and person are the same object. </p>
<div className="image"><a></a><img src="/static/js014.jpg" width="100%" alt="Image"/></div>

<div class="w3-panel w3-note">
<p className="it"><strong>Nota: Las</strong> variables JavaScript no son mutables. Sólo los objetos JavaScript.</p>

<p className="p"><strong>Note: </strong>JavaScript variables are not mutable. Only JavaScript objects.</p>
</div>

<div>
    <header>
      <nav>
        <Link href='./jspropObjects'><a>JS propiedad de los Objetos</a></Link> |

      </nav>
    </header>
</div>

</div>
</div>
  </Layout>
)


