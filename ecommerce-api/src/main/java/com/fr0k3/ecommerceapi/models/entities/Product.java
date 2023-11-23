package com.fr0k3.ecommerceapi.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@Entity
@Table(name = "productos")
public class Product {

    @Id
    @Column(name = "prd_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "prd_nombre")
    private String name;

    @Column(name = "prd_descripcion")
    private String description;

    @Column(name = "prd_precio")
    private BigDecimal price;

    @Column(name = "prd_imagen")
    private String image;

    @Column(name = "prd_estado")
    private String state;

    @ManyToOne
    @JoinColumn(name = "cat_id", nullable = false)
    @JsonIgnore
    private Category category;

    public Product(String name, String description, BigDecimal price, String image, String state) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.state = state;
    }
}
