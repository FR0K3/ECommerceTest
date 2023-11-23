package com.fr0k3.ecommerceapi.repositories;

import com.fr0k3.ecommerceapi.models.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findAllByCategoryName(String categoryName);
}
