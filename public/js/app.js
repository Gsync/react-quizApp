
    var Quiz = React.createClass({
        propTypes: {
            data: React.PropTypes.array.isRequired
        },

        getInitialState: function () {
            return this.props.data.selectGame();
        },

        render: function () {
            return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <img src={this.state.author.imageUrl} className="authorimage col-md-3" />
                    </div>
                    <div className="col-md-7">
                        {this.state.books.map(function (b) {
                            return <Book title={b} />;
                        }, this)}
                    </div>
                    <div className="col-md-1">
                    
                    </div>
                </div>
            </div>
            );
        }
    });

    var Book = React.createClass({
        propTypes: {
            title: React.PropTypes.string.isRequired
        },
        render: function () {
            return <div className="answer"><h4>{this.props.title}</h4></div>;
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

    data.selectGame = function () {
        var books = _.shuffle(this.reduce(function (p, c, i) {
            return p.concat(c.books);
        }, [])).slice(0,4);

        var answer = books[_.random(books.length-1)];

        return {
            books: books,
            author: _.find(this, function(author) {
                return author.books.some(function (title) {
                    return title === answer;
                });
            })
        };
    };

ReactDOM.render(
    <Quiz data={data} />, document.getElementById('app')
);