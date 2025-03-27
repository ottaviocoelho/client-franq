import { mount } from '@vue/test-utils';
import FinanceTable from '../components/FinanceTable.vue';
import { describe, it, expect } from 'vitest';

describe('FinanceTable.vue', () => {
  it('renders a title', () => {
    const wrapper = mount(FinanceTable, {
      props: { title: 'Test Table', endpoint: '/test' }
    });
    expect(wrapper.text()).toContain('Test Table');
  });

  it('shows "No data available" when data is empty', () => {
    const wrapper = mount(FinanceTable, {
      props: { title: 'Test Table', endpoint: '/test' }
    });
    expect(wrapper.text()).toContain('No data available');
  });
});