"use client";
import React, { useState } from 'react';
import { ChevronRight, BarChart3, Users, Shield, Menu, X, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ExcelDrawLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router=useRouter();

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Easy Visualization",
      description: "Turn your Excel data into clear charts and graphs with just a few clicks."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Share your visualizations with teammates and work together on data projects."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security and privacy controls."
    }
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["5 charts per month", "Basic templates", "Export to PNG"],
      cta: "Get Started"
    },
    {
      name: "Pro",
      price: "$19",
      features: ["Unlimited charts", "Premium templates", "Team sharing", "Export to all formats"],
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Everything in Pro", "Advanced security", "Priority support", "Custom integrations"],
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">ExcelDraw</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-2 space-y-2">
              <a href="#features" className="block py-2 text-gray-600">Features</a>
              <a href="#pricing" className="block py-2 text-gray-600">Pricing</a>
              <a href="#contact" className="block py-2 text-gray-600">Contact</a>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Turn Excel Data Into Beautiful Charts
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create professional data visualizations from your spreadsheets in minutes. 
            No design experience needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button  onClick={()=>{
                router.push("/signin");
            }} className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-700">
             SignIn
            </button>
            <button onClick={()=>{
                router.push("/signin");
            }}  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md text-lg hover:bg-gray-50">
              SignUp
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">No credit card required</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Powerful Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to visualize your data effectively
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Your Excel File</h3>
              <p className="text-gray-600">Import your spreadsheet data with a simple drag and drop</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Chart Type</h3>
              <p className="text-gray-600">Select from dozens of professional chart templates</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Share & Export</h3>
              <p className="text-gray-600">Download your charts or share them with your team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that works for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`border rounded-lg p-8 ${index === 1 ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900">
                    {plan.price}
                    {plan.price !== "Custom" && <span className="text-lg text-gray-600">/month</span>}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-4 rounded-md font-semibold ${
                  index === 1 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who trust ExcelDraw for their data visualization needs
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">
            Start Your Free Trial
            <ChevronRight className="inline w-5 h-5 ml-2" />
          </button>
          <p className="text-blue-200 text-sm mt-4">14-day free trial • No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BarChart3 className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-semibold">ExcelDraw</span>
              </div>
              <p className="text-gray-400">
                Transform your Excel data into beautiful visualizations.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Templates</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Tutorials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ExcelDraw. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExcelDrawLanding;