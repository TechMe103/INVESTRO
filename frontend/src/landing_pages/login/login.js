import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.id.replace('input', '').toLowerCase()]: e.target.value });

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   setError('');
  //   setIsLoading(true);
  //   try {
  //     const res = await fetch('http://localhost:5000/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email: form.email, password: form.password }),
  //     });
  //     if (res.ok) {
  //       const data = await res.json();

  //      // Save token
  //       localStorage.setItem("token", data.token);

  //      //Redirect to DASHBOARD APP (different React app)
  //       window.location.href = "http://localhost:3000/";
  //     } else {
  //       const data = await res.json();
  //       setError(data.message || 'Login failed');
  //     }
  //   } catch {
  //     setError('Network error');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };


  const handleSubmit = async e => {
  e.preventDefault();
  setError('');
  setIsLoading(true);

  try {
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);

      //Redirect to dashboard app
      window.location.href = "http://localhost:3001/";
    } else {
      setError(data.message || 'Login failed');
    }
  } catch {
    setError('Network error');
  } finally {
    setIsLoading(false);
  }
};


  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className='container border mt-5 mb-5 p-5' style={{ backgroundColor: "white", borderRadius: "8px" }}>
      <div className='row'>
        <div className='col-4 p-5'>
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
            alt="Login"
            style={{ width: "500px", height: "500px", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
        <div className='col-4'></div>
        <div className='col-4 border mt-5 mb-5 p-5' style={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
          <h1 className='text-center mt-5 mb-5' style={{ color: "blue" }}>Login</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="inputEmail" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="name@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            
            {/* Password */}
            <div className="mb-4">
              <label htmlFor="inputPassword" className="form-label">Password</label>
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            
            {/* Remember Me & Forgot Password */}
            <div className="row mb-4">
              <div className="col d-flex justify-content-between align-items-center">
                {/* Remember me checkbox */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                
                {/* Forgot password link */}
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    // Add forgot password functionality here
                    alert('Forgot password feature coming soon!');
                  }}
                  style={{ textDecoration: 'none' }}
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            {/* <div className="d-grid gap-2 mb-4">
              <button type="submit" className="btn btn-primary btn-lg">Login</button>
            </div> */}

              {/* Submit Button */}
            <div className="d-grid gap-2 mb-4">
              <button 
                type="submit" 
                className="btn btn-primary btn-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Logging in...
                  </>
                ) : (
                  'Login'
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="text-center mb-4">
              <hr className="my-4" />
              <p className="text-muted">Don't have an account?</p>
            </div>

            {/* Signup Button */}
            <div className="d-grid gap-2">
              <button 
                type="button" 
                className="btn btn-outline-primary btn-lg"
                onClick={handleSignupRedirect}
              >
                Create New Account
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;