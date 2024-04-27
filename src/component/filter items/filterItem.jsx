import "./filterItem.css"
import arrowLeft from "../../assets/arrow-left.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { productDataAction } from "../../store/store"
export default function FilterItem({ item }) {
    const dispatch = useDispatch()
    const [arrowDown, setArrowDown] = useState(true)
    const [selectItem, setSelectItem] = useState([{ name: 'Men', selected: false }, { name: 'Women', selected: false }, { name: 'Baby & Kids', selected: false }])

    const unselectHandler = () => {
        setSelectItem([{ name: 'Men', selected: false }, { name: 'Women', selected: false }, { name: 'Baby & Kids', selected: false }]);
        const getAllCategories = async () => {
            const { data } = await axios.get("https://fakestoreapi.com/products")
            dispatch(productDataAction.updateData(data))
        }
        getAllCategories();
    }

    const [selectedArr, setSelectedArr] = useState([])

    useEffect(() => {
        const newselectedArr = selectItem.filter((item) => item.selected == true)
        setSelectedArr(newselectedArr)
    }, [selectItem])

    useEffect(() => {
        const getDataByCategory = async () => {
            const newProductData = [];
            // if(selectedArr.length==0){
            //     const {data} = await axios.get("https://fakestoreapi.com/products")
            //     newProductData.push(...data)
            // }
            // else{
            for (let i = 0; i < selectedArr.length; i++) {
                if (selectedArr[i].name == 'Men') {
                    try {
                        const { data } = await axios.get("https://fakestoreapi.com/products/category/men's clothing");
                        // console.log('men',data);
                        newProductData.push(...data)
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                }
                else if (selectedArr[i].name == 'Women') {
                    try {
                        const { data } = await axios.get("https://fakestoreapi.com/products/category/women's clothing");
                        // console.log("woment data...",data);
                        newProductData.push(...data)
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                }
            }
            // }      
            if (newProductData.length != 0) {
                dispatch(productDataAction.updateData(newProductData))
            }
        }
        getDataByCategory()

    }, [selectedArr])


    const onChangeHandler = (elm, idx) => {
        if (selectItem[idx].selected) {
            let newArr = [...selectItem]
            newArr[idx] = { ...newArr[idx], ...{ selected: false } }
            setSelectItem(newArr)
        }
        else {
            let newArr = [...selectItem]
            newArr[idx] = { ...newArr[idx], ...{ selected: true } }
            setSelectItem(newArr)
        }
    }

    const arrowClickHandler = () => {
        setArrowDown((state) => !state)
    }

    return <div className="row" >
        <div className="row-top">
            <span>{item.toUpperCase()}</span>
            {
                arrowDown ? <img className="arrow-down" src={arrowLeft} alt="icon" onClick={arrowClickHandler} /> :
                    <img className="arrow-up" src={arrowLeft} alt="icon" onClick={arrowClickHandler} />
            }
        </div>
        <div className="row-bottom">
            <span>All</span>
            {
                !arrowDown ? <div className="row-select">
                    <span onClick={unselectHandler}>Unselect all</span>
                    {
                        selectItem.map((elm, idx) => <div className="checkbox" key={idx}>
                            <input onChange={() => { onChangeHandler(elm, idx) }} checked={elm.selected} type="checkbox" />
                            <span>{elm.name}</span>


                        </div>)
                    }
                </div> : null
            }

        </div>
    </div>
}