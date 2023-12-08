import axios from "axios";

export const setDataBlog = (page) => (dispatch) => {
        axios.get(`http://localhost:3000/v1/blog/posts?page=${page}&perPage=2`)
        .then(result => {
                
                const responseAPI = result.data;
                // console.log('Data API :', responseAPI);

                // setDataBlog(responseAPI.data); 
                dispatch({type:'UPDATE_DATA_BLOG',payload: responseAPI.data})
                dispatch({
                        type:'UPDATE_PAGE',
                        payload: {
                                currentPage: responseAPI.current_page,
                                totalPage: 
                                Math.ceil(parseInt(responseAPI.total_data) / parseInt(responseAPI.per_page))
                        }
                })
        })
        .catch(err => {
                console.log('Error :', err);
        })
}
