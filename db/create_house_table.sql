CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    zip INTEGER,
    img TEXT,
    mortgage DECIMAL,
    rent DECIMAL
);

INSERT INTO houses (
    name,
    address,
    city,
    state,
    zip,
    img,
    mortgage,
    rent
) VALUES (
    'Goondocks HQ',
    '38 GoonDocks Blvd',
    'Astoria',
    'OR',
    1985,
    'https://img.huffingtonpost.com/asset/55d5ed831700006e0056810d.jpeg?cache=md3f11maSu&ops=1910_1000',
    2500,
    3125
 );  

INSERT INTO houses (
    name,
    address,
    city,
    state,
    zip,
    img,
    mortgage,
    rent
) VALUES (
    'Hillard Residence',
    '25 Fruiting Drive',
    'San Francisco',
    'CA',
    1993,
    'https://cdn-images-1.medium.com/max/1200/0*eipmLIa4xVGLxew1.png',
    1400,
    1700
);

INSERT INTO houses (
    name,
    address,
    city,
    state,
    zip,
    img,
    mortgage,
    rent
) VALUES (
    'Tanner House',
    '48 Full Rd',
    'San Francisco',
    'CA',
    1987,
    'https://hoodline.imgix.net/uploads/story/image/25350/Tanner-family-Victorian-1882-Girard-San-Francisco-Full-House.jpg?auto=format',
    2500,
    3125
);