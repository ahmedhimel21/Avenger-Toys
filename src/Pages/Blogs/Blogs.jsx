import React from "react";
import useTitle from "../../hooks/useTitle";
const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="mx-8 my-5 p-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* q1 */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-bold mb-2">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p className="text-gray-700 mb-4">
            <span className="text-lg font-semibold">Access Token:</span>
            Access tokens are used in token-based authentication to allow an
            application to access an API. The application receives an access
            token after a user successfully authenticates and authorizes access,
            then passes the access token as a credential when it calls the
            target API. The passed token informs the API that the bearer of the
            token has been authorized to access the API and perform specific
            actions specified by the Scope that was granted during authorization{" "}
            <br />
            <span className="text-lg font-semibold">Refresh Token: </span>
            A refresh token is a special token that is used to obtain additional
            access tokens. This allows you to have short-lived access tokens
            without having to collect credentials every time one expires. <br />
            <span className="text-lg font-semibold">
              How does access and refresh token works:
            </span>
            Normally, a user with an access token can only access protected
            resources or perform specific actions for a set period of time,
            which reduces the risk of the token being compromised. A refresh
            token allows the user to get a new access token without needing to
            log in again. <br />
            <span className="text-lg font-semibold">
              Where to store the refresh token on the Client:
            </span>
            Access token and refresh token shouldn't be stored in the
            local/session storage, because they are not a place for any
            sensitive data. Hence I would store the access token in a httpOnly
            cookie (even though there is CSRF) and I need it for most of my
            requests to the Resource Server anyway.
          </p>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-sm">By Jane Smith | May 1, 2023</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Read More
            </button>
          </div>
        </div>
        {/* q2 */}
        <div className="bg-white shadow rounded p-4 flex flex-col">
          <h2 className="text-xl font-bold mb-2">
            Comparison between SQL and NoSQL databases?
          </h2>
          <p className="text-gray-700 mb-4">
            <span className="text-lg font-semibold">SQL database:</span>
            <li>Relational Database management system</li>
            <li>Suitable for structured data with predefined schema</li>
            <li>Data is stored in tables with columns and rows </li>
            <br />
            <span className="text-lg font-semibold">NoSQL database: </span>
            <li>Distributed database management system</li>
            <li>Suitable for unstructured and semi-structured data</li>
            <li>Data is stored in collections or documents</li>
          </p>
          <div className="flex items-center justify-between mt-auto">
            <p className="text-gray-600 text-sm">By Jane Smith | May 1, 2023</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Read More
            </button>
          </div>
        </div>
        {/* q3 */}
        <div className="bg-white shadow rounded p-4 flex flex-col">
          <h2 className="text-xl font-bold mb-2">
            What is express js? || What is Nest JS?
          </h2>
          <p className="text-gray-700 mb-4">
            <span className="text-lg font-semibold">Express.js:</span>
            <li>
              Express.JS is a fast, assertive and moderate web framework of
              Node.js
            </li>
            <li>
              It can be assumed as layer built on top of the Node.js that helps
              manage server and routes.
            </li>
            <li>
              It provides a robust ser of features to develop web and mobile
              application
            </li>
            <br />
            <span className="text-lg font-semibold">Nest.js: </span>
            Nest. js is one of the fastest-growing Node. js frameworks for
            building efficient, scalable, and enterprise-grade backend
            applications using Node. js. It is known for producing highly
            testable, maintainable, and scalable applications using modern
            JavaScript and TypeScript
          </p>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-sm">By Jane Smith | May 1, 2023</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Read More
            </button>
          </div>
        </div>
        {/* q4 */}
        <div className="bg-white shadow rounded p-4 flex flex-col">
          <h2 className="text-xl font-bold mb-2">
            What is MongoDB aggregate and how does it work?
          </h2>
          <p className="text-gray-700 mb-4">
            <span className="text-lg font-semibold">MongoDB aggregate:</span>
            What is Aggregation in MongoDB? Aggregation is a way of processing a
            large number of documents in a collection by means of passing them
            through different stages. The stages make up what is known as a
            pipeline. The stages in a pipeline can filter, sort, group, reshape
            and modify documents that pass through the pipeline.
            <br />
            <span className="text-lg font-semibold">How does it work: </span>
            <li>Step 1 — Preparing the Test Data</li>
            <li>Step 2 — Using the $match Aggregation Stage</li>
            <li>Step 3 — Using the $sort Aggregation Stage</li>
            <li>Step 4 — Using the $group Aggregation Stage</li>
            <li>Step 5 — Using the $project Aggregation Stage</li>
            <li>Step 6 — Putting All the Stages Together</li>
          </p>
          <div className="flex items-center justify-between mt-auto">
            <p className="text-gray-600 text-sm">By Jane Smith | May 1, 2023</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
