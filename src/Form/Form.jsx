import React from 'react'
import "../Form/Form.css"

function Form() {
  return (
    <div className='form-container'  >
        <div className='form-text-container'>
            <div className='form-text-heading'>
                <h4>
                    Ready to implement your design project?
                </h4>
            </div>
            <div className='form-text-para'>
                <p>
                 Fill out a simple form and get a 30% discount untill 31.11.2021
                </p>
            </div>
        </div>

        <form>
            <div className='form'>
                <div className='form-row1'>
                    <input placeholder='Name'></input>
                    <input placeholder=' (+994 XX) XXX XX XX '></input>
                </div>

                <div className='form-row2'>
                   
                    <select name='change tariff'>
                        <option>Select tariff</option>
                        <option>XX</option>
                        <option>XX</option>
                    </select>
                    <input type="submit" value="Send" className='submit'></input>
                </div>

            </div>
        </form>

    </div>
  )
}

export default Form
