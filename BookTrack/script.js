// ==============================
// BookTrack
// Projeto Final - Curso de JavaScript
// ==============================


// ==============================
// VARIÁVEIS
// ==============================

let biblioteca = []

let indiceEditando = null


// ==============================
// INPUTS
// ==============================

const titulo = document.getElementById('titulo')
const autor = document.getElementById('autor')
const genero = document.getElementById('genero')
const paginas = document.getElementById('paginas')
const status = document.getElementById('status')


// ==============================
// ELEMENTOS DA PÁGINA
// ==============================

const listaLivros = document.getElementById('listaLivros')

const btnAdicionar = document.getElementById('btnAdicionar')

const btnCancelar = document.getElementById('btnCancelar')

const tituloFormulario = document.getElementById('tituloFormulario')

const busca = document.getElementById('busca')


// ==============================
// ESTATÍSTICAS
// ==============================

const totalLivros = document.getElementById('totalLivros')

const livrosLidos = document.getElementById('livrosLidos')

const livrosLendo = document.getElementById('livrosLendo')

const livrosQueroLer = document.getElementById('livrosQueroLer')

const totalPaginas = document.getElementById('totalPaginas')


// ==============================
// EVENTOS
// ==============================

btnAdicionar.addEventListener('click', adicionarOuEditarLivro)

btnCancelar.addEventListener('click', cancelarEdicao)

busca.addEventListener('input', pesquisarLivros)


// ==============================
// CARREGAR LIVROS
// ==============================

carregarLivros()


// ==============================
// FUNÇÃO PARA ADICIONAR OU EDITAR
// ==============================

function adicionarOuEditarLivro() {

    // Verifica se todos os campos foram preenchidos

    if (
        titulo.value.trim() === '' ||
        autor.value.trim() === '' ||
        genero.value.trim() === '' ||
        paginas.value.trim() === ''
    ) {

        alert('Preencha todos os campos!')

        return
    }


    // Cria o objeto livro

    const livro = {

        titulo: titulo.value.trim(),

        autor: autor.value.trim(),

        genero: genero.value.trim(),

        paginas: Number(paginas.value),

        status: status.value

    }


    // Verifica se estamos editando

    if (indiceEditando === null) {

        // Adiciona um novo livro

        biblioteca.push(livro)

    } else {

        // Atualiza o livro existente

        biblioteca[indiceEditando] = livro

    }


    // Salva os livros

    salvarLivros()


    // Mostra os livros

    mostrarLivros()


    // Atualiza as estatísticas

    atualizarEstatisticas()


    // Limpa o formulário

    limparFormulario()

}


// ==============================
// FUNÇÃO PARA MOSTRAR LIVROS
// ==============================

function mostrarLivros(lista = biblioteca) {

    listaLivros.innerHTML = ''


    // Verifica se não existem livros

    if (lista.length === 0) {

        const mensagem = document.createElement('p')

        mensagem.classList.add('mensagem-vazia')

        mensagem.textContent = biblioteca.length === 0
            ? 'Nenhum livro cadastrado.'
            : 'Nenhum livro encontrado.'

        listaLivros.appendChild(mensagem)

        return
    }


    // Percorre os livros

    lista.forEach(function(livro) {

        const indice = biblioteca.indexOf(livro)


        // Cria o card

        const card = document.createElement('div')

        card.classList.add('card-livro')


        // Cria o conteúdo

        card.innerHTML = `

            <h3>📖 ${livro.titulo}</h3>

            <p>
                <strong>Autor:</strong>
                ${livro.autor}
            </p>

            <p>
                <strong>Gênero:</strong>
                ${livro.genero}
            </p>

            <p>
                <strong>Páginas:</strong>
                ${livro.paginas}
            </p>

            <p>
                <strong>Status:</strong>
                <span class="status">
                    ${mostrarStatus(livro.status)}
                </span>
            </p>

            <div class="botoes-livro">

                <button
                    onclick="editarLivro(${indice})"
                >
                    ✏️ Editar
                </button>

                <button
                    class="btn-excluir"
                    onclick="excluirLivro(${indice})"
                >
                    🗑️ Excluir
                </button>

            </div>

        `


        // Adiciona o card à biblioteca

        listaLivros.appendChild(card)

    })

}


// ==============================
// FUNÇÃO PARA MOSTRAR O STATUS
// ==============================

function mostrarStatus(statusLivro) {

    if (statusLivro === 'quero-ler') {

        return 'Quero ler'

    }


    if (statusLivro === 'lendo') {

        return 'Lendo'

    }


    if (statusLivro === 'lido') {

        return 'Lido'

    }


    return statusLivro

}


// ==============================
// FUNÇÃO PARA EDITAR LIVRO
// ==============================

function editarLivro(indice) {

    const livro = biblioteca[indice]


    // Coloca os dados do livro no formulário

    titulo.value = livro.titulo

    autor.value = livro.autor

    genero.value = livro.genero

    paginas.value = livro.paginas

    status.value = livro.status


    // Guarda qual livro está sendo editado

    indiceEditando = indice


    // Muda o título do formulário

    tituloFormulario.textContent = 'Editar Livro'


    // Muda o texto do botão

    btnAdicionar.textContent = 'Salvar Alterações'


    // Mostra o botão cancelar

    btnCancelar.hidden = false


    // Leva a página até o formulário

    document.getElementById('cadastro').scrollIntoView({
        behavior: 'smooth'
    })


    // Coloca o cursor no título

    titulo.focus()

}


// ==============================
// FUNÇÃO PARA CANCELAR EDIÇÃO
// ==============================

function cancelarEdicao() {

    limparFormulario()

}


// ==============================
// FUNÇÃO PARA LIMPAR FORMULÁRIO
// ==============================

function limparFormulario() {

    titulo.value = ''

    autor.value = ''

    genero.value = ''

    paginas.value = ''

    status.value = 'quero-ler'


    // Volta para o modo adicionar

    indiceEditando = null


    tituloFormulario.textContent = 'Adicionar Livro'

    btnAdicionar.textContent = 'Adicionar Livro'

    btnCancelar.hidden = true


    titulo.focus()

}


// ==============================
// FUNÇÃO PARA EXCLUIR LIVRO
// ==============================

function excluirLivro(indice) {

    const livro = biblioteca[indice]


    // Confirma a exclusão

    const confirmar = confirm(
        `Deseja realmente excluir "${livro.titulo}"?`
    )


    if (!confirmar) {

        return

    }


    // Remove o livro

    biblioteca.splice(indice, 1)


    // Salva novamente

    salvarLivros()


    // Atualiza a tela

    mostrarLivros()


    // Atualiza as estatísticas

    atualizarEstatisticas()

}


// ==============================
// FUNÇÃO DE PESQUISA
// ==============================

function pesquisarLivros() {

    const termo = busca.value.toLowerCase().trim()


    const livrosFiltrados = biblioteca.filter(function(livro) {

        return (

            livro.titulo.toLowerCase().includes(termo) ||

            livro.autor.toLowerCase().includes(termo) ||

            livro.genero.toLowerCase().includes(termo)

        )

    })


    mostrarLivros(livrosFiltrados)

}


// ==============================
// FUNÇÃO DAS ESTATÍSTICAS
// ==============================

function atualizarEstatisticas() {

    // Total de livros

    totalLivros.textContent = biblioteca.length


    // Livros lidos

    const quantidadeLidos = biblioteca.filter(function(livro) {

        return livro.status === 'lido'

    }).length


    livrosLidos.textContent = quantidadeLidos


    // Livros lendo

    const quantidadeLendo = biblioteca.filter(function(livro) {

        return livro.status === 'lendo'

    }).length


    livrosLendo.textContent = quantidadeLendo


    // Livros quero ler

    const quantidadeQueroLer = biblioteca.filter(function(livro) {

        return livro.status === 'quero-ler'

    }).length


    livrosQueroLer.textContent = quantidadeQueroLer


    // Total de páginas

    const paginasTotais = biblioteca.reduce(function(total, livro) {

        return total + livro.paginas

    }, 0)


    totalPaginas.textContent = paginasTotais

}


// ==============================
// LOCALSTORAGE
// ==============================

function salvarLivros() {

    localStorage.setItem(
        'booktrackBiblioteca',
        JSON.stringify(biblioteca)
    )

}


// ==============================
// CARREGAR LIVROS DO LOCALSTORAGE
// ==============================

function carregarLivros() {

    const livrosSalvos = localStorage.getItem(
        'booktrackBiblioteca'
    )


    if (livrosSalvos) {

        biblioteca = JSON.parse(livrosSalvos)

    }


    mostrarLivros()

    atualizarEstatisticas()

}