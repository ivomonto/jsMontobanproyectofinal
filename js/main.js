function loadItems() {
    const priceList = JSON.parse(localStorage.getItem('priceList')) || [];
    const tableBody = document.getElementById('priceList');
    tableBody.innerHTML = ''; 

    priceList.forEach((item, index) => {
        const newRow = tableBody.insertRow();
        newRow.insertCell(0).textContent = index + 1;
        newRow.insertCell(1).textContent = item.marca;
        newRow.insertCell(2).textContent = item.medida;
        newRow.insertCell(3).textContent = parseFloat(item.precio).toFixed(2);
        newRow.insertCell(4).textContent = item.cantidad;

            // Columna para el botón de eliminar
            const actionsCell = newRow.insertCell(5);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.className = 'btn btn-danger btn-sm';
            deleteButton.onclick = () => deleteItem(index);
            actionsCell.appendChild(deleteButton);
        });
}

function addItem() {

    const itemName = document.getElementById('item').value;
    const marca = document.getElementById('marca').value;
    const medida = document.getElementById('medida').value;
    const precio = document.getElementById('precio').value;
    const cantidad = document.getElementById('cantidad').value;

    if (!itemName || !marca || !medida || !precio || !cantidad) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const priceList = JSON.parse(localStorage.getItem('priceList')) || [];

    priceList.push({
        item: itemName,
        marca: marca,
        medida: medida,
        precio: parseFloat(precio).toFixed(2),
        cantidad: cantidad
    });

    localStorage.setItem('priceList', JSON.stringify(priceList));


    loadItems();

    document.getElementById('priceForm').reset();
}
// Función para eliminar un ítem específico del localStorage
function deleteItem(index) {
    const priceList = JSON.parse(localStorage.getItem('priceList')) || [];
    priceList.splice(index, 1); // Eliminar el ítem en el índice especificado

    // Guardar los datos actualizados en el localStorage
    localStorage.setItem('priceList', JSON.stringify(priceList));

    // Actualizar la tabla
    loadItems();

}

window.onload = loadItems;

