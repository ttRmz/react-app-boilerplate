import { fireEvent, render } from "@testing-library/react"

import { Asset, ASSET_NAMES } from "."

describe("<Asset />", () => {
  it("should render an asset", () => {
    const { container } = render(<Asset name={ASSET_NAMES.analysis} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("should pass props on root element", () => {
    const onClick = jest.fn()
    const testId = "asset-id"

    const { container, getByTestId } = render(
      <Asset
        name={ASSET_NAMES.analysis}
        className="test-class"
        id="test-id"
        onClick={onClick}
        data-testid={testId}
      />,
    )
    expect(container.firstChild).toMatchSnapshot()

    fireEvent.click(getByTestId(testId))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
