import React, {Component} from 'react';
import './addPhotos.css';
import add from '../../../jpg/add.png';


class AddPhotos extends Component {
    state = {
        image: null
    };


    onImageChange = (event) => {
        console.log('эвент', event);
        console.log('эвент', event.target.files);
        if (event.target.files && event.target.files[0]) {
            const arrImg = this.getArrayImages(event.target.files)
            this.setState({
                image: arrImg
            });
        }
    };


    getArrayImages = (images) => {
        const img = [];

        for (let a of images) {
            img.push(URL.createObjectURL(a));
        }

        console.log('jjjj', img)

        return img;
    }


    render() {
        console.log(this.state.image)
        let images = this.state.image ? this.state.image.map((e, num) => {
            return (
                <div className='container-images'>
                    <img className='img-style'
                         id="target"
                         key={num}
                         src={e} alt=''/>
                </div>
            )
        }) : null;
        return (
            <div>
                <div className='your-photos'>Ваши фото:</div>

                <div className='common-add-photos'>
                    <div className='container'>

                        {images}

                    </div>


                    <div>
                        <input name="file" type="file" id="input__file"
                               className="input input__file" multiple
                               onChange={this.onImageChange}
                        />
                        <label htmlFor="input__file" className="input__file-button">
                        <span className="input__file-icon-wrapper">
                            <img className="input__file-icon" src={add} alt=''/>
                        </span>
                            <span className="input__file-button-text">
                            Выберите файл
                        </span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddPhotos;