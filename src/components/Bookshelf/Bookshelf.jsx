import { useState } from "react";

const  Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);
      

    const [newBook, setNewBook] = useState ({
        title: '',
        author: '',
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setNewBook({...newBook, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, newBook])
        setNewBook({title:'', author: ''})
    }

    return (               

        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Title:</label>
                    <input type="text" onChange={handleInputChange} name='title' value={newBook.title}/>
                    <label htmlFor="">Author:</label>
                    <input type="text" onChange={handleInputChange} name='author' value={newBook.author}/>
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, index) => (
                    <div key={index} className="bookCard">
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Bookshelf