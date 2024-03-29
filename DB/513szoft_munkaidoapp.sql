-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Feb 09. 14:04
-- Kiszolgáló verziója: 10.4.6-MariaDB
-- PHP verzió: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `513szoft_munkaidoapp`
--
CREATE DATABASE IF NOT EXISTS `513szoft_munkaidoapp` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `513szoft_munkaidoapp`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `employees`
--

CREATE TABLE `employees` (
  `ID` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `address` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `position` varchar(30) COLLATE utf8_hungarian_ci NOT NULL,
  `pricePerHour` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `employees`
--

INSERT INTO `employees` (`ID`, `name`, `address`, `position`, `pricePerHour`) VALUES
(1, 'Béla', 'Baja', 'portás', 2500),
(2, 'Józsi', 'Baja', 'sofőr', 3500),
(3, 'Feri', 'baja', 'takker', 3333);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `worktimes`
--

CREATE TABLE `worktimes` (
  `ID` int(11) NOT NULL,
  `empID` int(11) NOT NULL,
  `date` date NOT NULL,
  `start` time NOT NULL,
  `end` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `worktimes`
--

INSERT INTO `worktimes` (`ID`, `empID`, `date`, `start`, `end`) VALUES
(1, 1, '2024-02-09', '08:00:00', '16:00:00'),
(3, 2, '2024-02-09', '10:00:00', '12:00:00');

-- --------------------------------------------------------

--
-- A nézet helyettes szerkezete `worktimes_vt`
-- (Lásd alább az aktuális nézetet)
--
CREATE TABLE `worktimes_vt` (
`ID` int(11)
,`empID` int(11)
,`name` varchar(50)
,`date` date
,`start` time
,`end` time
);

-- --------------------------------------------------------

--
-- Nézet szerkezete `worktimes_vt`
--
DROP TABLE IF EXISTS `worktimes_vt`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `worktimes_vt`  AS  select `worktimes`.`ID` AS `ID`,`worktimes`.`empID` AS `empID`,`employees`.`name` AS `name`,`worktimes`.`date` AS `date`,`worktimes`.`start` AS `start`,`worktimes`.`end` AS `end` from (`worktimes` join `employees` on(`employees`.`ID` = `worktimes`.`empID`)) ;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `worktimes`
--
ALTER TABLE `worktimes`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `empID` (`empID`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `employees`
--
ALTER TABLE `employees`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `worktimes`
--
ALTER TABLE `worktimes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
