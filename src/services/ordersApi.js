export async function getOrders() {
    const response = await fetch('/db/orders.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}
  