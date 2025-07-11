import React from 'react';
import { render } from '@testing-library/react';

import SectionTitle from '../SectionTitle';

describe('SectionTitle', () => {
  it('renders title text correctly', () => {
    const { getByText } = render(<SectionTitle title="Test Title" />);
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  it('applies correct CSS class', () => {
    const { container } = render(<SectionTitle title="Test Title" />);
    const sectionElement = container.querySelector('.sectionTitle');
    expect(sectionElement).toBeInTheDocument();
  });

  it('handles empty title gracefully', () => {
    const { getByRole } = render(<SectionTitle title="" />);
    const titleElement = getByRole('heading');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('');
  });
});
