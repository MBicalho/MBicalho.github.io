function quadrado1(){
quadrado1vertex = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, quadrado1vertex);

var q_01_vertices = [
    
     1.0,  1.0, 0.0,
    -5.0,  1.0, 0.0, 
     1.0, -3.0, 0.0, 
    -5.0, -3.0, 0.0 

];

gl.bufferData(

    gl.ARRAY_BUFFER, 
    new Float32Array(q_01_vertices),
    gl.STATIC_DRAW

);

quadrado1vertex.itemSize = 3;
quadrado1vertex.numItems = 4;

QuadradoCor = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, QuadradoCor);

a1 = Math.random()
a2 = Math.random()
a3 = Math.random()

cores = []
for (var i=0; i < 4; i++) {
    cores = cores.concat([a1, a2, a3, 1.0]);
}

gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);

QuadradoCor.itemSize = 4;
QuadradoCor.numItems = 4;

}

function quadrado2(){
    // Quadrado: pés
    quadrado2vertex = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadrado2vertex);

    var q_02_vertices = [
        
         1.0,  1.0, 0.0,
        -6.0,  1.0, 0.0, 
         1.0, -3.0, 0.0, 
        -6.0, -3.0, 0.0 

    ];

    gl.bufferData(
    
        gl.ARRAY_BUFFER, 
        new Float32Array(q_02_vertices),
        gl.STATIC_DRAW

    );

    quadrado2vertex.itemSize = 3;
    quadrado2vertex.numItems = 4;

    QuadradoCor = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, QuadradoCor);

    a1 = Math.random()
    a2 = Math.random()
    a3 = Math.random()

    cores = []
    for (var i=0; i < 4; i++) {
        cores = cores.concat([a1, a2, a3, 1.0]);
    }
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    
    QuadradoCor.itemSize = 4;
    QuadradoCor.numItems = 4;

}

function retangulo(){
 // Definindo vértices e configurações do buffer - Quadrado 02 Pés
 retangulovertex = gl.createBuffer();
 gl.bindBuffer(gl.ARRAY_BUFFER, retangulovertex);

 var q_02_vertices = [
     
     1.0,  1.0, 0.0,
     -8.0,  1.0, 0.0, 
     1.0, -0.0, 0.0, 
     -8.0, -0.0, 0.0 

 ];

 gl.bufferData(
 
     gl.ARRAY_BUFFER, 
     new Float32Array(q_02_vertices),
     gl.STATIC_DRAW

 );

    retangulovertex.itemSize = 3;
    retangulovertex.numItems = 4;



    QuadradoCor = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, QuadradoCor);

    a1 = Math.random()
    a2 = Math.random()
    a3 = Math.random()

    cores = []
    for (var i=0; i < 4; i++) {
        cores = cores.concat([a1, a2, a3, 1.0]);
    }
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    
    QuadradoCor.itemSize = 4;
    QuadradoCor.numItems = 4;
}
