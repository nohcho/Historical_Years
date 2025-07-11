import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import YearCircle from '../YearCircle';

describe('YearCircle', () => {
  const mockProps = {
    years: [0, 1, 2, 3, 4, 5],
    activeYear: 0,
    onSelectYear: jest.fn(),
    renderDotLabel: (year: number, index: number) => `${index + 1}`,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders circle with correct number of dots', () => {
    const { container } = render(<YearCircle {...mockProps} />);
    const dots = container.querySelectorAll('.dot');
    expect(dots).toHaveLength(6);
  });

  it('renders dots with correct styling', () => {
    const { container } = render(<YearCircle {...mockProps} activeYear={2} />);
    const dots = container.querySelectorAll('.dot');
    expect(dots[2]).toBeInTheDocument();
    expect(dots[2]).toHaveClass('dot');
  });

  it('calls onSelectYear when dot is clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(<YearCircle {...mockProps} />);
    const dots = container.querySelectorAll('.dot');

    await user.click(dots[3]);
    expect(mockProps.onSelectYear).toHaveBeenCalledWith(3);
  });

  it('renders dot labels correctly', () => {
    const { getByText } = render(<YearCircle {...mockProps} />);
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('6')).toBeInTheDocument();
  });
});
