
function circulo(){
circulo1vertex = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, circulo1vertex);

var c_vertices = [];
var radius = 1;
var qtd_vertices = 100;

for (let i = 0; i < 2 * Math.PI; i += 2 * Math.PI / qtd_vertices) {
    c_vertices.push(Math.cos(i) * radius, Math.sin(i) * radius, 0);
}

gl.bufferData(

    gl.ARRAY_BUFFER, 
    new Float32Array(c_vertices),
    gl.STATIC_DRAW

);

circulo1vertex.itemSize = 3;
circulo1vertex.numItems = 100;

CirculoCor = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, CirculoCor);

a1 = Math.random()
a2 = Math.random()
a3 = Math.random()

cores = []
for (var i=0; i < 100; i++) {
    cores = cores.concat([a1, a2, a3, 1.0]);
}

gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);

CirculoCor.itemSize = 4;
CirculoCor.numItems = 100;

}

