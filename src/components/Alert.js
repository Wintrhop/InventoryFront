import React from 'react'

import {Alert,Button} from 'react-bootstrap';

const Alert = ({title, text}) => {
    const [show, setShow] = useState(true);
    if (show) {
        return (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{title}</Alert.Heading>
            <p>
              {text}
            </p>
          </Alert>
        );
      }
      return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default Alert