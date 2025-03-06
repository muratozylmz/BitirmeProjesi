// Örnek veri
const orders = [
    {
        orderNo: '171-7420084-2923522',
        status: 'Sold',
        price: 'AED159.32',
        profitPercent: '10%',
        profitAmount: 'AED12.33',
        date: '2 gün önce'
    },
    {
        orderNo: '405-2847857-6941922',
        status: 'Sold',
        price: 'AED445.70',
        profitPercent: '10%',
        profitAmount: 'AED34.45',
        date: '2 gün önce'
    }
    // Diğer siparişler...
];

// Siparişleri tabloya yükle
function loadOrders() {
    const tableBody = document.getElementById('ordersTableBody');
    
    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.orderNo}</td>
            <td><span class="status-badge">${order.status}</span></td>
            <td>${order.price}</td>
            <td><span class="profit">${order.profitPercent}</span> ${order.profitAmount}</td>
            <td>${order.date}</td>
            <td>
                <button class="action-btn">Sipariş ver</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Grafik verisi
const chartData = {
    labels: ['1 Ocak', '2 Ocak', '3 Ocak', '4 Ocak', '5 Ocak'],
    datasets: [{
        label: 'Satışlar',
        data: [12, 19, 3, 5, 2],
        borderColor: '#3b82f6',
        tension: 0.4
    }]
};

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    loadOrders();
    
    // Arama fonksiyonu
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('#ordersTableBody tr');
        
        rows.forEach(row => {
            const orderNo = row.querySelector('td').textContent.toLowerCase();
            row.style.display = orderNo.includes(searchTerm) ? '' : 'none';
        });
    });
});

