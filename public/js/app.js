
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
            
        }
    ]


ReactDOM.render(
    <Quiz books={['The Lord of the Rinds', 'The Great Gutsby']} />, document.getElementById('app')
);