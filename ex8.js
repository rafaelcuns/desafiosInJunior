const booksByCategory = [ // Dados populados para teste, estão incompletos
    {
        category: "Romance",
        books: [
                {
                title: "O Sol Também é Uma Estrela",
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

function countBooksInCategory(livros) {
    let contagem = {}
    
    livros.forEach(categoria => {
        contagem[categoria.category] = categoria.books.length
    })
    
    return contagem
}