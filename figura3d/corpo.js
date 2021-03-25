var triangulo1vertex;
var TrianguloCor;

var Corpo = 0;

function triangulo1() {
    triangulo1vertex = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangulo1vertex);

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

    triangulo1vertex.itemSize = 3;
    triangulo1vertex.numItems = 12;

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

function desenharCorpo() {

    // Desenhando corpo
    var translation = vec3.create();
    vec3.set(translation, 0, 0, -5.0);
    mat4.translate(mMatrix, mMatrix, translation);

    mPushMatrix();
    mat4.rotate(mMatrix, mMatrix, degToRad(Corpo), [0, 1, 0]);


    gl.bindBuffer(gl.ARRAY_BUFFER, triangulo1vertex);
    gl.vertexAttribPointer(

        shaderProgram.vertexPositionAttribute,
        triangulo1vertex.itemSize,
        gl.FLOAT, false, 0, 0

    );
    gl.bindBuffer(gl.ARRAY_BUFFER, TrianguloCor);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        TrianguloCor.itemSize,
        gl.FLOAT, false, 0, 0

    );
    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLES, 0, triangulo1vertex.numItems);

    mPopMatrix();

}

var ultimoCorpo = 0;
var testeCorpo = false;
function animarCorpo() {
    var agora = new Date().getTime();
    if (ultimoCorpo != 0) {
        //calculos para atualizar os ângulos
        var diferenca = agora - ultimoCorpo;
        if (testeCorpo == false) {
            Corpo += ((90 * diferenca) / 1000.0) % 360.0;
        }
        if (testeCorpo == true) {
            Corpo -= ((90 * diferenca) / 1000.0) % 360.0;
        }
        if (Corpo >= 40) {
            testeCorpo = true;
        }
        if (Corpo <= -10) {
            testeCorpo = false;
        }
    }
    ultimoCorpo = agora;
}