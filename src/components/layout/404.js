import React from 'react'
import "./noteExist.css";
import { useNavigate } from 'react-router-dom';

function NoteExit404() {
  const navigate = useNavigate();
  const pathName = window.location.pathname

  return (
    <>
      {
        pathName === "/" || pathName === "/login" ? "" :
          <div className="login-wrapper">
                <div className="main-content">
                  <div style={{
                    margin: "0",
                    padding: "0",
                    textAlign: "center"
                  }}>
                    <div class="section">
                      <h1 class="error">404</h1>
                      <div class="page">Ooops!!! The page you are looking for is not found</div>
                      <button onClick={() => navigate(-1)} class="back-home">Back</button>
                    </div>
                  </div>
                </div>
          </div>
      }
    </>
  )
}

export default NoteExit404