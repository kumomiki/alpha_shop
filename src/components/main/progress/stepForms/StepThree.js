import { InputGroups } from "./elementGroups/InputGroups";
import { Form } from "./Form";
import styles from './StepThree.module.scss'


// FormRow
function FormRow({children, className}){
  return (
    <div className={`${styles.formRow} ${className}`}>{children}</div>
  )
}
  
export function StepThree(){
  return (
    <Form
    title='付款資訊'
    >
      <div className={styles.StepThreeWrapper}>
      <FormRow>
        <InputGroups 
        label='持卡人姓名'
        placeholder='John Doe'
        type='text'
        id='cardName'
        />
      </FormRow>
      <FormRow>
        <InputGroups 
        label='卡號'
        placeholder='1111 2222 3333 4444'
        type='number'
        id='cardNumber'
        maxLength='12'
        />
      </FormRow>
      <FormRow className={styles.row}>
        <InputGroups 
        label='有效期限'
        placeholder='MM/YY'
        type='number'
        id='expiredDate'
        />
        <InputGroups 
        label='CVC/CCV'
        placeholder='123'
        type='number'
        id='cvc'
        maxLength='3'
        />
      </FormRow>
      </div>
    </Form>
  )
}