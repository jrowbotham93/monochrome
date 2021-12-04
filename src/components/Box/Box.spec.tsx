import React from "react";
import { render, screen } from "@testing-library/react";

import { Box } from "../Box";

describe("Box", () => {
  it("should render Box with correct children", async () => {
    render(
      <Box>
        <div>children</div>
      </Box>
    );
    expect(screen.getByText("children")).toBeInTheDocument();
  });
});
