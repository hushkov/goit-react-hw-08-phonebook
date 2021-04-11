import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

export const getFilterValue = state => state.contacts.filter;

export const getFilteredList = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) => {
    const normalizedQuery = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedQuery),
    );
  },
);
