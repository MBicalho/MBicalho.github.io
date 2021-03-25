var triangulo3vertex;
var TrianguloCor;
var Olho = 0;

function triangulo3() {
    triangulo3vertex = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangulo3vertex);

    var vertices = [

        0.0, 1.0, 0.0,
        -1.0, -1.0, 1.0,
        1.0, -1.0, 1.0,
        // Direita
        0.0, 1.0, 0.0,
        1.0, -1.0, 1.0,
        1.0, -1.0, -1.0,
        // Trás
        0.0, 1.0, 0.0,
        1.0, -1.0, -1.0,
        -1.0, -1.0, -1.0,
        // Esquerda
        0.0, 1.0, 0.0,
        -1.0, -1.0, -1.0,
        -1.0, -1.0, 1.0

    ];

    gl.bufferData(

        gl.ARRAY_BUFFER,
        new Float32Array(vertices),
        gl.STATIC_DRAW

    );

    triangulo3vertex.itemSize = 3;
    triangulo3vertex.numItems = 12;

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

function desenharOlho() {

    // Desenhando Olho
    var translation = vec3.create();
    vec3.set(translation, 5, 15, -15);
    mat4.translate(mMatrix, mMatrix, translation);

    mPushMatrix();
    mat4.rotate(mMatrix, mMatrix, degToRad(Olho), [0, 1, 1]);


    gl.bindBuffer(gl.ARRAY_BUFFER, triangulo3vertex);
    gl.vertexAttribPointer(

        shaderProgram.vertexPositionAttribute,
        triangulo3vertex.itemSize,
        gl.FLOAT, false, 0, 0

    );
    gl.bindBuffer(gl.ARRAY_BUFFER, TrianguloCor);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        TrianguloCor.itemSize,
        gl.FLOAT, false, 0, 0

    );
    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLES, 0, triangulo3vertex.numItems);

    mPopMatrix();

}

var ultimoOlho = 0;
var testeOlho = false;
function animarOlho() {
    var agora = new Date().getTime();
    if (ultimoOlho != 0) {
        //calculos para atualizar os ângulos
        var diferenca = agora - ultimoOlho;
        if (testeOlho == false) {
            Olho += ((90 * diferenca) / 1000.0) % 360.0;
        }
        if (testeOlho == true) {
            Olho -= ((90 * diferenca) / 1000.0) % 360.0;
        }
        if (Olho >= 40) {
            testeOlho = true;
        }
        if (Olho <= -10) {
            testeOlho = false;
        }
    }
    ultimoOlho = agora;
}