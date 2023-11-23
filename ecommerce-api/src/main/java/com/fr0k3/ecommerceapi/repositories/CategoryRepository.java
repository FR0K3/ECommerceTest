package com.fr0k3.ecommerceapi.repositories;

import com.fr0k3.ecommerceapi.models.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
