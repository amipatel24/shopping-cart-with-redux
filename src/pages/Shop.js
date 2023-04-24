import React, { useEffect, useState } from "react";
import './Shop.css'
import { useDispatch, useSelector } from "react-redux";
import { addToProductCart } from '../Redux/Action/CartAction'
import { getUsers } from "../Redux/Action/GetUser";
import { ProductCard } from '../components/index'
import { Container, Row } from "react-bootstrap";
import ReactPaginate from 'react-paginate';
import LoadingSpinner from "../components/LoadingSpinner";
import { getProduct } from '../Redux/Action/GetProduct';

function Shop() {
    
    const products = useSelector((state) => state?.user?.products)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    let loading = useSelector((state) => state?.user?.loading)
    let perPage = useSelector((state) => state?.user?.perPage)
    let pageCount = useSelector((state) => state?.user?.totalPages)

   

    let [hidden, setHidden] = useState({})

    useEffect(() => {
        const offset = (currentPage - 1) * perPage
        console.log("offset", offset);
        // setHidden({})
        dispatch(getUsers(
            { per_page: perPage, offset }
        ))

    }, [currentPage])
   

    const handleclick = (data) => {
        console.log("handleclick",data);
        if (!hidden[data.id]) {
            setHidden({ ...hidden, [data.id]: !hidden[data.id] })
        }
         dispatch(addToProductCart({
            data,
            quantity: 1
        }))
    }
  

    // for pagination
    const handlestate = (e) => {
        // window.location.reload(false)
        console.log("pageId => ", e.selected + 1);
        setCurrentPage(e.selected + 1)
    }

    console.log("Hidden", hidden);

    return (
        <div className="text-center">
            <h2 className="mt-4">New In</h2>
            <Container>
                <Row >
                    <div className="d-flex flex-wrap justify-content-center ">
                        {loading ? <LoadingSpinner /> : 
                        <div>
                    <div className="d-flex flex-wrap justify-content-center ">
                        
                        {products.map((info, index) => (
                            <div key={index}>
                                <ProductCard data={info} showViewCart={!!hidden[info.id]} handleclick={handleclick} />
                            </div>
                        ))}
                     </div>
                            
                        <div className="paginationContainer d-flex justify-content-center">
                            <ReactPaginate
                                breakLabel="..."

                                nextLabel="next >"
                                breakClassName={'page-item'}
                                breakLinkClassName={'page-link'}
                                containerClassName={'pagination'}
                                pageClassName={'page-item'}
                                pageLinkClassName={'page-link'}
                                previousClassName={'page-item'}
                                previousLinkClassName={'page-link'}
                                nextClassName={'page-item'}
                                nextLinkClassName={'page-link'}
                                activeClassName={'active'}
                                onPageChange={handlestate}
                                pageRangeDisplayed={perPage}
                                pageCount={pageCount}
                                previousLabel="< previous"
                                renderOnZeroPageCount={true}
                            />
                        </div>
                        </div>
                        }
                    </div>
                </Row>
            </Container>


        </div>
    )
}
export default Shop;

