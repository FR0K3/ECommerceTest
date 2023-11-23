package com.fr0k3.ecommerceapi.services;

import com.fr0k3.ecommerceapi.models.dtos.FinalProductDTO;
import com.fr0k3.ecommerceapi.models.entities.Product;

import java.util.List;

public interface ProductService {
    List<Product> findAllByCategoryName(String categoryName);

    FinalProductDTO findById(int id);
}
