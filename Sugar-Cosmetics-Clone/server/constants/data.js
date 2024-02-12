// Data.js


const products = [
    { 
        id: 'product1',
        url: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F521737983-parent-1st-card.jpg%3Fv%3D1690905085&w=256&q=75', 
        detailUrl: 'https://cdn.shopify.com/s/files/1/0906/2558/files/511656764-1_b1bfbb6a-0752-4660-af0a-89ea7ed78c94.jpg?v=1689349811',
        title: {
            shortTitle: 'Maximeyes Drama Magnetic Lashes & Eyeliner - 01 Genuine'
        }, 
        shades : '2 shades',
        price: {
            mrp: 699,
            cost: 664,
            discount: '5%'
        },
        quantity: 1,
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: '3 shades' 
    },
    { 
        id: 'product2',
        url: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fa_00b52826-78d8-4da0-aba1-fbcbfb39dc33.jpg%3Fv%3D1688228539&w=256&q=75', 
        detailUrl: 'https://cdn.shopify.com/s/files/1/0906/2558/files/511656764-1_b1bfbb6a-0752-4660-af0a-89ea7ed78c94.jpg?v=1689349811',
        title: {
            shortTitle: 'Maximeyes Drama Magnetic Lashes & Eyeliner - 01 Genuine'
        }, 
        shades : '2 shades',
        price: {
            mrp: 1197,
            cost: 799,
            discount: '33%'
        },
        quantity: 1,
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: '2 shades' 
    },
    { 
        id: 'product3',
        url: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent1stcard_1_7aa4b700-2b5f-4212-8b56-86889ab8a390.jpg%3Fv%3D1689262362&w=256&q=75', 
        detailUrl: 'https://cdn.shopify.com/s/files/1/0906/2558/files/511656764-1_b1bfbb6a-0752-4660-af0a-89ea7ed78c94.jpg?v=1689349811',
        title: {
            shortTitle: 'Maximeyes Drama Magnetic Lashes & Eyeliner - 01 Genuine'
        }, 
        shades : '2 shades',
        price: {
            mrp: 849,
            cost: 807,
            discount: '5%'
        },
        quantity: 1,
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: '16 shades' 
    },
    { 
        id: 'product4',
        url: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg%3Fv%3D1657123108&w=256&q=75', 
        detailUrl: 'https://cdn.shopify.com/s/files/1/0906/2558/files/511656764-1_b1bfbb6a-0752-4660-af0a-89ea7ed78c94.jpg?v=1689349811',
        title: {
            shortTitle: 'Maximeyes Drama Magnetic Lashes & Eyeliner - 01 Genuine'
        }, 
        shades : '2 shades',
        price: {
            mrp: 999,
            cost: 799,
            discount: '20%'
        },
        quantity: 1,
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: '3 shades' 
    },
    { 
        id: 'product5',
        url: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FWBG1_09f0cf83-792a-4185-8882-5e5e6909a459.jpg%3Fv%3D1657814596&w=256&q=75', 
        detailUrl: 'https://cdn.shopify.com/s/files/1/0906/2558/files/511656764-1_b1bfbb6a-0752-4660-af0a-89ea7ed78c94.jpg?v=1689349811',
        title: {
            shortTitle: 'Maximeyes Drama Magnetic Lashes & Eyeliner - 01 Genuine'
        }, 
        shades : '2 shades',
        price: {
            mrp: 699,
            cost: 664,
            discount: '5%'
        },
        quantity: 1,
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'New deals' 
    },
    { 
        id: 'product6',
        url: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FKohl-Of-Honour-Intense-Kajal-PDP-images-Parent-page.jpg%3Fv%3D1679673305&w=256&q=75', 
        detailUrl: 'https://cdn.shopify.com/s/files/1/0906/2558/files/511656764-1_b1bfbb6a-0752-4660-af0a-89ea7ed78c94.jpg?v=1689349811',
        title: {
            shortTitle: 'Maximeyes Drama Magnetic Lashes & Eyeliner - 01 Genuine'
        }, 
        shades : '2 shades',
        price: {
            mrp: 249,
            cost: 209,
            discount: '16%'
        },
        quantity: 1,
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: '4 shades' 
    },
    { 
        id: 'product7',
        url: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FParent-Page_ac0201bb-8f51-447c-b6e0-4404786076a2.jpg%3Fv%3D1680364145&w=256&q=75', 
        detailUrl: 'https://cdn.shopify.com/s/files/1/0906/2558/files/511656764-1_b1bfbb6a-0752-4660-af0a-89ea7ed78c94.jpg?v=1689349811',
        title: {
            shortTitle: 'Maximeyes Drama Magnetic Lashes & Eyeliner - 01 Genuine'
        }, 
        shades : '2 shades',
        price: {
            mrp: 799,
            cost: 671,
            discount: '16%'
        },
        quantity: 1,
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: '4 shades' 
    },
]



module.exports={products}