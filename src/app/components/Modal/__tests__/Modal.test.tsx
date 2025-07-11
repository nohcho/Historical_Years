import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Modal } from '../Modal';

describe('Modal', () => {
  it('renders when visible is true', () => {
    const { getByText } = render(
      <Modal visible={true} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>,
    );
    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  it('does not render when visible is false', () => {
    const { queryByText } = render(
      <Modal visible={false} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>,
    );
    expect(queryByText('Modal Content')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const mockOnClose = jest.fn();
    const { getByText } = render(
      <Modal visible={true} onClose={mockOnClose}>
        <div>Modal Content</div>
      </Modal>,
    );

    const closeButton = getByText('x');
    await user.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when overlay is clicked', async () => {
    const user = userEvent.setup();
    const mockOnClose = jest.fn();
    const { container } = render(
      <Modal visible={true} onClose={mockOnClose}>
        <div>Modal Content</div>
      </Modal>,
    );

    const overlay = container.querySelector('.modalOverlay');
    if (overlay) {
      await user.click(overlay);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    }
  });
});
