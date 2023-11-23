package com.fr0k3.ecommerceapi.services;

import com.fr0k3.ecommerceapi.models.entities.Category;

import java.util.List;

public interface CategoryService {
    List<Category> findAll();
}
