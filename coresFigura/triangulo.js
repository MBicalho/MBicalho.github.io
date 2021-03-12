// Triangulo principal: corpo
function triangulo1 (){
triangulo1vertex = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, triangulo1vertex);

var t_01_vertices = [
    
      0.0,  1.0, 0.0,
    -1.0, -1.0, 0.0, 
     1.0, -1.0, 0.0, 

];

gl.bufferData(

    gl.ARRAY_BUFFER, 
    new Float32Array(t_01_vertices),
    gl.STATIC_DRAW

);

triangulo1vertex.itemSize = 3;
triangulo1vertex.numItems = 3;

    TrianguloCor = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, TrianguloCor);
    
    a1 = Math.random()
    a2 = Math.random()
    a3 = Math.random()

    cores = []
    for (var i=0; i < 3; i++) {
        //cores = cores.concat([0.9, 0.7, 0.2, 1.0]);
        cores = cores.concat([a1, a2, a3, 1.0]);
    }
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    
    TrianguloCor.itemSize = 4;
    TrianguloCor.numItems = 3;
}

function triangulo2(){
    // Triangulo invertido: Asa
    triangulo2vertex = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangulo2vertex);

    var t_02_vertices = [
        
        0.0, -1.0, 0.0,
        1.0, 1.0, 0.0, 
        -1.0, 1.0, 0.0, 

    ];

    gl.bufferData(
    
        gl.ARRAY_BUFFER, 
        new Float32Array(t_02_vertices),
        gl.STATIC_DRAW

    );

    triangulo2vertex.itemSize = 3;
    triangulo2vertex.numItems = 3;

    TrianguloCor = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, TrianguloCor);
    
    a1 = Math.random()
    a2 = Math.random()
    a3 = Math.random()

    cores = []
    for (var i=0; i < 3; i++) {
        //cores = cores.concat([0.9, 0.7, 0.2, 1.0]);
        cores = cores.concat([a1, a2, a3, 1.0]);
    }
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    
    TrianguloCor.itemSize = 4;
    TrianguloCor.numItems = 3;
}
