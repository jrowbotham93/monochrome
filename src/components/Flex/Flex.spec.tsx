import React from "react";
import { render, screen } from "@testing-library/react";

import { Flex } from "../Flex";

describe("Flex", () => {
  it("should render flex with correct children", async () => {
    render(
      <Flex>
        <div>children</div>
      </Flex>
    );
    expect(screen.getByText("children")).toBeInTheDocument();
  });
});
