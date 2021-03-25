var retangulo1vertex;
var RetanguloCor;

function retangulo1() {
    // Definindo vértices e configurações do buffer - Quadrado 02 Pés
    retangulo1vertex = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, retangulo1vertex);

    var vertices = [

        1.0,  1.0, 0.0,
        -8.0,  1.0, 0.0, 
        1.0, -0.0, 0.0, 
        -8.0, -0.0, 0.0 


    ];

    gl.bufferData(

        gl.ARRAY_BUFFER,
        new Float32Array(vertices),
        gl.STATIC_DRAW

    );

    retangulo1vertex.itemSize = 3;
    retangulo1vertex.numItems = 4;



    RetanguloCor = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, RetanguloCor);

    a1 = Math.random()
    a2 = Math.random()
    a3 = Math.random()

    cores = []
    for (var i = 0; i < 4; i++) {
        cores = cores.concat([a1, a2, a3, 1.0]);
    }

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);

    RetanguloCor.itemSize = 4;
    RetanguloCor.numItems = 4;
}

function desenharBoca() {

    var translation = vec3.create();
    vec3.set(translation, 25, 0, -35);
    
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, retangulo1vertex);
    gl.vertexAttribPointer(

        shaderProgram.vertexPositionAttribute,
        retangulo1vertex.itemSize,
        gl.FLOAT, false, 0, 0

    );
    mPushMatrix();
    gl.bindBuffer(gl.ARRAY_BUFFER, RetanguloCor);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        RetanguloCor.itemSize,
        gl.FLOAT, false, 0, 0

    );


    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, retangulo1vertex.numItems);
    mPopMatrix();
}