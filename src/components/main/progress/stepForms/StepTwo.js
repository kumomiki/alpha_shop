import { RadioGroups } from './elementGroups/RadioGroups'
import { Form } from './Form'
import styles from './StepTwo.module.scss'

// FormRow
function FormRow({children, className}){
  return (
    <div className={`${styles.formRow} ${className}`}>{children}</div>
  )
}

export function StepTwo(){
  return (
    <Form
    title='運送方式'>
      <FormRow>
        <RadioGroups 
        label='標準運送'
        fee='0'
        price='免費'
        period='約3~7個工作天'
        id='shippingStandard'
      />
      </FormRow>
      <FormRow>
        <RadioGroups
        label='DHL貨運'
        fee='500'
        price='$500'
        period='48小時內抵達'
        id='shippingDHL' 
        />
      </FormRow>
    </Form>
  )
}