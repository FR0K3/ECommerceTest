package com.fr0k3.ecommerceapi.controller;

import com.fr0k3.ecommerceapi.exception.ParamException;
import com.fr0k3.ecommerceapi.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/")
    public ResponseEntity<?> findAllProductsByCategory(@RequestParam("category") String category) {
        if (category.isBlank())
            throw new ParamException("Category is required");

        return new ResponseEntity<>(productService.findAllByCategoryName(category), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findProductById(@PathVariable("id") int id) {
        return new ResponseEntity<>(productService.findById(id), HttpStatus.OK);
    }

}
