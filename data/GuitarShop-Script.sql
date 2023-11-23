CREATE DATABASE ecommerce-db;

-- public.categorias definition

-- Drop table

-- DROP TABLE public.categorias;

CREATE TABLE public.categorias (
	cat_id serial4 NOT NULL,
	cat_nombre varchar(50) NULL,
	CONSTRAINT categorias_pk PRIMARY KEY (cat_id)
);


-- public.usuarios definition

-- Drop table

-- DROP TABLE public.usuarios;

CREATE TABLE public.usuarios (
	usr_id serial4 NOT NULL,
	usr_codigo varchar(20) NULL,
	usr_nombre varchar(50) NULL,
	usr_clave varchar(20) NULL,
	usr_estado varchar(3) NULL,
	CONSTRAINT usuarios_pk PRIMARY KEY (usr_id)
);


-- public.productos definition

-- Drop table

-- DROP TABLE public.productos;

CREATE TABLE public.productos (
	prd_id serial4 NOT NULL,
	prd_nombre varchar(50) NULL,
	prd_descripcion varchar(200) NULL,
	prd_precio numeric(6, 2) NULL,
	prd_imagen varchar(200) NULL,
	prd_estado varchar(3) NULL,
	cat_id int4 NOT NULL,
	CONSTRAINT productos_pk PRIMARY KEY (prd_id),
	CONSTRAINT productos_fk FOREIGN KEY (cat_id) REFERENCES public.categorias(cat_id)
);


-- Data
insert into categorias (cat_nombre) values ('Guitarras Eléctricas');
insert into categorias (cat_nombre) values ('Guitarras Acústicas');
insert into categorias (cat_nombre) values ('Bajos');

insert into productos (prd_nombre, prd_descripcion, prd_precio, prd_imagen, prd_estado, cat_id) values ('Mitchell MS100 Charcoal Satin', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ac odio placerat venenatis', '605.99', 'https://media.guitarcenter.com/is/image/MMGS7/L25688000001000-00-600x600.jpg', 'ACT', 1);
insert into productos (prd_nombre, prd_descripcion, prd_precio, prd_imagen, prd_estado, cat_id) values ('Mitchell TD100 Powder Blue', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ac odio placerat venenatis', '985.99', 'https://media.guitarcenter.com/is/image/MMGS7/L25689000002001-00-600x600.jpg', 'ACT', 1);
insert into productos (prd_nombre, prd_descripcion, prd_precio, prd_imagen, prd_estado, cat_id) values ('Kramer Baretta Danger Zone', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ac odio placerat venenatis', '999.00', 'https://media.guitarcenter.com/is/image/MMGS7/L86827000001000-00-600x600.jpg', 'ACT', 1);
insert into productos (prd_nombre, prd_descripcion, prd_precio, prd_imagen, prd_estado, cat_id) values ('Legator SP8F', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ac odio placerat venenatis', '1399.00', 'https://media.guitarcenter.com/is/image/MMGS7/L87432000001000-00-600x600.jpg', 'ACT', 1);
insert into productos (prd_nombre, prd_descripcion, prd_precio, prd_imagen, prd_estado, cat_id) values ('Rogue Starter', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ac odio placerat venenatis', '55.33', 'https://media.guitarcenter.com/is/image/MMGS7/519266000030000-00-600x600.jpg', 'ACT', 2);
insert into productos (prd_nombre, prd_descripcion, prd_precio, prd_imagen, prd_estado, cat_id) values ('Rogue RD80 Dreadnought', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ac odio placerat venenatis', '109.99', 'https://media.guitarcenter.com/is/image/MMGS7/423794000027000-00-600x600.jpg', 'ACT', 2);
insert into productos (prd_nombre, prd_descripcion, prd_precio, prd_imagen, prd_estado, cat_id) values ('Kremona Fiesta', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ac odio placerat venenatis', '749.99', 'https://media.guitarcenter.com/is/image/MMGS7/J06000000001000-00-600x600.jpg', 'ACT', 2);
insert into productos (prd_nombre, prd_descripcion, prd_precio, prd_imagen, prd_estado, cat_id) values ('Lakland Skyline 44-64', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ac odio placerat venenatis.', '1560.68', 'https://media.guitarcenter.com/is/image/MMGS7/J57024000001000-00-600x600.jpg', 'ACT', 3);
insert into productos (prd_nombre, prd_descripcion, prd_precio, prd_imagen, prd_estado, cat_id) values ('B.C. Rich Extreme', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ac odio placerat venenatis', '1499.94', 'https://media.guitarcenter.com/is/image/MMGS7/L70433000002000-00-600x600.jpg', 'ACT', 3);
insert into productos (prd_nombre, prd_descripcion, prd_precio, prd_imagen, prd_estado, cat_id) values ('Rogue LX205B', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ac odio placerat venenatis', '179.43', 'https://media.guitarcenter.com/is/image/MMGS7/H11149000003000-00-600x600.jpg', 'ACT', 3);
