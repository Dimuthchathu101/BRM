// all images imported from images directory


const products = [
  {
    id: "01",
    title: "Raymond Black",
    price: 24.0,
    image01: "https://pvh-brands.imgix.net/catalog/product/media/VSJ541_RCCG_FL-TP-F1_003.jpg?w=713&h=950&crop=edges&fit=crop&auto=compress&auto=format",
    image02: "https://pvh-brands.imgix.net/catalog/product/media/VSJ541_RCCG_FL-TP-F1_003.jpg?w=713&h=950&crop=edges&fit=crop&auto=compress&auto=format",
    image03: "https://pvh-brands.imgix.net/catalog/product/media/VSJ541_RCCG_FL-TP-F1_003.jpg?w=713&h=950&crop=edges&fit=crop&auto=compress&auto=format",
    category: "Raymond",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "02",
    title: "VanHeusen Jacket ",
    price: 115.0,
    image01: "https://images.jackjones.com/12232113/4182388/001/jackjones-jprsolarisslimfitblazer-liath.jpg?v=1cdbe43f44080b0c0956d28127d07691&format=webp&width=1280&quality=90&key=25-0-3",
    image02: "https://images.jackjones.com/12232113/4182388/001/jackjones-jprsolarisslimfitblazer-liath.jpg?v=1cdbe43f44080b0c0956d28127d07691&format=webp&width=1280&quality=90&key=25-0-3",
    image03: "https://images.jackjones.com/12232113/4182388/001/jackjones-jprsolarisslimfitblazer-liath.jpg?v=1cdbe43f44080b0c0956d28127d07691&format=webp&width=1280&quality=90&key=25-0-3",
    category: "VanHeusen",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "Vanheusan New",
    price: 110.0,
    image01: "https://images.jackjones.com/12141107/2842494/001/jackjones-jprsolarissuperslimfitblazer-blue.jpg?v=fbbd90f62992f6f32df57962f6067b3d&format=webp&width=1280&quality=90&key=25-0-3",
    image02: "https://images.jackjones.com/12141107/2842494/001/jackjones-jprsolarissuperslimfitblazer-blue.jpg?v=fbbd90f62992f6f32df57962f6067b3d&format=webp&width=1280&quality=90&key=25-0-3",
    image03: "https://images.jackjones.com/12141107/2842494/001/jackjones-jprsolarissuperslimfitblazer-blue.jpg?v=fbbd90f62992f6f32df57962f6067b3d&format=webp&width=1280&quality=90&key=25-0-3",
    category: "VanHeusen",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "VanHeusan Items",
    price: 110.0,
    image01: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnXbnWUHRIkcSaDTlc-nTuHlMs_C_7RotILtLwJkokCGXz3KZqEijoBKNZRQ4jhxCmA8&usqp=CAU1",
    image02: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnXbnWUHRIkcSaDTlc-nTuHlMs_C_7RotILtLwJkokCGXz3KZqEijoBKNZRQ4jhxCmA8&usqp=CAU",
    image03: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnXbnWUHRIkcSaDTlc-nTuHlMs_C_7RotILtLwJkokCGXz3KZqEijoBKNZRQ4jhxCmA8&usqp=CAU",
    category: "VanHeusen",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "05",
    title: "Raymond New",
    price: 24.0,
    image01: "https://m.media-amazon.com/images/I/31plk8z0CvL._SL500_.jpg",
    image02: "https://m.media-amazon.com/images/I/31plk8z0CvL._SL500_.jpg",
    image03: "https://m.media-amazon.com/images/I/31plk8z0CvL._SL500_.jpg",
    category: "Raymond",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "06",
    title: "Raymon Blue",
    price: 24.0,
    image01: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijM-sABQjKsWx-NusLmB1OzKCs-w7a0RB3BU2old2dqz9RVGXXJYIMiU7H2IwlIepusw&usqp=CAU",
    image02: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijM-sABQjKsWx-NusLmB1OzKCs-w7a0RB3BU2old2dqz9RVGXXJYIMiU7H2IwlIepusw&usqp=CAU",
    image03: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijM-sABQjKsWx-NusLmB1OzKCs-w7a0RB3BU2old2dqz9RVGXXJYIMiU7H2IwlIepusw&usqp=CAU",
    category: "Raymond",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "07",
    title: "VanHeusen Jacket Branded",
    price: 115.0,
    image01: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijM-sABQjKsWx-NusLmB1OzKCs-w7a0RB3BU2old2dqz9RVGXXJYIMiU7H2IwlIepusw&usqp=CAU",
    image02: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijM-sABQjKsWx-NusLmB1OzKCs-w7a0RB3BU2old2dqz9RVGXXJYIMiU7H2IwlIepusw&usqp=CAU",
    image03: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijM-sABQjKsWx-NusLmB1OzKCs-w7a0RB3BU2old2dqz9RVGXXJYIMiU7H2IwlIepusw&usqp=CAU",
    category: "VanHeusen",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "VanHeusen New",
    price: 110.0,
    image01: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijM-sABQjKsWx-NusLmB1OzKCs-w7a0RB3BU2old2dqz9RVGXXJYIMiU7H2IwlIepusw&usqp=CAU",
    image02: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijM-sABQjKsWx-NusLmB1OzKCs-w7a0RB3BU2old2dqz9RVGXXJYIMiU7H2IwlIepusw&usqp=CAU",
    image03: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijM-sABQjKsWx-NusLmB1OzKCs-w7a0RB3BU2old2dqz9RVGXXJYIMiU7H2IwlIepusw&usqp=CAU",
    category: "VanHeusen",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    title: "VanHeusen ",
    price: 110.0,
    image01: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijM-sABQjKsWx-NusLmB1OzKCs-w7a0RB3BU2old2dqz9RVGXXJYIMiU7H2IwlIepusw&usqp=CAU",
    image02: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijM-sABQjKsWx-NusLmB1OzKCs-w7a0RB3BU2old2dqz9RVGXXJYIMiU7H2IwlIepusw&usqp=CAU",
    image03: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijM-sABQjKsWx-NusLmB1OzKCs-w7a0RB3BU2old2dqz9RVGXXJYIMiU7H2IwlIepusw&usqp=CAU",
    category: "VanHeusen",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "Classic Raymond",
    price: 24.0,
    image01: "https://tse2.mm.bing.net/th?id=OIP.2B7qpqDjbfRYYIOnTYMB9wHaHa&pid=Api&P=0&h=220",
    image02: "https://tse2.mm.bing.net/th?id=OIP.2B7qpqDjbfRYYIOnTYMB9wHaHa&pid=Api&P=0&h=220",
    image03: "https://tse2.mm.bing.net/th?id=OIP.2B7qpqDjbfRYYIOnTYMB9wHaHa&pid=Api&P=0&h=220",
    category: "Raymond",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "11",
    title: "Peter_England ",
    price: 35.0,
    image01: "https://images.jackjones.com/12141107/2842494/001/jackjones-jprsolarissuperslimfitblazer-blue.jpg?v=fbbd90f62992f6f32df57962f6067b3d&format=webp&width=1280&quality=90&key=25-0-3",
    image02: "https://images.jackjones.com/12141107/2842494/001/jackjones-jprsolarissuperslimfitblazer-blue.jpg?v=fbbd90f62992f6f32df57962f6067b3d&format=webp&width=1280&quality=90&key=25-0-3",
    image03: "https://images.jackjones.com/12141107/2842494/001/jackjones-jprsolarissuperslimfitblazer-blue.jpg?v=fbbd90f62992f6f32df57962f6067b3d&format=webp&width=1280&quality=90&key=25-0-3",
    category: "Peter_England",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "Peter_England New",
    price: 35.0,
    image01: "https://images.jackjones.com/12141107/2842494/001/jackjones-jprsolarissuperslimfitblazer-blue.jpg?v=fbbd90f62992f6f32df57962f6067b3d&format=webp&width=1280&quality=90&key=25-0-3",
    image02: "https://images.jackjones.com/12141107/2842494/001/jackjones-jprsolarissuperslimfitblazer-blue.jpg?v=fbbd90f62992f6f32df57962f6067b3d&format=webp&width=1280&quality=90&key=25-0-3",
    image03: "https://images.jackjones.com/12141107/2842494/001/jackjones-jprsolarissuperslimfitblazer-blue.jpg?v=fbbd90f62992f6f32df57962f6067b3d&format=webp&width=1280&quality=90&key=25-0-33",
    category: "Peter_England",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "13",
    title: "Branded Peter_England ",
    price: 35.0,
    image01: "https://images.jackjones.com/12141107/2842494/001/jackjones-jprsolarissuperslimfitblazer-blue.jpg?v=fbbd90f62992f6f32df57962f6067b3d&format=webp&width=1280&quality=90&key=25-0-3",
    image02: "https://images.jackjones.com/12141107/2842494/001/jackjones-jprsolarissuperslimfitblazer-blue.jpg?v=fbbd90f62992f6f32df57962f6067b3d&format=webp&width=1280&quality=90&key=25-0-3",
    image03: "https://images.jackjones.com/12141107/2842494/001/jackjones-jprsolarissuperslimfitblazer-blue.jpg?v=fbbd90f62992f6f32df57962f6067b3d&format=webp&width=1280&quality=90&key=25-0-3",
    category: "Peter_England",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
];

export default products;
