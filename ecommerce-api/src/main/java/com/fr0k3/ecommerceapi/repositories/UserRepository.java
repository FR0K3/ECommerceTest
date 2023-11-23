package com.fr0k3.ecommerceapi.repositories;

import com.fr0k3.ecommerceapi.models.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

}
