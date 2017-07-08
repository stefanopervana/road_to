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

     
<h1>JavaScript <span class="color_h1">Object Properties</span></h1>

<p className="p">Properties are the most important part of any JavaScript object.</p>

<h2>JavaScript Properties</h2>
<p className="it">Las propiedades son los valores asociados a un objeto JavaScript.</p>

<p className="p">Properties are the values associated with a JavaScript object.</p>
<p className="it">Un objeto JavaScript es una colección de propiedades no ordenadas.</p>

<p className="p">A JavaScript object is a collection of unordered properties.</p>
<p className="it">Normalmente, las propiedades se pueden cambiar, agregar y eliminar, pero algunas son de sólo lectura.</p>

<p className="p">Properties can usually be changed, added, and deleted, but some are read only.</p>

<h2>Accessing JavaScript Properties</h2>
<p className="it">La sintaxis para acceder a la propiedad de un objeto es:</p>

<p className="p">The syntax for accessing the property of an object is:</p>

<div className="image"><a></a><img src="/static/js015.jpg" width="100%" alt="Image"/></div><br></br>
<div class="w3-panel w3-note">
<p className="it">La expresión debe evaluarse con un nombre de propiedad.</p>

<p className="p">The expression must evaluate to a property name.</p>
</div>

<div className="image"><a></a><img src="/static/js016.jpg" width="100%" alt="Image"/></div><br></br>

  <div className="image"><a></a><img src="/static/js017.jpg" width="100%" alt="Image"/></div><br></br>
<div className="image"><a></a><img src="/static/js018.jpg" width="100%" alt="Image"/></div><br></br>

<p className="it">El bloque de código dentro del bucle for ... in se ejecutará una vez para cada propiedad.</p>

<p className="p">The block of code inside of the for...in loop will be executed once for each property.</p>

<p className="it">Bucle a través de las propiedades de un objeto:</p>

<p className="p">Looping through the properties of an object:</p>

<div className="image"><a></a><img src="/static/js019.jpg" width="100%" alt="Image"/></div>

<h2>Adding New Properties</h2>

<p className="it">Puede agregar nuevas propiedades a un objeto existente simplemente dándole un valor. </p>

<p className="p">You can add new properties to an existing object by simply giving it a value. </p>
<p className="it">Supongamos que el objeto de la persona ya existe - puede entonces darle nuevas propiedades:</p>

<p className="p">Assume that the person object already exists -
you can then give it new properties:</p>
<div class="w3-example">
<h3>Example</h3>
<div className="image"><a></a><img src="/static/js020.jpg" width="100%" alt="Image"/></div>

<div class="w3-panel w3-note">
<p className="it">No puede utilizar palabras reservadas para nombres de propiedad (o método). Se aplican las reglas de nomenclatura de JavaScript.</p>

<p className="p">You cannot use reserved words for property (or method) names. JavaScript naming rules apply.</p>
</div>

<h2>Deleting Properties</h2>
<p className="it">La palabra clave <strong>delete</strong> borra una propiedad de un objeto:</p>

<p className="p">The <strong>delete</strong> keyword deletes a property from an object:</p>
<div className="image"><a></a><img src="/static/js021.jpg" width="100%" alt="Image"/></div>

<p className="it">La palabra clave delete elimina tanto el valor de la propiedad como la propiedad misma.</p>

<p className="p">The delete keyword deletes both the value of the property and the property itself.</p>
<p className="it">Después de la eliminación, la propiedad no se puede utilizar antes de que se agregue de nuevo.</p>

<p className="p">After deletion, the property cannot be used before it is added back again.</p>
<p className="it">The delete operator is designed to be used on object properties. It has no effect on variables or functions. </p>

<p className="p">The 
delete operator is designed to be used on object properties. It has no effect on 
variables or functions. 
</p>
<p className="it">The delete operator should not be used on predefined JavaScript object properties. It can crash your application.</p>

<p className="p">The delete operator should not be used on predefined JavaScript object 
properties. It can crash your application.</p>
<h2>Property Attributes</h2>
<p className="it">All properties have a name. In addition they also have a value.</p>

<p className="p">All properties have a name. In addition they also have a value.</p>
<p className="it">The value is one of the property's attributes.</p>

<p className="p">The value is one of the property's attributes.</p>
<p className="it">Other attributes are: enumerable, configurable, and writable.</p>

<p className="p">Other attributes are: enumerable, configurable, and writable.</p>
<p className="it">These attributes define how the property can be accessed (is it readable?, is it writable?)</p>

<p className="p">These attributes define how the property can be accessed (is it readable?, is 
it writable?)</p>
<p className="it">In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).</p>

<p className="p">In JavaScript, all attributes can be read, but only the value attribute can 
be changed (and only if the property is writable).</p>
<p className="it">( ECMAScript 5 has methods for both getting and setting all property attributes)</p>

<p className="p">( ECMAScript 5 has methods for both getting and setting all property 
attributes)</p>

<h2>Prototype Properties</h2>
<p className="it">JavaScript objects inherit the properties of their prototype. </p>

<p className="p">JavaScript objects inherit the properties of their prototype. </p>

<p className="it">La palabra clave delete no elimina las propiedades heredadas, pero si elimina una propiedad prototipo, afectará a todos los objetos heredados del prototipo.</p>

<p className="p">The delete keyword does not delete inherited properties, but if you delete a 
prototype property, it will affect all objects 
inherited from the prototype.</p>

</div>
</div>

  </Layout>
)


