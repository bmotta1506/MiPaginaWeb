// Base de datos de los autos
const datosVehiculos = {
    'CX-90': {
        titulo: 'MT CX-90',
        precio: 'Desde: USD$48,290',
        img: '../static/imagenes/Mazda CX90.png',
        specs: ['Motor 3.3L Turbo i-ACTIV', 'AWD All-Wheel Drive', '3 Filas de asientos cuero Nappa'],
        versiones: [
            { nom: 'High', mot: '3.3L', trans: '8AT' },
            { nom: 'Signature', mot: '3.3L Turbo', trans: '8AT' }
        ]
    },
    'CX-5': {
        titulo: 'MT CX-5',
        precio: 'Desde: USD$27,290',
        img: '../static/imagenes/Mazda CX5.png',
        specs: ['Frenado inteligente', 'Pantalla 10.25"', 'Aros de 19"'],
        versiones: [
            { nom: 'Core', mot: '2.0L', trans: '6AT' },
            { nom: 'High', mot: '2.5L', trans: '6AT' }
        ]
    },
    'CX-60': {
        titulo: 'MT C-60',
        precio: 'Desde: USD$43,990',
        img: '../static/imagenes/Mazda CX60.png',
        specs: ['Híbrido Enchufable', 'Tracción AWD', 'Asientos de cuero Nappa'],
        versiones: [
            { nom: 'Prime', mot: '2.5L', trans: '6AT' },
            { nom: 'Signature', mot: '2.5L', trans: '6AT' }
        ]
    },
    'CX-30': {
        titulo: 'MT CX-30',
        precio: 'Desde: USD$23,490',
        img: '../static/imagenes/Mazda CX30.png',
        specs: ['Diseño KODO', 'Pantalla táctil 8.8"', 'Conectividad Apple CarPlay y Android Auto'],
        versiones: [
            { nom: 'Prime', mot: '2.0L', trans: '6AT' },
            { nom: 'High', mot: '2.0L', trans: '6AT' }
        ]
    },
    'CX-3': {
        titulo: 'MT CX-3',
        precio: 'Desde: USD$22,640',
        img: '../static/imagenes/Mazda CX3.jpg',
        specs: ['Diseño KODO', 'Pantalla táctil 7"', 'Conectividad Apple CarPlay y Android Auto'],
        versiones: [
            { nom: 'Prime', mot: '2.0L', trans: '6AT' },
            { nom: 'High', mot: '2.0L', trans: '6AT' }
        ]
    },
    'BT-50': {
        titulo: 'MT BT-50',
        precio: 'Desde: USD$31,090',
        img: '../static/imagenes/Mazda BT50.webp',
        specs: ['Capacidad de carga 1 Ton', 'Tracción 4x4 con duplicado', 'Motor Diesel Turbo'],
        versiones: [
            { nom: 'Power', mot: '3.0L', trans: '6MT' },
            { nom: 'Luxury', mot: '3.0L', trans: '6AT' }
        ]
    },
    'MX-5': {
        titulo: 'MT MX-5',
        precio: 'Desde: USD$44,990',
        img: '../static/imagenes/Mazda MX5.png',
        specs: ['Motor 2.0L', 'Sistema de suspensión deportiva', 'Asientos cuero'],
        versiones: [
            { nom: 'Base', mot: '2.0L', trans: '6MT' },
            { nom: 'Touring', mot: '2.0L', trans: '6MT' }
        ]
    },
    'MT-6': {
        titulo: 'MT 6',
        precio: 'Desde: USD$28,990',
        img: '../static/imagenes/Mazda 6.jpg',
        specs: ['Frenado inteligente', 'Pantalla 10.25"', 'Aros de 19"'],
        versiones: [
            { nom: 'Base', mot: '2.0L', trans: '6AT' },
            { nom: 'Premium', mot: '2.5L', trans: '6AT' }
        ]
    }
};

const modal = document.getElementById("modalVersiones");
const btnCerrar = document.querySelector(".close-modal");

function abrirModal(id) {
    const car = datosVehiculos[id];
    if(!car) return;

    document.getElementById("tituloModal").innerText = car.titulo;
    document.getElementById("precioModal").innerText = car.precio;
    document.getElementById("imgModal").src = car.img;

    const lista = document.getElementById("listaCaracteristicas");
    lista.innerHTML = car.specs.map(s => `<li> ${s}</li>`).join('');

    const tabla = document.getElementById("tablaVersiones");
    tabla.innerHTML = car.versiones.map(v => `
        <tr>
            <td>${v.nom}</td>
            <td>${v.mot}</td>
            <td>${v.trans}</td>
        </tr>
    `).join('');

    modal.style.display = "block";
}

btnCerrar.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }