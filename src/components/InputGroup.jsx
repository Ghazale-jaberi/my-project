import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const InputGroup = ({
  label,
  onChange,
  validMsg,
  showValidMsg,
  ...restProps
}) => {
  return (
    <Form.Group
      className=" position-relative"
      as={Row}
      controlId="formGridEmail"
    >
      <Form.Label>{label}</Form.Label>
      <Form.Control {...restProps} onChange={onChange} />
      {showValidMsg && <span className="valid-msg">{validMsg}</span>}
    </Form.Group>
  );
};
export default InputGroup;
