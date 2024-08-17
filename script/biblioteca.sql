-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-08-2024 a las 20:39:33
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `biblioteca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `anio-publicacion` date NOT NULL,
  `ISBN` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `categoria`, `anio-publicacion`, `ISBN`) VALUES
(1, 'El Gran Gatsby', 'F. Scott Fitzgerald', 'Novela', '1925-04-10', '1234567890123'),
(2, '1984', 'George Orwell', 'Distopía', '1949-06-08', '2345678901234'),
(3, 'Matar un ruiseñor', 'Harper Lee', 'Ficción', '1960-07-11', '3456789012345'),
(4, 'Cien años de soledad', 'Gabriel García Márquez', 'Novela', '1967-05-05', '4567890123456'),
(5, 'Don Quijote de la Mancha', 'Miguel de Cervantes', 'Novela', '1605-01-01', '5678901234567'),
(6, 'Orgullo y prejuicio', 'Jane Austen', 'Romance', '1813-01-28', '6789012345678'),
(7, 'La metamorfosis', 'Franz Kafka', 'Ficción absurda', '1915-11-15', '7890123456789'),
(8, 'Brave New World', 'Aldous Huxley', 'Distopía', '1932-07-26', '8901234567890'),
(9, 'El principito', 'Antoine de Saint-Exupéry', 'Literatura infantil', '1943-04-06', '9012345678901'),
(10, 'Las uvas de la ira', 'John Steinbeck', 'Novela', '1939-04-14', '0123456789012'),
(11, 'Siddhartha', 'Hermann Hesse', 'Filosofía', '1922-10-20', '1234567890123'),
(12, 'El arte de la guerra', 'Sun Tzu', 'Estrategia militar', '0000-00-00', '2345678901234'),
(13, 'Frankenstein', 'Mary Shelley', 'Gótico', '1818-01-01', '3456789012345'),
(14, 'Anna Karenina', 'Lev Tolstoy', 'Novela realista', '1877-01-01', '4567890123456'),
(15, 'Los hermanos Karamazov', 'Fyodor Dostoevsky', 'Novela filosófica', '1880-11-01', '5678901234567'),
(16, 'El hobbit', 'J.R.R. Tolkien', 'Fantasía', '1937-09-21', '6789012345678'),
(17, 'El alquimista', 'Paulo Coelho', 'Novela de aventura', '1988-09-26', '7890123456789'),
(18, 'El código Da Vinci', 'Dan Brown', 'Thriller', '2003-04-03', '8901234567890'),
(19, 'Harry Potter y la piedra filos', 'J.K. Rowling', 'Fantasía', '1997-06-30', '9012345678901'),
(20, 'La historia interminable', 'Michael Ende', 'Fantasía', '1979-01-01', '0123456789012');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
