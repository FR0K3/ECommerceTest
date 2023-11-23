package com.fr0k3.ecommerceapi.models.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "usuarios")
public class User {

    @Id
    @Column(name = "usr_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "usr_codigo")
    private String code;

    @Column(name = "usr_nombre")
    private String name;

    @Column(name = "usr_clave")
    private String password;

    @Column(name = "usr_estado")
    private String state;

    public User(String code, String name, String password, String state) {
        this.code = code;
        this.name = name;
        this.password = password;
        this.state = state;
    }
}
