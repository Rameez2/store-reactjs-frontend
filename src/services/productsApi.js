export const getProducts = async (filters) => {
    const response = await fetch('/db/products.json');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const productsData = await response.json();
    // filter product based on props options
    // featured 
    if(filters.featured) {
            const filteredProducts = productsData.filter((e) => e.featured);
            filteredProducts.length = filters.productsLength;
            return filteredProducts;
    }
    // not featured
    else {
        if(filters.discount) {
            const filteredProducts = productsData.filter((e) => e.discount);
            filteredProducts.length = filters.productsLength;
            return filteredProducts;
        }
        productsData.length = filters.productsLength;
        return productsData;
    }
}

export const getProductById = async (id) => {
        const response = await fetch(`/db/products.json`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const product = data.filter(item => item._id == id); // Find the product by ID
        return product.length ? product : null;
}