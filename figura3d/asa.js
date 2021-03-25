var triangulo2vertex;
var TrianguloCor;

var Asa = 0;

function triangulo2() {
    // Triangulo invertido: Asa
    triangulo2vertex = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangulo2vertex);

    var vertices = [

        0.0,  -1.0,  0.0,
        -1.0, 1.0,  1.0,
        1.0, 1.0,  1.0,
        // Direita
        0.0,  -1.0,  0.0,
        1.0, 1.0,  1.0,
        1.0, 1.0, -1.0,
        // Trás
        0.0,  -1.0,  0.0,
        1.0, 1.0, -1.0,
        -1.0, 1.0, -1.0,
        // Esquerda
        0.0,  -1.0,  0.0,
        -1.0, 1.0, -1.0,
        -1.0, 1.0,  1.0

    ];

    gl.bufferData(

        gl.ARRAY_BUFFER,
        new Float32Array(vertices),
        gl.STATIC_DRAW

    );

    triangulo2vertex.itemSize = 3;
    triangulo2vertex.numItems = 12;

    TrianguloCor = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, TrianguloCor);

    a1 = Math.random()
    a2 = Math.random()
    a3 = Math.random()

    cores = []
    for (var i = 0; i < 12; i++) {
        //cores = cores.concat([0.9, 0.7, 0.2, 1.0]);
        cores = cores.concat([a1, a2, a3, 1.0]);
    }

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);

    TrianguloCor.itemSize = 4;
    TrianguloCor.numItems = 12;
}

function desenharAsa() {

    // Desenhando a asa do anjo
    var translation = vec3.create();
    vec3.set(translation, 1.3, 0.6, -3);

    mPushMatrix();
    mat4.translate(mMatrix, mMatrix, translation);

    mat4.rotate(mMatrix, mMatrix, degToRad(Asa), [1, 0, 0]);   // Aplica rotação

    gl.bindBuffer(gl.ARRAY_BUFFER, triangulo2vertex);
    gl.vertexAttribPointer(

        shaderProgram.vertexPositionAttribute,
        triangulo2vertex.itemSize,
        gl.FLOAT, false, 0, 0

    );
    gl.bindBuffer(gl.ARRAY_BUFFER, CirculoCor);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        CirculoCor.itemSize,
        gl.FLOAT, false, 0, 0

    );

    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLES, 0, triangulo2vertex.numItems);
    mPopMatrix();
}




var ultimoAsa = 0;
var testeAsa = false;
function animarAsa() {


    var agora = new Date().getTime();
    if (ultimoAsa != 0) {

        var diferenca = agora - ultimoAsa;
        if (testeAsa == false) {
            Asa += ((90 * diferenca) / 1000.0) % 360.0;
        }
        if (testeAsa == true) {
            Asa -= ((90 * diferenca) / 1000.0) % 360.0;
        }

        if(Asa >= 40){
            testeAsa = true;
        }
        if(Asa <= -10){
            testeAsa = false;
        }

    }

    ultimoAsa = agora;
}