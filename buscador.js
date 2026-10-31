/**
 * PROYECTO DE INNOVACIÓN TECNOLÓGICA - U.E.T.H. "HUGO ORDÓÑEZ SARAVIA"
 * ESPECIALIDAD: SISTEMAS INFORMÁTICOS - TÉCNICO MEDIO
 * 
 * ARCHIVO: js/buscador.js
 * FUNCIÓN: Glosario local indexado de sintaxis para el Dashboard 2.0.
 */

// BASE DE DATOS SINTÁCTICA (DICCIONARIO PARA EL DESPLIEGUE FLOTANTE MATE)
const baseDatosSintaxis = {
    "print": `
        <h4 style="color:#1b4f72; margin:0 0 5px 0; font-size:0.95rem;">Función print() [Salida]</h4>
        <p style="margin:0 0 8px 0; font-size:0.85rem; color:#5d6d7e;">Proyecta textos, variables o flujos de datos en la terminal de Spyder de manera instantánea.</p>
        <pre style="background:#1c1e22; padding:10px; margin:0; border-radius:6px; overflow-x:auto;"><code style="font-family:'Consolas',monospace; font-size:0.82rem; color:#abb2bf;"><span style="color:#c678dd; font-weight:bold;">print</span>(<span style="color:#98c379;">"Texto en pantalla"</span>)</code></pre>
    `,
    "variables": `
        <h4 style="color:#1b4f72; margin:0 0 5px 0; font-size:0.95rem;">Asignación de Variables</h4>
        <p style="margin:0 0 8px 0; font-size:0.85rem; color:#5d6d7e;">Guarda información usando un nombre y el signo igual (=). Python detecta el tipo de forma automática.</p>
        <pre style="background:#1c1e22; padding:10px; margin:0; border-radius:6px; overflow-x:auto;"><code style="font-family:'Consolas',monospace; font-size:0.82rem; color:#abb2bf;">colegio = <span style="color:#98c379;">"Hugo Ordoñez"</span><br>computadoras = <span style="color:#d19a66;">20</span></code></pre>
    `,
    "input": `
        <h4 style="color:#1b4f72; margin:0 0 5px 0; font-size:0.95rem;">Función input() [Teclado]</h4>
        <p style="margin:0 0 8px 0; font-size:0.85rem; color:#5d6d7e;">Detiene el programa y espera que el usuario escriba algo. Siempre recibe la información en formato de texto.</p>
        <pre style="background:#1c1e22; padding:10px; margin:0; border-radius:6px; overflow-x:auto;"><code style="font-family:'Consolas',monospace; font-size:0.82rem; color:#abb2bf;">nombre = <span style="color:#c678dd;">input</span>(<span style="color:#98c379;">"Escribe tu nombre: "</span>)</code></pre>
    `,
    "int": `
        <h4 style="color:#1b4f72; margin:0 0 5px 0; font-size:0.95rem;">Tipo de Dato Entero (int)</h4>
        <p style="margin:0 0 8px 0; font-size:0.85rem; color:#5d6d7e;">Sirve para guardar números enteros sin decimales. Se usa con input() para poder hacer cálculos matemáticos.</p>
        <pre style="background:#1c1e22; padding:10px; margin:0; border-radius:6px; overflow-x:auto;"><code style="font-family:'Consolas',monospace; font-size:0.82rem; color:#abb2bf;">edad = <span style="color:#56b6c2; font-weight:bold;">int</span>(<span style="color:#c678dd;">input</span>(<span style="color:#98c379;">"Tu edad: "</span>))</code></pre>
    `,
    "float": `
        <h4 style="color:#1b4f72; margin:0 0 5px 0; font-size:0.95rem;">Tipo de Dato Decimal (float)</h4>
        <p style="margin:0 0 8px 0; font-size:0.85rem; color:#5d6d7e;">Almacena números con punto decimal (.). Clave en sistemas para calcular promedios de notas exactos.</p>
        <pre style="background:#1c1e22; padding:10px; margin:0; border-radius:6px; overflow-x:auto;"><code style="font-family:'Consolas',monospace; font-size:0.82rem; color:#abb2bf;">promedio = <span style="color:#d19a66;">61.5</span></code></pre>
    `,
    "if": `
        <h4 style="color:#1b4f72; margin:0 0 5px 0; font-size:0.95rem;">Condicional if - else</h4>
        <p style="margin:0 0 8px 0; font-size:0.85rem; color:#5d6d7e;">Toma caminos diferentes. Exige colocar dos puntos (:) al final de la pregunta y dejar 4 espacios vacíos abajo.</p>
        <pre style="background:#1c1e22; padding:10px; margin:0; border-radius:6px; overflow-x:auto;"><code style="font-family:'Consolas',monospace; font-size:0.82rem; color:#abb2bf;"><span style="color:#c678dd; font-weight:bold;">if</span> nota >= <span style="color:#d19a66;">51</span>:<br>    <span style="color:#c678dd;">print</span>(<span style="color:#98c379;">"Aprobado"</span>)<br><span style="color:#c678dd; font-weight:bold;">else</span>:<br>    <span style="color:#c678dd;">print</span>(<span style="color:#98c379;">"Reprobado"</span>)</code></pre>
    `,
    "while": `
        <h4 style="color:#1b4f72; margin:0 0 5px 0; font-size:0.95rem;">Bucle Indeterminado while</h4>
        <p style="margin:0 0 8px 0; font-size:0.85rem; color:#5d6d7e;">Repite un bloque de código mientras la condición sea verdadera (True). Requiere un incremento para no colgar la PC.</p>
        <pre style="background:#1c1e22; padding:10px; margin:0; border-radius:6px; overflow-x:auto;"><code style="font-family:'Consolas',monospace; font-size:0.82rem; color:#abb2bf;"><span style="color:#c678dd; font-weight:bold;">while</span> vueltas &lt; <span style="color:#d19a66;">5</span>:<br>    vueltas = vueltas + <span style="color:#d19a66;">1</span></code></pre>
    `,
    "for": `
        <h4 style="color:#1b4f72; margin:0 0 5px 0; font-size:0.95rem;">Bucle Determinado for</h4>
        <p style="margin:0 0 8px 0; font-size:0.85rem; color:#5d6d7e;">Repite instrucciones un número fijo de veces usando rangos creados automáticamente por el comando range().</p>
        <pre style="background:#1c1e22; padding:10px; margin:0; border-radius:6px; overflow-x:auto;"><code style="font-family:'Consolas',monospace; font-size:0.82rem; color:#abb2bf;"><span style="color:#c678dd; font-weight:bold;">for</span> x <span style="color:#569cd6;">in</span> <span style="color:#e5c07b;">range</span>(<span style="color:#d19a66;">3</span>):<br>    <span style="color:#c678dd;">print</span>(x)</code></pre>
    `,
    "sangría": `
        <h4 style="color:#1b4f72; margin:0 0 5px 0; font-size:0.95rem;">Indentación (Sangría)</h4>
        <p style="margin:0 0 8px 0; font-size:0.85rem; color:#5d6d7e;">Margen físico obligatorio de 4 espacios al inicio de las líneas subordinadas para que Python sepa qué órdenes obedecer.</p>
        <p style="margin:0; font-size:0.82rem; color:#c62828;">⚠️ Dejarlo en línea recta provoca el error: <strong>IndentationError</strong>.</p>
    `
};
// CONTROLADORES DE ELEMENTOS DEL DOM PARA EL BUSCADOR DEL MENU LATERAL
const inputBuscadorSide = document.getElementById('searchInput');
const contenedorGlosarioSide = document.getElementById('searchResult');

// ESCUCHADOR ASÍNCRONO PARA FILTRAR EN TIEMPO REAL
if (inputBuscadorSide && contenedorGlosarioSide) {
    inputBuscadorSide.addEventListener('input', function(event) {
        // Convierte el texto a minúsculas y remueve espacios marginales
        const terminoBusqueda = event.target.value.toLowerCase().trim();
        
        // Si el campo de texto está vacío, limpia y oculta el contenedor flotante
        if (terminoBusqueda === '') {
            contenedorGlosarioSide.style.display = 'none';
            contenedorGlosarioSide.innerHTML = '';
            return;
        }
        
        let coincidenciaHallada = false;
        
        // Iteración lineal sobre los índices del diccionario de comandos locales
        for (let comando in baseDatosSintaxis) {
            if (comando.includes(terminoBusqueda) || terminoBusqueda.includes(comando)) {
                // Inyección del fragmento de visualización correspondiente
                contenedorGlosarioSide.innerHTML = baseDatosSintaxis[comando];
                contenedorGlosarioSide.style.display = 'block';
                coincidenciaHallada = true;
                break; // Detiene el ciclo en la primera coincidencia lógica válida
            }
        }
        
        // Manejador sintáctico en caso de ingresar un término no indexado
        if (!coincidenciaHallada) {
            contenedorGlosarioSide.innerHTML = `
                <div style="color: #c0392b; font-weight: bold; font-size: 0.85rem; text-align: left; margin: 0;">
                    ❌ Concepto o instrucción de control no registrada en el manual técnico.
                </div>`;
            contenedorGlosarioSide.style.display = 'block';
        }
    });
}
