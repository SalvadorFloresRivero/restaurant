
const dishesGet = (req, res) => {
    res.json({'mje':'Get'})
}

const dishesPost = (req, res) => {
    res.json({'mje':'Post'})
}

const dishesPut = (req, res) => {
    res.json({'mje':'Put'})
}

const dishesDelte = (req, res) => {
    res.json({'mje':'Delete'})
}

module.exports = { dishesGet, dishesPost, dishesPut, dishesDelte }