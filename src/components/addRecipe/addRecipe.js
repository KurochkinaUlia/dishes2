import React from "react";
import './addRecipe.css';
import Input from "../personalСomponents/input/input";
import Selected from "../personalСomponents/selected/selected";
import Button from "../personalСomponents/button/button";
import {NavLink} from "react-router-dom";
import AddPhotos from "../personalСomponents/addPhotos/addPhotos";

const AddRecipe = () => {
    return (
        <div className='page-wrapper'>
            <h1>Добавить рецепт</h1>
            <div className='complete-form'>Заполните форму</div>
            <div className='name-recipe'>Название рецепта:</div>
            <div className='input-add'>
                <Input placeholder={'блюдо называется...'}/>
            </div>
            <div className='common-details'>
                <div>
                    <div className='short-description'>Краткое описание:</div>
                    <div className='ind-data'>
                        <textarea className='textarea-add-recipe'></textarea>
                    </div>

                    <div className='short-description'>Ингредиенты:</div>
                    <div className='ind2-data'>
                        <textarea className='textarea-add-recipe'></textarea>
                    </div>
                </div>
                <div>
                    <Selected/>
                    <div className='short-description'>Приготовление:</div>
                    <div className='ind3-data'>
                        <textarea className='textarea-add-recipe'></textarea>
                    </div>
                </div>
            </div>

            <AddPhotos/>


            <div className='add-styles'>
                <NavLink to='/save'>
                    <Button text={'СОХРАНИТЬ'}/>
                </NavLink>
            </div>


        </div>
    )
}

export default AddRecipe;