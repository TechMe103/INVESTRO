import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.id.replace('input', '').toLowerCase()]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
      });
      if (res.ok) {
        navigate('/dashboard');
      } else {
        const data = await res.json();
        setError(data.message || 'Signup failed');
      }
    } catch {
      setError('Network error');
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className='container border mt-5 mb-5 p-5' style={{ backgroundColor: "white", borderRadius: "8px" }}>
      <div className='row'>
        <div className='col-4 p-5'>
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
            alt="Signup"
            style={{ width: "500px", height: "500px", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
        <div className='col-4'></div>
        <div className='col-4 border mt-5 mb-5 p-5' style={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
          <h1 className='text-center mt-5 mb-5' style={{ color: "blue" }}>Signup</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            {/* Email */}
            <div className="mb-3">
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
            <div className="row g-3 align-items-center mb-3">
              <div className="col-auto">
                <label htmlFor="inputPassword" className="col-form-label">Password</label>
              </div>
              <div className="col-auto">
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                  value={form.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                />
              </div>
              <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                  Must be 8-20 characters long.
                </span>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="d-grid gap-2 mb-3">
              <button type="submit" className="btn btn-primary btn-lg">Create Account</button>
            </div>

            {/* Divider */}
            <div className="text-center mb-3">
              <hr className="my-4" />
              <p className="text-muted">Already have an account?</p>
            </div>

            {/* Login Button */}
            <div className="d-grid gap-2">
              <button 
                type="button" 
                className="btn btn-outline-primary btn-lg"
                onClick={handleLoginRedirect}
              >
                Login
              </button>
            </div>

            {/* Alternative: Login Link (if you prefer link style) */}
            {/* <div className="text-center mt-3">
              <p>
                Already have an account?{' '}
                <a 
                  href="/login" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/login');
                  }}
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  Login here
                </a>
              </p>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;