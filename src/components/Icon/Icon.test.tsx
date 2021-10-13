import { fireEvent, render } from "@testing-library/react"

import { Icon, ICON_NAMES } from "."

describe("<Icon />", () => {
  it("should render an icon", () => {
    const { container } = render(<Icon name={ICON_NAMES.react} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("should pass props on root element", () => {
    const onClick = jest.fn()
    const testId = "icon-id"

    const { container, getByTestId } = render(
      <Icon
        name={ICON_NAMES.react}
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
