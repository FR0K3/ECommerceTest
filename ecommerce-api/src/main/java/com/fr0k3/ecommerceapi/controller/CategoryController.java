package com.fr0k3.ecommerceapi.controller;

import com.fr0k3.ecommerceapi.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("api/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @RequestMapping("/")
    public ResponseEntity<?> findAllCategories() {
        return new ResponseEntity<>(categoryService.findAll(), HttpStatus.OK);
    }

}
