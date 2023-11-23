package com.fr0k3.ecommerceapi.services.implementation;

import com.fr0k3.ecommerceapi.exception.NotFoundException;
import com.fr0k3.ecommerceapi.models.dtos.FinalProductDTO;
import com.fr0k3.ecommerceapi.models.entities.Product;
import com.fr0k3.ecommerceapi.repositories.ProductRepository;
import com.fr0k3.ecommerceapi.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> findAllByCategoryName(String categoryName) {
        return productRepository.findAllByCategoryName(categoryName);
    }

    @Override
    public FinalProductDTO findById(int id) {
        Product product = productRepository.findById(id).orElse(null);

        if (product == null)
            throw new NotFoundException("Product not found");

        FinalProductDTO finalProduct = new FinalProductDTO(
                product.getId(),
                product.getName(),
                product.getDescription(),
                product.getPrice(),
                product.getImage(),
                product.getState(),
                product.getCategory().getName()
        );

        return finalProduct;
    }
}
