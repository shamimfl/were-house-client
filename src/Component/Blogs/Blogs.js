import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-red-500 mt-3'>1. Difference between javascript and nodejs?</h1>
            <div className='flex'>

                <div className='w-2/4 p-2'>
                    <h1 className='text-green-600 font-bold'>Ans:</h1>
                    <h1 className='text-xl  font-bold'>Javascript</h1>
                    <h1>1) Javascript is a programming language that is used for writing scripts on the website. </h1>
                    <h1>2)	Javascript can only be run in the browsers.</h1>
                    <h1>3) It is basically used on the client-side.</h1>
                    <h1>4)Javascript is capable enough to add HTML and play with the DOM</h1>
                    <h1>5) Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </h1>
                </div>
                <div className='w-2/4 p-2'>
                    <h1 className='text-xl font-bold'>NodeJS</h1>
                    <h1>1) NodeJS is a Javascript runtime environment.</h1>
                    <h1>2) We can run Javascript outside the browser with the help of NodeJS.</h1>
                    <h1>3)It is mostly used on the server-side.</h1>
                    <h1>4)Nodejs does not have capability to add HTML tags.</h1>
                    <h1>5)V8 is the Javascript engine inside of node.js that parses and runs Javascript. </h1>
                </div>
            </div>
            <h1 className='text-red-500 mt-3'>2.When should you use node js and when should you use mongodb</h1>
            <div>
                <h1 className='text-green-600 font-bold'>Ans:</h1>
                <h1>There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.</h1>
            </div>
            <h1 className='text-red-500 mt-3'>3)Differences between sql and nosql databases.</h1>
            <h1 className='text-green-600 font-bold'>Ans:</h1>
            <div className='flex justify-between'>
                <div className='w-2/4'>
                    <h1 className='text-xl font-bold'>SQL</h1>
                    <h1>1)RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</h1>
                    <h1>2)These databases have fixed or static or predefined schema</h1>
                    <h1>3)These databases are not suited for hierarchical data storage.	</h1>
                    <h1>4)These databases are best suited for complex queries</h1>
                </div>
                <div className='w-2/4'>
                <h1 className='text-xl font-bold'>NOSQL</h1>  
                <h1>1)Non-relational or distributed database system.</h1> 
                <h1>2)They have dynamic schema</h1>
                <h1>3)These databases are best suited for hierarchical data storage.</h1>
                <h1>4)These databases are not so good for complex queries</h1>
                </div>
            </div>
            <h1 className='text-red-500 mt-3'>4)What is the purpose of jwt and how does it work?</h1>
            <h1 className='text-green-600 font-bold'>Ans:</h1>
            <h1>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</h1>
            <h1></h1>
        </div>
    );
};

export default Blogs;