import React, {Component} from "react";
import './selected.css';

class Selected extends Component {
    state = {
        category: 'Выбрать категорию'
    }


    onChangeSelect = (event) => {
        this.setState(
            {category: event.target.value}
        )
    }

    render() {
        return (
            <form>
                <div className='category'>
                    Категория: {this.state.category}
                </div>

                <select className='select-category'
                        onChange={this.onChangeSelect}>
                    <option value='Выбрать'>Выбрать</option>
                    <option value='Завтрак'>Завтрак</option>
                    <option value='Обед'>Обед</option>
                    <option value='Ужин'>Ужин</option>
                    <option value='Перекус'>Перекус</option>
                    <option value='Десерт'>Десерт</option>
                </select>
            </form>
        )
    }
}


export default Selected;