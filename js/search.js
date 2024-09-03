// Función para filtrar los ítems en la tabla basado en la medida
function filterItems() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#priceList tr');
    
    rows.forEach(row => {
        const measureCell = row.cells[2]; // La tercera celda contiene la medida
        if (measureCell) {
            const measureText = measureCell.textContent.toLowerCase();
            if (measureText.includes(searchValue)) {
                row.style.display = ''; // Mostrar la fila si coincide
            } else {
                row.style.display = 'none'; // Ocultar la fila si no coincide
            }
        }
    });
}

// Configurar el evento de búsqueda en tiempo real
document.getElementById('searchInput').addEventListener('input', filterItems);

// Cargar los ítems desde el localStorage cuando se carga la página
window.onload = loadItems;