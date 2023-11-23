package com.fr0k3.ecommerceapi.services.implementation;

import com.fr0k3.ecommerceapi.models.entities.Category;
import com.fr0k3.ecommerceapi.repositories.CategoryRepository;
import com.fr0k3.ecommerceapi.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> findAll() {
        return categoryRepository.findAll();
    }
}
