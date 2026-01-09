import React from 'react';
import { 
  FaEye, 
  FaLightbulb, 
  FaGraduationCap,
  FaUsers,
  FaChartLine,
  FaMoneyBillWave,
  FaShieldAlt
} from 'react-icons/fa';

function About() {
    return (
        <div className="container-fluid bg-white">
            {/* Hero Section */}
            <div className="container py-5">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-8 text-center">
                        <h1 className="display-4 fw-bold mb-4 text-dark">
                            Breaking <span className="text-primary">ground</span> in stock trading
                        </h1>
                        <p className="lead text-secondary mb-5">
                            We're redefining what it means to trade in modern India. No jargon, no hidden costs, 
                            just pure, transparent investing.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="bg-light py-6">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2 className="h1 fw-bold mb-4 text-dark">Our Mission</h2>
                            <p className="fs-5 text-secondary mb-4">
                                To democratize stock market investing by making it accessible, affordable, 
                                and understandable for every Indian.
                            </p>
                            <div className="d-flex align-items-center">
                                <div className="border-start border-3 border-primary ps-3">
                                    <h3 className="h5 fw-bold">₹0 Brokerage</h3>
                                    <p className="text-muted mb-0">On equity delivery trades</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <div className="bg-white rounded-3 p-4 shadow-sm">
                                <h3 className="h4 fw-bold mb-4">The Revolution</h3>
                                <p className="text-secondary">
                                    We shattered the brokerage industry's status quo by introducing 
                                    transparent pricing when everyone else was charging hidden fees. 
                                    Today, we serve millions of investors who trust us with their 
                                    financial journey.
                                </p>
                                <div className="mt-4">
                                    <span className="badge bg-primary-subtle text-primary fs-6 fw-normal me-3 p-2">
                                        Trust & Transparency
                                    </span>
                                    <span className="badge bg-primary-subtle text-primary fs-6 fw-normal me-3 p-2">
                                        Innovation First
                                    </span>
                                    <span className="badge bg-primary-subtle text-primary fs-6 fw-normal p-2">
                                        Customer Focused
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="container py-6">
                <div className="row text-center g-4">
                    <div className="col-md-3">
                        <div className="p-4">
                            <FaUsers className="text-primary mb-3" size={48} />
                            <h3 className="display-5 fw-bold text-primary">10M+</h3>
                            <p className="text-secondary fw-medium">Active Clients</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-4">
                            <FaChartLine className="text-primary mb-3" size={48} />
                            <h3 className="display-5 fw-bold text-primary">15%+</h3>
                            <p className="text-secondary fw-medium">Daily Market Share</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-4">
                            <FaMoneyBillWave className="text-primary mb-3" size={48} />
                            <h3 className="display-5 fw-bold text-primary">₹4L Cr+</h3>
                            <p className="text-secondary fw-medium">Monthly Turnover</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-4">
                            <FaShieldAlt className="text-primary mb-3" size={48} />
                            <h3 className="display-5 fw-bold text-primary">99.95%</h3>
                            <p className="text-secondary fw-medium">Platform Uptime</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section with Icons */}
            <div className="bg-light py-6">
                <div className="container">
                    <h2 className="text-center h1 fw-bold mb-5 text-dark">Our Core Values</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="bg-white p-4 rounded-3 h-100 shadow-sm">
                                <div className="mb-4">
                                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3">
                                        <FaEye className="text-primary" size={32} />
                                    </div>
                                </div>
                                <h4 className="fw-bold mb-3 text-dark">Transparency</h4>
                                <p className="text-secondary">
                                    No hidden charges, no complex pricing. What you see is what you get—always.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2">
                                        <span className="text-primary me-2">✓</span>
                                        Clear fee structure
                                    </li>
                                    <li className="mb-2">
                                        <span className="text-primary me-2">✓</span>
                                        Real-time reporting
                                    </li>
                                    <li>
                                        <span className="text-primary me-2">✓</span>
                                        No hidden terms
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white p-4 rounded-3 h-100 shadow-sm">
                                <div className="mb-4">
                                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3">
                                        <FaLightbulb className="text-primary" size={32} />
                                    </div>
                                </div>
                                <h4 className="fw-bold mb-3 text-dark">Innovation</h4>
                                <p className="text-secondary">
                                    Continuously pushing boundaries with cutting-edge technology and user-friendly interfaces.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2">
                                        <span className="text-primary me-2">✓</span>
                                        Advanced trading tools
                                    </li>
                                    <li className="mb-2">
                                        <span className="text-primary me-2">✓</span>
                                        Real-time analytics
                                    </li>
                                    <li>
                                        <span className="text-primary me-2">✓</span>
                                        Seamless mobile experience
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white p-4 rounded-3 h-100 shadow-sm">
                                <div className="mb-4">
                                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3">
                                        <FaGraduationCap className="text-primary" size={32} />
                                    </div>
                                </div>
                                <h4 className="fw-bold mb-3 text-dark">Education</h4>
                                <p className="text-secondary">
                                    Empowering investors with knowledge through comprehensive learning resources.
                                </p>
                                <ul className="list-unstyled mt-3">
                                    <li className="mb-2">
                                        <span className="text-primary me-2">✓</span>
                                        Free learning modules
                                    </li>
                                    <li className="mb-2">
                                        <span className="text-primary me-2">✓</span>
                                        Market insights
                                    </li>
                                    <li>
                                        <span className="text-primary me-2">✓</span>
                                        Expert webinars
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* CTA Section */}
            <div className="bg-dark py-6">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h2 className="h1 fw-bold text-white mb-4">Ready to start your investing journey?</h2>
                            <p className="text-light mb-5">
                                Join millions of investors who trust us with their financial future.
                            </p>
                            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                                <button className="btn btn-primary btn-lg px-5 py-3 fw-bold">
                                    Open Free Account
                                </button>
                                <button className="btn btn-outline-light btn-lg px-5 py-3 fw-bold">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <style jsx>{`
                .py-6 {
                    padding-top: 5rem;
                    padding-bottom: 5rem;
                }
                
                .timeline {
                    position: relative;
                    padding-left: 1.5rem;
                }
                
                .timeline::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(to bottom, #0d6efd, transparent);
                }
                
                .timeline-item {
                    position: relative;
                    padding-left: 2rem;
                }
                
                .timeline-item::before {
                    content: '';
                    position: absolute;
                    left: -0.5rem;
                    top: 0.5rem;
                    width: 1rem;
                    height: 1rem;
                    background-color: #0d6efd;
                    border-radius: 50%;
                }
                
                .timeline-year {
                    font-size: 1.1rem;
                    margin-bottom: 0.5rem;
                }
                
                .badge {
                    font-weight: 500;
                }
                
                a:hover {
                    color: #6ea8fe !important;
                }
            `}</style>
        </div>
    );
}

export default About;