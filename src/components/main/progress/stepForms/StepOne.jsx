import { SelectGroups } from "./elementGroups/SelectGroups.jsx";
import { InputGroups } from "./elementGroups/InputGroups.jsx";
import styles from "./StepOne.module.scss";
import { Form } from "./Form.jsx";

const titleOptions = [
  { value: "mr.", name: "先生" },
  {
    value: "ms.",
    name: "小姐",
  },
  {
    value: "mx.",
    name: "不明",
  },
];

const cityOptions = [
  { name: "請選擇縣市", value: "" },
  {
    name: "基隆市",
    value: "KLU",
  },
  {
    name: "新北市",
    value: "TPH",
  },
  {
    name: "臺北市",
    value: "TPE",
  },
  {
    name: "桃園市",
    value: "TYC",
  },
  {
    name: "新竹縣",
    value: "HSH",
  },
  {
    name: "新竹市",
    value: "HSC",
  },
  {
    name: "苗栗市",
    value: "MAC",
  },
  {
    name: "苗栗縣",
    value: "MAL",
  },
  {
    name: "臺中市",
    value: "TXG",
  },
  {
    name: "彰化縣",
    value: "CWH",
  },
  {
    name: "彰化市",
    value: "CWS",
  },
  {
    name: "南投市",
    value: "NTC",
  },
  {
    name: "南投縣",
    value: "NTO",
  },
  {
    name: "雲林縣",
    value: "YLH",
  },
  {
    name: "嘉義縣",
    value: "CHY",
  },
  {
    name: "嘉義市",
    value: "CYI",
  },
  {
    name: "臺南市",
    value: "TNN",
  },
  {
    name: "高雄市",
    value: "KHH",
  },
  {
    name: "屏東縣",
    value: "IUH",
  },
  {
    name: "屏東市",
    value: "PTS",
  },
  {
    name: "宜蘭縣",
    value: "ILN",
  },
  {
    name: "宜蘭市",
    value: "ILC",
  },
  {
    name: "花蓮縣",
    value: "HWA",
  },
  {
    name: "花蓮市",
    value: "HWC",
  },
  {
    name: "臺東市",
    value: "TTC",
  },
  {
    name: "臺東縣",
    value: "TTT",
  },
  {
    name: "澎湖縣",
    value: "PEH",
  },
  {
    name: "金門縣",
    value: "KMN",
  },
  {
    name: "連江縣",
    value: "LNN",
  },
];

// FormRow
function FormRow({ children, className }) {
  return <div className={`${styles.formRow} ${className}`}>{children}</div>;
}

export function StepOne() {
  return (
    <Form title="寄送地址">
      <div className={styles.StepOneWrapper}>
        <FormRow className={styles.formRowGrid}>
          <SelectGroups
            label="稱謂"
            options={titleOptions}
            className={styles.titleRow}
          />
          <InputGroups
            label="姓名"
            placeholder="請輸入姓名"
            type="text"
            id="name"
          />
        </FormRow>
        <div className={styles.formRowGrid}>
          <InputGroups
            label="電話"
            placeholder="請輸入行動電話"
            type="number"
            id="phoneNumber"
            maxLength="10"
          />
          {/* </FormRow>
      <FormRow className={styles.formRowGrid}> */}
          <InputGroups
            label="Email"
            placeholder="請輸入電子郵件"
            type="email"
            id="Email"
          />
        </div>
        <div className={styles.formRowGrid}>
          <SelectGroups
            label="縣市"
            options={cityOptions}
            className={styles.select}
          />
          {/* </FormRow>
      <FormRow className={styles.formRowGrid}> */}
          <InputGroups
            label="地址"
            placeholder="請輸入地址"
            type="text"
            id="address"
          />
        </div>
      </div>
    </Form>
  );
}
