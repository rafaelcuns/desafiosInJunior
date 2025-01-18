const booksByCategory = [ // Dados populados para teste, estão incompletos
    {
        category: "Romance",
        books: [
                {
                title: "O Sol Também é Uma Estrela",
                author: "Nicola Yoon",
                },
                {
                    title: "O Sol a é Uma Estrela",
                    author: "Nicola Yoon",
                    },
                {
                title: "O Noivo da Minha Melhor Amiga",
                author: "Emily Giffin",
                },
                {
                title: "Orgulho e Preconceito",
                author: "Jane Austen",
                },
        ],
    },
    {
        category: "Fantasia",
        books: [
                    {
            title: "Harry Potter e a Pedra Filosofal",
            author: "J.K. Rowling"
        }]}]

function authors(livros) {
    const autores = new Set()
    
    livros.forEach(categoria => {
        categoria.books.forEach(livro => {
            autores.add(livro.author)
        })
    })
    
    return Array.from(autores)
}
