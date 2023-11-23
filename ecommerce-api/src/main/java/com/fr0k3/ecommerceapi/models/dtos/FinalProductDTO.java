package com.fr0k3.ecommerceapi.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
public class FinalProductDTO {
    private int id;
    private String name;
    private String description;
    private BigDecimal price;
    private String image;
    private String state;
    private String category;
}
