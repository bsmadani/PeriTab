const table = [
    "H", "الهيدروجين", "1.0", 1, 1,
    "He", "الهيليوم", "4.0", 8, 1,
    "Li", "الليثيوم", "6.9", 1, 2,
    "Be", "البريليوم", "9.0", 2, 2,
    "B", "البورون", "10.8", 3, 2,
    "C", "الكربون", "12.0", 4, 2,
    "N", "الازوت", "14.0", 5, 2,
    "O", "الاكسجين", "16.0", 6, 2,
    "F", "الفلور", "19.0", 7, 2,
    "Ne", "النيون", "20.1", 8, 2,
    "Na", "الصوديوم", "23.0", 1, 3,
    "Mg", "المغنسيوم", "24.3", 2, 3,
    "Al", "الالمنيوم", "27.0", 3, 3,
    "Si", "السليسيوم", "28.1", 4, 3,
    "P", "الفوسفور", "31.0", 5, 3,
    "S", "الكبريت", "32.1", 6, 3,
    "Cl", "الكلور", "35.5", 7, 3,
    "Ar", "الارغون", "39.9", 8, 3,
];

const dist =[
    "K<sup>1</sup>",
    "K<sup>2</sup>",
    "K<sup>2</sup> L<sup>1</sup>",
    "K<sup>2</sup> L<sup>2</sup>",
    "K<sup>2</sup> L<sup>3</sup>",
    "K<sup>2</sup> L<sup>4</sup>",
    "K<sup>2</sup> L<sup>5</sup>",
    "K<sup>2</sup> L<sup>6</sup>",
    "K<sup>2</sup> L<sup>7</sup>",
    "K<sup>2</sup> L<sup>8</sup>",
    "K<sup>2</sup> L<sup>8</sup> M<sup>1</sup>",
    "K<sup>2</sup> L<sup>8</sup> M<sup>2</sup>",
    "K<sup>2</sup> L<sup>8</sup> M<sup>3</sup>",
    "K<sup>2</sup> L<sup>8</sup> M<sup>4</sup>",
    "K<sup>2</sup> L<sup>8</sup> M<sup>5</sup>",
    "K<sup>2</sup> L<sup>8</sup> M<sup>6</sup>",
    "K<sup>2</sup> L<sup>8</sup> M<sup>7</sup>",
    "K<sup>2</sup> L<sup>8</sup> M<sup>8</sup>",
];

const coord = [   
    "1","عائلة القلائيات","",1,0,
    "2","القلائيات الترابية","",2,1,
    "3","العناصر الترابية","",3,1,
    "4","","",4,1,
    "5","","",5,1,
    "6","","",6,1,
    "7","عائلة الهالوجينات","",7,1,
    "8","الغازات الخاملة","",8,0,

    "I","","",0,1,
    "II","","",0,2,
    "III","","",0,3,
];

const note =[
    "X","العنصر الكيميائي","التوزيع الالكتروني",4,0,
    "X","العنصر الكيميائي","التوزيع الالكتروني",5,0
];

const about = [
    "الجدول الدوري البسيط للعناصر الكيميائية","برمجة و تصميم استاذ مادة العلوم الفيزيائية","بن سليليح مداني",4,5,
];

const models = [
    "./3d/element_001_hydrogen.glb",
    "./3d/element_002_helium.glb",
    "./3d/element_003_lithium.glb",
    "./3d/element_004_beryllium.glb",
    "./3d/element_005_boron.glb",
    "./3d/element_006_carbon.glb",
    "./3d/element_007_nitrogen.glb",
    "./3d/element_008_oxygen.glb",
    "./3d/element_009_fluorine.glb",
    "./3d/element_010_neon.glb",
    "./3d/element_011_sodium.glb",
    "./3d/element_012_magnesium.glb",
    "./3d/element_013_aluminum.glb",
    "./3d/element_014_silicon.glb",
    "./3d/element_015_phosphorus.glb",
    "./3d/element_016_sulfur.glb",
    "./3d/element_017_chlorine.glb",
    "./3d/element_018_argon.glb"
];

const txtfile = [
    "./txt/H.txt",
    "./txt/He.txt",
    "./txt/Li.txt",
    "./txt/Be.txt",
    "./txt/B.txt",
    "./txt/C.txt",
    "./txt/N.txt",
    "./txt/O.txt",
    "./txt/F.txt",
    "./txt/Ne.txt",
    "./txt/Na.txt",
    "./txt/Mg.txt",
    "./txt/Al.txt",
    "./txt/Si.txt",
    "./txt/P.txt",
    "./txt/S.txt",
    "./txt/Cl.txt",
    "./txt/Ar.txt",
];

let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = {simple: [], table: [], coord: [], note: [], grid: []};

init();
animate();

function init() {

    initCamera();

    initScene();

    initObjects();

    initRenderer();

    initTrackbarControls();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false);

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1500;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);

}

function initObjects() {

    simpleObjectsLayout();

}

function simpleObjectsLayout() {

     
    for (let i = 0; i < table.length; i += 5) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        object.position.x = Math.random() * 4000 - 1000;
        object.position.y = Math.random() * 4000 - 1000;
        object.position.z = Math.random() * 4000 - 1000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }
    for (let i = 0; i < coord.length; i += 5){
        let object = new THREE.CSS3DObject(htmlElement_coord(coord, i));
        object.position.x = Math.random() * 4000 - 1000;
        object.position.y = Math.random() * 4000 - 1000;
        object.position.z = Math.random() * 4000 - 1000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(coord, i);
    }

    let object = new THREE.CSS3DObject(htmlNote(note, 0));
        object.position.x = Math.random() * 4000 - 1000;
        object.position.y = Math.random() * 4000 - 1000;
        object.position.z = Math.random() * 4000 - 1000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(note, 0);

    let object1 = new THREE.CSS3DObject(htmlAbout(about, 0));
        object1.position.x = Math.random() * 4000 - 1000;
        object1.position.y = Math.random() * 4000 - 1000;
        object1.position.z = Math.random() * 4000 - 1000;

        scene.add(object1);
        targets.simple.push(object1);
        noteLayout(about, 0);
}

function htmlAbout(about, i) {
    let element = document.createElement('div');
    element.className = 'about_element';
    element.style.backgroundColor = 'rgba(255,255,255,0)';

    let title = document.createElement('div');
    title.className = 'col_num';
    title.textContent = about[i];
    element.appendChild(title);

    let hello = document.createElement('div');
    hello.className = 'hello';
    hello.textContent = about[i + 1];
    element.appendChild(hello);

    let name = document.createElement('div');
    name.className = 'name';
    name.textContent = about[i + 2];
    element.appendChild(name);

    return element;
}

function htmlElement_coord(coord, i) {
    let element = document.createElement('div');
    element.className = 'coord_element';
    element.style.backgroundColor = 'rgba(255,255,255,1)';

    let col_num = document.createElement('div');
    col_num.className = 'col_num';
    col_num.textContent = coord[i];
    element.appendChild(col_num);

    let family = document.createElement('div');
    family.className = 'family';
    family.innerHTML = coord[i + 1];
    if (i == 0){
        family.style.backgroundColor = 'rgba(199, 10, 180, 0.75)';
    }else if (i == 5){
        family.style.backgroundColor = 'rgba(24, 11, 136, 0.75)';
    }
    else if (i == 10){
        family.style.backgroundColor = 'rgba(38, 121, 17, 0.75)';
    }
    else if (i == 30){
        family.style.backgroundColor = 'rgba(241, 141, 10, 0.75)';
    }
    else if (i == 35){
        family.style.backgroundColor = 'rgba(240, 112, 50, 0.75)';
    }
    
    element.appendChild(family);

    return element;
}

function htmlElement(table, i) {
    let element = document.createElement('div');
    element.className = 'element';
    if(i == 0 || i == 10 || i == 50){
        element.style.backgroundColor = 'rgba(199, 10, 180, 0.75)';
    }else if(i == 40 || i == 80){
        element.style.backgroundColor = 'rgba(241, 141, 10, 0.75)';
    }
    else if(i == 5 || i == 45 || i == 85){
        element.style.backgroundColor = 'rgba(240, 112, 50, 0.75)';
    }
    else if(i == 15 || i == 55){
        element.style.backgroundColor = 'rgba(24, 11, 136, 0.75)';
    }else if(i == 20 || i == 60){
        element.style.backgroundColor = 'rgba(38, 121, 17, 0.75)';
    }
    else{
        element.style.backgroundColor = 'rgba(240, 205, 8, 0.842)';
    }
    
    let cont = document.createElement('div');
    cont.className = 'cont';
    element.appendChild(cont);

    let left = document.createElement('div');
    left.className = 'left';
    cont.appendChild(left);

    let number_A = document.createElement('div');
    number_A.className = 'number_A';
    number_A.textContent =  table[i + 2];
    left.appendChild(number_A);

    let space = document.createElement('div');
    space.className = 'space';
    left.appendChild(space);

    let number_Z = document.createElement('div');
    number_Z.className = 'number_Z';
    number_Z.textContent = (i / 5) + 1;
    left.appendChild(number_Z);

    let symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = table[i];
    cont.appendChild(symbol);

    let details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = table[i + 1] + '<br>' + dist[i/5];
    element.appendChild(details);

    element.addEventListener('pointerdown', ()=>showelementdetails(i), false);

    return element;
}

function showelementdetails(i){

    let corpus = document.getElementById("corpuscule");
    corpus.className = 'corpusc_on'; 

    let model = document.getElementById("model_three_d");
    model.className = 'model_on'; 

    let element = document.getElementById("info");

    if(i == 0 || i == 10 || i == 50){
        element.style.backgroundColor = 'rgba(199, 10, 180, 0.75)';
    }else if(i == 40 || i == 80){
        element.style.backgroundColor = 'rgba(241, 141, 10, 0.75)';
    }else if(i == 5 || i == 45 || i == 85){
        element.style.backgroundColor = 'rgba(240, 112, 50, 0.75)';
    }else if(i == 15 || i == 55){
        element.style.backgroundColor = 'rgba(24, 11, 136, 0.75)';
    }else if(i == 20 || i == 60){
        element.style.backgroundColor = 'rgba(38, 121, 17, 0.75)';
    }else{
        element.style.backgroundColor = 'rgba(240, 205, 8, 0.842)';
    }
    let object = document.getElementById('model_three_d');
    object.src = models[i / 5];
    element.className = 'info_on';

    let element_info = document.getElementById('element_info');
    element_info.textContent = TextFileReader(txtfile[i / 5]);

    let number_A = document.getElementById('info_number_A');
    number_A.textContent =  table[i + 2];

    let number_Z = document.getElementById('info_number_Z');
    number_Z.textContent = (i / 5) + 1;

    let symbol = document.getElementById('info_symbol');
    symbol.textContent = table[i];
    

    let details = document.getElementById('info_details');
    details.innerHTML = table[i + 1] + '<br>' + dist[i/5];

}

function TextFileReader(pathOfFileToReadFrom) {
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;
    return returnValue;
}

function htmlNote(note, i) {
    let element = document.createElement('div');
    element.className = 'note_element';
    
    let cont = document.createElement('div');
    cont.className = 'cont';
    element.appendChild(cont);

    let left = document.createElement('div');
    left.className = 'left';
    cont.appendChild(left);

    let number_A = document.createElement('div');
    number_A.className = 'number_A';
    number_A.textContent = 'العدد الكتلي A';
    left.appendChild(number_A);

    let space = document.createElement('div');
    space.className = 'space';
    left.appendChild(space);

    let number_Z = document.createElement('div');
    number_Z.className = 'number_Z';
    number_Z.textContent = 'العدد الذري Z';
    left.appendChild(number_Z);

    let symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = note[i];
    cont.appendChild(symbol);

    let details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = note[i + 1] + '<br>' + note[i + 2];
    element.appendChild(details);

    return element;
}

function noteLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = -260;
    object.position.y = 900;
    object.position.z = 0;
    targets.table.push(object);

}

function tableLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = (table[index + 3] * 140) - window.innerWidth; 
    object.position.y = -(table[index + 4] * 160) + window.innerHeight; 
    targets.table.push(object);

}

function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    composer.render();
}
