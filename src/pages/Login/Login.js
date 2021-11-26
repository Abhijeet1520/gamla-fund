import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginImg from "../../assets/login.svg";
import "./Login.css"

export default function Login() {
    return (
        <div>
            <Container className="login_container">
                <Row>
                    <Col md={6} className="login_left">
                        <img src={LoginImg} alt="login" className="login_img" />
                    </Col>
                    <Col md={6} className="login_right">
                        <h1 className="logo">GAMLA Fund</h1>

                        <input className="login_input" type="text" placeholder="Username" />

                        <input className="login_input" type="password" placeholder="Password" />

                        <input className="login_input" type="password" placeholder="Conform Password" />

                        <div className="btn" style={{ color: "white", marginTop: "1.5rem" }}>Log In</div>

                    </Col>
                    <div className="ask_signup">
                        <h1 className="no_account">Don't have an account? Sign Up</h1>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
