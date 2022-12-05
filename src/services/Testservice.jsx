import http from "../http-common";

const getAll = () => {
  return http.get("/aSt2");
};


const getProducts = (id) =>
{
    return http.get(`all/products/${id}`)
}

const getProductstest = (keyword , sitename , category ,currentPage ) =>
{
    return http.get(`/product/search/${keyword}/${sitename}/${category}/${currentPage}`)
}


const Testservice = {
  getAll,
  getProducts,
  getProductstest
};

export default Testservice;