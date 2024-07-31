import React, {useState} from 'react';
import {Container} from "@mui/material";
import TabsComponent from "../../components/Tabs";
import One from "../../components/One";
import Two from "../../components/Two";
import OneComponent from "../../components/One";
import TwoComponent from "../../components/Two";
import ThreeComponent from "../../components/Three";
import FourComponent from "../../components/Four";
import FiveComponent from "../../components/Five";
import {SwiperComponent} from "../../components/Swiper";


const VALUES = {
    oneItem: 'One',
    twoItem: 'Two',
    threeItem:'Three',
    fourItem:'Four',
    fiveItem: 'Five'
}

const GetCategories = ({value}) => {
    switch (value) {
        case  VALUES.oneItem: {
            return <OneComponent/>
        }case  VALUES.twoItem: {
            return <TwoComponent/>
        }case  VALUES.threeItem: {
            return <ThreeComponent/>
        }case  VALUES.fourItem: {
            return <FourComponent/>
        }case  VALUES.fiveItem: {
            return <FiveComponent/>
        }
            default: return <></>
    }
}
const Main = () => {

    const categoriesSelect = [
        {value: VALUES.oneItem, label: 'One'},
        {value: VALUES.twoItem, label: 'Two'},
        {value: VALUES.threeItem, label: 'Three'},
        {value: VALUES.fourItem, label: 'Four'},
        {value: VALUES.fiveItem, label: 'Five'},
    ]

    const [value, setValue] = useState(categoriesSelect[0].value)

    const swiperImages = [
        {url: "https://swiperjs.com/demos/images/nature-1.jpg"},
        {url: "https://swiperjs.com/demos/images/nature-2.jpg"},
        {url: "https://swiperjs.com/demos/images/nature-3.jpg"},
        {url: "https://swiperjs.com/demos/images/nature-4.jpg"},
        {url: "https://swiperjs.com/demos/images/nature-5.jpg"},
        {url: "https://swiperjs.com/demos/images/nature-6.jpg"},

    ]

    return (
        <Container>
            <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue}/>
            <GetCategories value={value}/>
            {/*<SwiperComponent swiperImages={swiperImages}/>*/}
        </Container>
    );
};

export default Main;