import calculateEaster from "./calculateEaster";
import dayjs from "dayjs";

// https://tlarsen2.tripod.com/thomaslarsen/easterdates.html
const allDates = [
    "Apr 11 1700",
    "Mar 27 1701",
    "Apr 16 1702",
    "Apr 08 1703",
    "Mar 23 1704",
    "Apr 12 1705",
    "Apr 04 1706",
    "Apr 24 1707",
    "Apr 08 1708",
    "Mar 31 1709",
    "Apr 20 1710",
    "Apr 05 1711",
    "Mar 27 1712",
    "Apr 16 1713",
    "Apr 01 1714",
    "Apr 21 1715",
    "Apr 12 1716",
    "Mar 28 1717",
    "Apr 17 1718",
    "Apr 09 1719",
    "Mar 31 1720",
    "Apr 13 1721",
    "Apr 05 1722",
    "Mar 28 1723",
    "Apr 16 1724",
    "Apr 01 1725",
    "Apr 21 1726",
    "Apr 13 1727",
    "Mar 28 1728",
    "Apr 17 1729",
    "Apr 09 1730",
    "Mar 25 1731",
    "Apr 13 1732",
    "Apr 05 1733",
    "Apr 25 1734",
    "Apr 10 1735",
    "Apr 01 1736",
    "Apr 21 1737",
    "Apr 06 1738",
    "Mar 29 1739",
    "Apr 17 1740",
    "Apr 02 1741",
    "Mar 25 1742",
    "Apr 14 1743",
    "Apr 05 1744",
    "Apr 18 1745",
    "Apr 10 1746",
    "Apr 02 1747",
    "Apr 14 1748",
    "Apr 06 1749",
    "Mar 29 1750",
    "Apr 11 1751",
    "Apr 02 1752",
    "Apr 22 1753",
    "Apr 14 1754",
    "Mar 30 1755",
    "Apr 18 1756",
    "Apr 10 1757",
    "Mar 26 1758",
    "Apr 15 1759",
    "Apr 06 1760",
    "Mar 22 1761",
    "Apr 11 1762",
    "Apr 03 1763",
    "Apr 22 1764",
    "Apr 07 1765",
    "Mar 30 1766",
    "Apr 19 1767",
    "Apr 03 1768",
    "Mar 26 1769",
    "Apr 15 1770",
    "Mar 31 1771",
    "Apr 19 1772",
    "Apr 11 1773",
    "Apr 03 1774",
    "Apr 16 1775",
    "Apr 07 1776",
    "Mar 30 1777",
    "Apr 19 1778",
    "Apr 04 1779",
    "Mar 26 1780",
    "Apr 15 1781",
    "Mar 31 1782",
    "Apr 20 1783",
    "Apr 11 1784",
    "Mar 27 1785",
    "Apr 16 1786",
    "Apr 08 1787",
    "Mar 23 1788",
    "Apr 12 1789",
    "Apr 04 1790",
    "Apr 24 1791",
    "Apr 08 1792",
    "Mar 31 1793",
    "Apr 20 1794",
    "Apr 05 1795",
    "Mar 27 1796",
    "Apr 16 1797",
    "Apr 08 1798",
    "Mar 24 1799",
    "Apr 13 1800",
    "Apr 05 1801",
    "Apr 18 1802",
    "Apr 10 1803",
    "Apr 01 1804",
    "Apr 14 1805",
    "Apr 06 1806",
    "Mar 29 1807",
    "Apr 17 1808",
    "Apr 02 1809",
    "Apr 22 1810",
    "Apr 14 1811",
    "Mar 29 1812",
    "Apr 18 1813",
    "Apr 10 1814",
    "Mar 26 1815",
    "Apr 14 1816",
    "Apr 06 1817",
    "Mar 22 1818",
    "Apr 11 1819",
    "Apr 02 1820",
    "Apr 22 1821",
    "Apr 07 1822",
    "Mar 30 1823",
    "Apr 18 1824",
    "Apr 03 1825",
    "Mar 26 1826",
    "Apr 15 1827",
    "Apr 06 1828",
    "Apr 19 1829",
    "Apr 11 1830",
    "Apr 03 1831",
    "Apr 22 1832",
    "Apr 07 1833",
    "Mar 30 1834",
    "Apr 19 1835",
    "Apr 03 1836",
    "Mar 26 1837",
    "Apr 15 1838",
    "Mar 31 1839",
    "Apr 19 1840",
    "Apr 11 1841",
    "Mar 27 1842",
    "Apr 16 1843",
    "Apr 07 1844",
    "Mar 23 1845",
    "Apr 12 1846",
    "Apr 04 1847",
    "Apr 23 1848",
    "Apr 08 1849",
    "Mar 31 1850",
    "Apr 20 1851",
    "Apr 11 1852",
    "Mar 27 1853",
    "Apr 16 1854",
    "Apr 08 1855",
    "Mar 23 1856",
    "Apr 12 1857",
    "Apr 04 1858",
    "Apr 24 1859",
    "Apr 08 1860",
    "Mar 31 1861",
    "Apr 20 1862",
    "Apr 05 1863",
    "Mar 27 1864",
    "Apr 16 1865",
    "Apr 01 1866",
    "Apr 21 1867",
    "Apr 12 1868",
    "Mar 28 1869",
    "Apr 17 1870",
    "Apr 09 1871",
    "Mar 31 1872",
    "Apr 13 1873",
    "Apr 05 1874",
    "Mar 28 1875",
    "Apr 16 1876",
    "Apr 01 1877",
    "Apr 21 1878",
    "Apr 13 1879",
    "Mar 28 1880",
    "Apr 17 1881",
    "Apr 09 1882",
    "Mar 25 1883",
    "Apr 13 1884",
    "Apr 05 1885",
    "Apr 25 1886",
    "Apr 10 1887",
    "Apr 01 1888",
    "Apr 21 1889",
    "Apr 06 1890",
    "Mar 29 1891",
    "Apr 17 1892",
    "Apr 02 1893",
    "Mar 25 1894",
    "Apr 14 1895",
    "Apr 05 1896",
    "Apr 18 1897",
    "Apr 10 1898",
    "Apr 02 1899",
    "Apr 15 1900",
    "Apr 07 1901",
    "Mar 30 1902",
    "Apr 12 1903",
    "Apr 03 1904",
    "Apr 23 1905",
    "Apr 15 1906",
    "Mar 31 1907",
    "Apr 19 1908",
    "Apr 11 1909",
    "Mar 27 1910",
    "Apr 16 1911",
    "Apr 07 1912",
    "Mar 23 1913",
    "Apr 12 1914",
    "Apr 04 1915",
    "Apr 23 1916",
    "Apr 08 1917",
    "Mar 31 1918",
    "Apr 20 1919",
    "Apr 04 1920",
    "Mar 27 1921",
    "Apr 16 1922",
    "Apr 01 1923",
    "Apr 20 1924",
    "Apr 12 1925",
    "Apr 04 1926",
    "Apr 17 1927",
    "Apr 08 1928",
    "Mar 31 1929",
    "Apr 20 1930",
    "Apr 05 1931",
    "Mar 27 1932",
    "Apr 16 1933",
    "Apr 01 1934",
    "Apr 21 1935",
    "Apr 12 1936",
    "Mar 28 1937",
    "Apr 17 1938",
    "Apr 09 1939",
    "Mar 24 1940",
    "Apr 13 1941",
    "Apr 05 1942",
    "Apr 25 1943",
    "Apr 09 1944",
    "Apr 01 1945",
    "Apr 21 1946",
    "Apr 06 1947",
    "Mar 28 1948",
    "Apr 17 1949",
    "Apr 09 1950",
    "Mar 25 1951",
    "Apr 13 1952",
    "Apr 05 1953",
    "Apr 18 1954",
    "Apr 10 1955",
    "Apr 01 1956",
    "Apr 21 1957",
    "Apr 06 1958",
    "Mar 29 1959",
    "Apr 17 1960",
    "Apr 02 1961",
    "Apr 22 1962",
    "Apr 14 1963",
    "Mar 29 1964",
    "Apr 18 1965",
    "Apr 10 1966",
    "Mar 26 1967",
    "Apr 14 1968",
    "Apr 06 1969",
    "Mar 29 1970",
    "Apr 11 1971",
    "Apr 02 1972",
    "Apr 22 1973",
    "Apr 14 1974",
    "Mar 30 1975",
    "Apr 18 1976",
    "Apr 10 1977",
    "Mar 26 1978",
    "Apr 15 1979",
    "Apr 06 1980",
    "Apr 19 1981",
    "Apr 11 1982",
    "Apr 03 1983",
    "Apr 22 1984",
    "Apr 07 1985",
    "Mar 30 1986",
    "Apr 19 1987",
    "Apr 03 1988",
    "Mar 26 1989",
    "Apr 15 1990",
    "Mar 31 1991",
    "Apr 19 1992",
    "Apr 11 1993",
    "Apr 03 1994",
    "Apr 16 1995",
    "Apr 07 1996",
    "Mar 30 1997",
    "Apr 12 1998",
    "Apr 04 1999",
    "Apr 23 2000",
    "Apr 15 2001",
    "Mar 31 2002",
    "Apr 20 2003",
    "Apr 11 2004",
    "Mar 27 2005",
    "Apr 16 2006",
    "Apr 08 2007",
    "Mar 23 2008",
    "Apr 12 2009",
    "Apr 04 2010",
    "Apr 24 2011",
    "Apr 08 2012",
    "Mar 31 2013",
    "Apr 20 2014",
    "Apr 05 2015",
    "Mar 27 2016",
    "Apr 16 2017",
    "Apr 01 2018",
    "Apr 21 2019",
    "Apr 12 2020",
    "Apr 04 2021",
    "Apr 17 2022",
    "Apr 09 2023",
    "Mar 31 2024",
    "Apr 20 2025",
    "Apr 05 2026",
    "Mar 28 2027",
    "Apr 16 2028",
    "Apr 01 2029",
    "Apr 21 2030",
    "Apr 13 2031",
    "Mar 28 2032",
    "Apr 17 2033",
    "Apr 09 2034",
    "Mar 25 2035",
    "Apr 13 2036",
    "Apr 05 2037",
    "Apr 25 2038",
    "Apr 10 2039",
    "Apr 01 2040",
    "Apr 21 2041",
    "Apr 06 2042",
    "Mar 29 2043",
    "Apr 17 2044",
    "Apr 09 2045",
    "Mar 25 2046",
    "Apr 14 2047",
    "Apr 05 2048",
    "Apr 18 2049",
    "Apr 10 2050",
    "Apr 02 2051",
    "Apr 21 2052",
    "Apr 06 2053",
    "Mar 29 2054",
    "Apr 18 2055",
    "Apr 02 2056",
    "Apr 22 2057",
    "Apr 14 2058",
    "Mar 30 2059",
    "Apr 18 2060",
    "Apr 10 2061",
    "Mar 26 2062",
    "Apr 15 2063",
    "Apr 06 2064",
    "Mar 29 2065",
    "Apr 11 2066",
    "Apr 03 2067",
    "Apr 22 2068",
    "Apr 14 2069",
    "Mar 30 2070",
    "Apr 19 2071",
    "Apr 10 2072",
    "Mar 26 2073",
    "Apr 15 2074",
    "Apr 07 2075",
    "Apr 19 2076",
    "Apr 11 2077",
    "Apr 03 2078",
    "Apr 23 2079",
    "Apr 07 2080",
    "Mar 30 2081",
    "Apr 19 2082",
    "Apr 04 2083",
    "Mar 26 2084",
    "Apr 15 2085",
    "Mar 31 2086",
    "Apr 20 2087",
    "Apr 11 2088",
    "Apr 03 2089",
    "Apr 16 2090",
    "Apr 08 2091",
    "Mar 30 2092",
    "Apr 12 2093",
    "Apr 04 2094",
    "Apr 24 2095",
    "Apr 15 2096",
    "Mar 31 2097",
    "Apr 20 2098",
    "Apr 12 2099",
    "Mar 28 2100",
    "Apr 17 2101",
    "Apr 09 2102",
    "Mar 25 2103",
    "Apr 13 2104",
    "Apr 05 2105",
    "Apr 18 2106",
    "Apr 10 2107",
    "Apr 01 2108",
    "Apr 21 2109",
    "Apr 06 2110",
    "Mar 29 2111",
    "Apr 17 2112",
    "Apr 02 2113",
    "Apr 22 2114",
    "Apr 14 2115",
    "Mar 29 2116",
    "Apr 18 2117",
    "Apr 10 2118",
    "Mar 26 2119",
    "Apr 14 2120",
    "Apr 06 2121",
    "Mar 29 2122",
    "Apr 11 2123",
    "Apr 02 2124",
    "Apr 22 2125",
    "Apr 14 2126",
    "Mar 30 2127",
    "Apr 18 2128",
    "Apr 10 2129",
    "Mar 26 2130",
    "Apr 15 2131",
    "Apr 06 2132",
    "Apr 19 2133",
    "Apr 11 2134",
    "Apr 03 2135",
    "Apr 22 2136",
    "Apr 07 2137",
    "Mar 30 2138",
    "Apr 19 2139",
    "Apr 03 2140",
    "Mar 26 2141",
    "Apr 15 2142",
    "Mar 31 2143",
    "Apr 19 2144",
    "Apr 11 2145",
    "Apr 03 2146",
    "Apr 16 2147",
    "Apr 07 2148",
    "Mar 30 2149",
    "Apr 12 2150",
    "Apr 04 2151",
    "Apr 23 2152",
    "Apr 15 2153",
    "Mar 31 2154",
    "Apr 20 2155",
    "Apr 11 2156",
    "Mar 27 2157",
    "Apr 16 2158",
    "Apr 08 2159",
    "Mar 23 2160",
    "Apr 12 2161",
    "Apr 04 2162",
    "Apr 24 2163",
    "Apr 08 2164",
    "Mar 31 2165",
    "Apr 20 2166",
    "Apr 05 2167",
    "Mar 27 2168",
    "Apr 16 2169",
    "Apr 01 2170",
    "Apr 21 2171",
    "Apr 12 2172",
    "Apr 04 2173",
    "Apr 17 2174",
    "Apr 09 2175",
    "Mar 31 2176",
    "Apr 20 2177",
    "Apr 05 2178",
    "Mar 28 2179",
    "Apr 16 2180",
    "Apr 01 2181",
    "Apr 21 2182",
    "Apr 13 2183",
    "Mar 28 2184",
    "Apr 17 2185",
    "Apr 09 2186",
    "Mar 25 2187",
    "Apr 13 2188",
    "Apr 05 2189",
    "Apr 25 2190",
    "Apr 10 2191",
    "Apr 01 2192",
    "Apr 21 2193",
    "Apr 06 2194",
    "Mar 29 2195",
    "Apr 17 2196",
    "Apr 09 2197",
    "Mar 25 2198",
    "Apr 14 2199",
    "Apr 06 2200",
    "Apr 19 2201",
    "Apr 11 2202",
    "Apr 03 2203",
    "Apr 22 2204",
    "Apr 07 2205",
    "Mar 30 2206",
    "Apr 19 2207",
    "Apr 03 2208",
    "Mar 26 2209",
    "Apr 15 2210",
    "Mar 31 2211",
    "Apr 19 2212",
    "Apr 11 2213",
    "Mar 27 2214",
    "Apr 16 2215",
    "Apr 07 2216",
    "Mar 30 2217",
    "Apr 12 2218",
    "Apr 04 2219",
    "Apr 23 2220",
    "Apr 15 2221",
    "Mar 31 2222",
    "Apr 20 2223",
    "Apr 11 2224",
    "Mar 27 2225",
    "Apr 16 2226",
    "Apr 08 2227",
    "Mar 23 2228",
    "Apr 12 2229",
    "Apr 04 2230",
    "Apr 24 2231",
    "Apr 08 2232",
    "Mar 31 2233",
    "Apr 20 2234",
    "Apr 05 2235",
    "Mar 27 2236",
    "Apr 16 2237",
    "Apr 01 2238",
    "Apr 21 2239",
    "Apr 12 2240",
    "Apr 04 2241",
    "Apr 17 2242",
    "Apr 09 2243",
    "Mar 31 2244",
    "Apr 13 2245",
    "Apr 05 2246",
    "Mar 28 2247",
    "Apr 16 2248",
    "Apr 01 2249",
    "Apr 21 2250",
    "Apr 13 2251",
    "Mar 28 2252",
    "Apr 17 2253",
    "Apr 09 2254",
    "Mar 25 2255",
    "Apr 13 2256",
    "Apr 05 2257",
    "Apr 25 2258",
    "Apr 10 2259",
    "Apr 01 2260",
    "Apr 21 2261",
    "Apr 06 2262",
    "Mar 29 2263",
    "Apr 17 2264",
    "Apr 02 2265",
    "Mar 25 2266",
    "Apr 14 2267",
    "Apr 05 2268",
    "Apr 18 2269",
    "Apr 10 2270",
    "Apr 02 2271",
    "Apr 21 2272",
    "Apr 06 2273",
    "Mar 29 2274",
    "Apr 18 2275",
    "Apr 02 2276",
    "Apr 22 2277",
    "Apr 14 2278",
    "Mar 30 2279",
    "Apr 18 2280",
    "Apr 10 2281",
    "Mar 26 2282",
    "Apr 15 2283",
    "Apr 06 2284",
    "Mar 22 2285",
    "Apr 11 2286",
    "Apr 03 2287",
    "Apr 22 2288",
    "Apr 07 2289",
    "Mar 30 2290",
    "Apr 19 2291",
    "Apr 10 2292",
    "Mar 26 2293",
    "Apr 15 2294",
    "Apr 07 2295",
    "Apr 19 2296",
    "Apr 11 2297",
    "Apr 03 2298",
    "Apr 16 2299"
].map(x => dayjs(x));

test("All dates", () => {
    for (const date of allDates) {
        const result = calculateEaster(date.year());
        expect(result.isSame(date)).toBe(true);
    }
});