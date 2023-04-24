import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Field, reduxForm } from 'redux-form'
import { useDispatch, useSelector } from "react-redux";
import { GetCountries } from '../../Redux/Action/GetCheOutPageApi'
import './BillingForm.css'


const number = value => value && isNaN(Number(value)) ?  <div className="errorms"><h6>Must be a number</h6></div> : undefined
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? <div className="errorms"><h6>Invalid email address</h6></div>
    : undefined

    const required = value => (value || typeof value === 'number' ? undefined : <div  className="errorms"><h6>Required</h6></div>)
const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
      ?  <div className="errorms"><h6>Invalid phone number, must be 10 digits</h6></div>
      : undefined
      const isValidZip = value =>  value &&   !/^[1-9][0-9]{5}$/.test(value)  ?  <div className="errorms"><h6>Invalid zip code</h6></div>
      : undefined



const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <abbr className="required" title="required">*</abbr>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||   (warning && <span>{warning}</span>))}
    </div>
  </div>
)

function BillingForm(props) {
  
  const { handleSubmit, prefix, excludes } = props
  
  const dispatch = useDispatch()
  const CountriesData = useSelector((state) => state?.CheckOutDataReducer?.CountriesData)

  const [selectedCountry, setSelectedCountry] = useState(null);


  const availableState = CountriesData.find((c) => c.name === selectedCountry)







  useEffect(() => {
    dispatch(GetCountries())
  }, [])







  return (
    <div>

      <form className="form" onSubmit={handleSubmit} >
        <Row>
          <Col md={6}>
            {!excludes.includes('first_name') ?
              <div className="control">
                <label>First Name</label>
                <abbr className="required" title="required">*</abbr>
                <div >
                  <Field
                    name={`${prefix}first_name`}
                    component="input"
                    type="text"
                    placeholder="First Name"
                    // component={renderField}
                    // label='First Name'
                    // validate={[required]}
                  />
                </div>
              </div> : ''
            }

          </Col>

          <Col md={6}>
            {!excludes.includes('last_name') ?

              <div className="control">
                <label>Last Name</label>
                <abbr className="required" title="required">*</abbr>
                <div>
                  <Field
                    name={`${prefix}last_name`}
                    component="input"
                    type="text"
                    placeholder="Last Name"
                    // component={renderField}
                    // label='First Name'
                    // validate={[required]}
                  />
                </div>
              </div>

              : ''}
          </Col>
          {!excludes.includes('companyname') ?
            <div className="control">
              <label>Company Name(optional)</label>
              <div>
                <Field
                  name={`${prefix}companyname`}
                  component="input"
                  type="text"
                  placeholder="Company Name"
                />
              </div>
            </div> : ''

          }
          <div className="control">
            <label>Country / Region</label>
            <abbr className="required" title="required">*</abbr>
            <div>


              <Field
                name={`${prefix}country`}
                component="select"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                {CountriesData.map((country, id) => (
                  <>

                    <option key={id} value={country.name}>{country.name}</option></>
                ))}


              </Field>
            </div>
          </div>


          {!excludes.includes('address_1') ?


            <div className="control">
              <label>Street address </label>
              <abbr className="required" title="required">*</abbr>
              <div>
                <Field
                  name={`${prefix}address_1`}
                  component="input"
                  type="text"
                  placeholder="Street address"
                />
              </div>
            </div> : ''
          }

          <div className="control">
            <label>Town / City</label>
            <abbr className="required" title="required">*</abbr>

            <div>
              <Field
                name={`${prefix}city`}
                component="input"
                type="text"
                placeholder="Town / City"
              />
            </div>
          </div>
          <div className="control">
            <label>State</label>
            <abbr className="required" title="required">*</abbr>
            <div>
              <Field
                name={`${prefix}state`}
                component="select"
                value={availableState}

              >
                {/* <option>Select Your state</option> */}
                {availableState?.states?.map((state, id) => (

                  <option key={id} value={state.name}>{state.name}</option>
                ))}
              </Field>
            </div>
          </div>

          <div className="control">
            {/* <label>Pin Code</label>
            <abbr className="required" title="required">*</abbr> */}

            <div>
              <Field
                name={`${prefix}postcode`}
                // component="input"
                type="text"
                placeholder="pin  code"
                label='Pin Code'
                validate={isValidZip}
                component={renderField}
              />
            </div>
          </div>
          {!excludes.includes("phone") ?

            <div className="control">
              {/* <label>Phone</label>
              <abbr className="required" title="required">*</abbr> */}

              <div>
                <Field
                
                  name={`${prefix}phone`}
                  // component="input"
                  type="number"
                  placeholder="Phone"
                  component={renderField}
                  label="Phone"
                  validate={[required, phoneNumber,number]}
                />
              </div>
            </div> : ''
          }
          {!excludes.includes("email") ?
            <div className="control">
              {/* <label>Email address</label>
              <abbr className="required" title="required">*</abbr> */}

              <div>
                <Field
                  name={`${prefix}email`}
                  // component="input"
                  type="email"
                  placeholder="Email address"
                  validate={email}
                  label="Email address"
                  component={renderField}
                />
              </div>
            </div> : ''}

        </Row>
        {!excludes.includes("notes") ?
          <div className="control">

            <label>Order notes (optional)</label>
            <div>
              <Field
                name="notes"
                component="textarea"
                placeholder="Notes about your orders,e.g. special notes for delivery"
              />
            </div>
          </div> : ''
        }



        <button type="submit" className="submitbtn">submit</button>

      </form>
    </div>
  )
}
BillingForm = reduxForm({
  // a unique name for the form
  form: 'root'
})(BillingForm)


export default BillingForm