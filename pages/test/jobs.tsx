import * as React from "react";
import Card from "../../components/Card";

export default function Jobs({ children }) {
  return (
    <div className="flex flex-col items-center w-full p-6">
      <h1 className="text-3xl uppercase font-bold">Developer jobs near me</h1>
      <div className="flex flex-col md:flex-row md:flex-wrap w-full mt-4 border">
        <Card>
          <h1>This will be a card Heading.</h1>
          <p>This will be Card text.</p>
        </Card>
        <Card>
          <h1>This will be a card Heading.</h1>
          <p>This will be Card text.</p>
        </Card>
        <Card>
          <h1>This will be a card Heading.</h1>
          <p>This will be Card text.</p>
        </Card>
        <Card>
          <h1>This will be a card Heading.</h1>
          <p>This will be Card text.</p>
        </Card>
      </div>
    </div>
  );
}
