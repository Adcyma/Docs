import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

// Define the OpenAPI spec inline
const openapiSpec = {
  openapi: "3.0.0",
  info: {
    title: "",
    version: "1.0.0",
    description: ""
  },
  paths: {
    "/users": {
      get: {
        summary: "Get all users",
        responses: {
          "200": {
            description: "A list of users",
            content: {
              "application/json": {
                example: [{ id: 1, name: "John Doe" }]
              }
            }
          }
        }
      }
    }
  }
};

const SwaggerComponent = () => {
  return <SwaggerUI spec={openapiSpec} />;
};

export default SwaggerComponent;
