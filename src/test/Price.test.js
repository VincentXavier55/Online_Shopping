import Price from '../components/Price';
import Header from '../components/header/Header';

it('renders correctly', () => {
    var item = {
        "productId": 147,
        "name": "Shirt - 147",
        "description": "Branded shirt",
        "shoppingDate": "2017-12-11",
        "price": 22,
        "discount": 2,
        "imageUrl": "images/shirt.png"
    };
    const tree = renderer
        // .create(<Price item={item}></Price>)
        .create(<Header />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

// it('renders as an anchor when no page is set', () => {
//     const tree = renderer.create(<Link>Facebook</Link>).toJSON();
//     expect(tree).toMatchSnapshot();
// });

// it('properly escapes quotes', () => {
//     const tree = renderer
//         .create(<Link>{"\"Facebook\" \\'is \\ 'awesome'"}</Link>)
//         .toJSON();
//     expect(tree).toMatchSnapshot();
// });

// it('changes the class when hovered', () => {
//     const component = renderer.create(
//         <Link page="http://www.facebook.com">Facebook</Link>
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();

//     // manually trigger the callback
//     tree.props.onMouseEnter();
//     // re-rendering
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();

//     // manually trigger the callback
//     tree.props.onMouseLeave();
//     // re-rendering
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });