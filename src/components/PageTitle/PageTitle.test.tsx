import { fireEvent, render } from '@testing-library/react'
import { PageTitle } from '.'

describe('<PageTitle />', () => {
  it('should render a PageTitle', () => {
    const { container } = render(<PageTitle children="test title" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should pass props on root element', () => {
    const onClick = jest.fn()
    const testId = 'title-id'

    const { container, getByTestId } = render(
      <PageTitle
        children="test title"
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
