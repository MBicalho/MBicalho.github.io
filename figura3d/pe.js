var retangulovertex;
var QuadradoCor;

function retangulo() {
    // Definindo vértices e configurações do buffer - Quadrado 02 Pés
    retangulovertex = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, retangulovertex);

    var vertices = [

        -1.5, -1.0, 1.0,
        1.0, -1.0, 1.0,
        1.0, 1.0, 1.0,
        -1.5, 1.0, 1.0,

        // Trás
        -1.5, -1.0, -1.0,
        -1.5, 1.0, -1.0,
        1.0, 1.0, -1.0,
        1.0, -1.0, -1.0,

        // Topo
        -1.5, 1.0, -1.0,
        -1.5, 1.0, 1.0,
        1.0, 1.0, 1.0,
        1.0, 1.0, -1.0,

        // Base
        -1.5, -1.0, -1.0,
        1.0, -1.0, -1.0,
        1.0, -1.0, 1.0,
        -1.5, -1.0, 1.0,

        // Direita
        1.0, -1.0, -1.0,
        1.0, 1.0, -1.0,
        1.0, 1.0, 1.0,
        1.0, -1.0, 1.0,

        // Esquerda
        -1.5, -1.0, -1.0,
        -1.5, -1.0, 1.0,
        -1.5, 1.0, 1.0,
        -1.5, 1.0, -1.0,

    ];

    gl.bufferData(

        gl.ARRAY_BUFFER,
        new Float32Array(vertices),
        gl.STATIC_DRAW

    );

    retangulovertex.itemSize = 3;
    retangulovertex.numItems = 24;



    QuadradoCor = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, QuadradoCor);

    a1 = Math.random()
    a2 = Math.random()
    a3 = Math.random()

    cores = []
    for (var i = 0; i < 24; i++) {
        cores = cores.concat([a1, a2, a3, 1.0]);
    }

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);

    QuadradoCor.itemSize = 4;
    QuadradoCor.numItems = 24;
}




var deslocamentoDireito = 0;
function desenharPeDireito() {


    var translation = vec3.create();
    vec3.set(translation, 4.5 + deslocamentoDireito, -7, -8.3);

    
    mat4.translate(mMatrix, mMatrix, translation);
    mPushMatrix();


    gl.bindBuffer(gl.ARRAY_BUFFER, retangulovertex);
    gl.vertexAttribPointer(

        shaderProgram.vertexPositionAttribute,
        retangulovertex.itemSize,
        gl.FLOAT, false, 0, 0

    );
    gl.bindBuffer(gl.ARRAY_BUFFER, QuadradoCor);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        QuadradoCor.itemSize,
        gl.FLOAT, false, 0, 0

    );
    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, retangulovertex.numItems);
    mPopMatrix();

}

var deslocamentoEsquerdo = 0;
function desenharPeEsquerdo() {


    var translation = vec3.create();
    vec3.set(translation, -6.7 - deslocamentoEsquerdo, -0.05, -0.32);
    
    mat4.translate(mMatrix, mMatrix, translation);
    mPushMatrix();
    

    gl.bindBuffer(gl.ARRAY_BUFFER, retangulovertex);
    gl.vertexAttribPointer(

        shaderProgram.vertexPositionAttribute,
        retangulovertex.itemSize,
        gl.FLOAT, false, 0, 0

    );
    gl.bindBuffer(gl.ARRAY_BUFFER, QuadradoCor);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        QuadradoCor.itemSize,
        gl.FLOAT, false, 0, 0

    );

    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, retangulovertex.numItems);
    mPopMatrix();

}

ultimoPeEsquerdo = 0;
testePeEsquerdo = false;
function animarPeEsquerdo() {


    var agora = new Date().getTime();
    if (ultimoPeEsquerdo != 0) {

        var diferenca = agora - ultimoPeEsquerdo;
        if (testePeEsquerdo == false) {
            deslocamentoEsquerdo += ((90 * diferenca) / 100000.0);
        }
        if (testePeEsquerdo == true) {
            deslocamentoEsquerdo -= ((90 * diferenca) / 100000.0);
        }

        if (Corpo >= 40) {
            testePeEsquerdo = true;
        }
        if (Corpo <= -10) {
            testePeEsquerdo = false;
        }

    }

    ultimoPeEsquerdo = agora;

}

ultimoPeDireito = 0;
testePeDireito = false;
function animarPeDireito() {


    var agora = new Date().getTime();
    if (ultimoPeDireito != 0) {

        var diferenca = agora - ultimoPeDireito;
        if (testePeDireito == false) {
            deslocamentoDireito += ((90 * diferenca) / 100000.0);
        }
        if (testePeDireito == true) {
            deslocamentoDireito -= ((90 * diferenca) / 100000.0);
        }

        if (Corpo >= 40) {
            testePeDireito = true;
        }
        if (Corpo <= -10) {
            testePeDireito = false;
        }


    }

    ultimoPeDireito = agora;

}