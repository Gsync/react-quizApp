
    var Quiz = React.createClass({
        propTypes: {
            books: React.PropTypes.array.isRequired
        },
        render: function () {
            return <div>
                {this.props.books.map(function(b) {
                    return <Book title={b} />
                })}
            </div>;
        }
    });

    var Book = React.createClass({
        propTypes: {
            title: React.PropTypes.string.isRequired
        },
        render: function () {
            return <div><h4>{this.props.title}</h4></div>;
        }
    });

    var data = [
        {
            name: 'Mark Twain',
            imageUrl: 'images/authors/mark.jpg',
            books: ['The Adventures of Huckleberry Finn']
        },
        {
            name: 'Joseph Conrad',
            imageUrl: 'images/authors/joseph.png',
            books: ['Heart of Darkness']
        },
        {
            name: 'J. K. Rowling',
            imageUrl: 'images/authors/rowling.jpg',
            books: ['Harry Potter']
        },
        {
            name: 'Stephen King',
            imageUrl: 'images/authors/stephen.jpg',
            books: ['The Shining', 'IT']
        },
        {
            name: 'Charles Dickens',
            imageUrl: 'images/authors/dickens.jpg',
            books: ['David Copperfield', 'A Tale of two Cities']
        },
        {
            name: 'Willium Shakespeare',
            imageUrl: 'images/authors/shakespeare.jpg',
            books: ['Romeo and Juliet', 'Hamlet', 'Macbeth']
        }
    ];


ReactDOM.render(
    <Quiz books={['The Lord of the Rinds', 'The Great Gutsby']} />, document.getElementById('app')
);