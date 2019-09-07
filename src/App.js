import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout, Typography } from "antd";

import {
  WebPageTitle,
  QRCodeContainer,
  GreetingMessage
} from "./styles/AppStyle";
var QRCode = require("qrcode.react");
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <WebPageTitle>Dining IITH</WebPageTitle>
          <GreetingMessage>
            Hello, Vishnu. <br />
            Registered to UDH. <br />
            Have a good lunch.
          </GreetingMessage>
          <QRCodeContainer>
            <QRCode
              value="http://facebook.github.io/react/"
              size={200}
              fgColor="#001529"
            />
          </QRCodeContainer>
        </Header>
      </Layout>
    </div>
  );
}

export default App;
