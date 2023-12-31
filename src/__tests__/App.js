import { it, expect } from "@jest/globals";
import { perPage, sortOption } from "../constants";
import "@testing-library/jest-dom";
import searchSlices, {
  setSearch,
  setPageNumber,
  setOrder,
} from "../redux/slices/searchSlice";

it("should check the selected sorting", () => {
  const card = ["desc"];

  expect(sortOption).toContain("desc");
  expect(new Set(sortOption)).toContain("desc");
  expect(card).toContain("desc");
});

it("should check whether the number of users on the page is displayed correctly", () => {
  expect(perPage).toBe(10);
});

describe("UserSearch reducer", () => {
  const initialState = {
    searchValue: "",
    pageNumber: 1,
    order: sortOption[1],
  };

  it("should handle setSearch()", () => {
    const searchValue = "tom";
    const action = setSearch(searchValue);
    const state = searchSlices(initialState, action);

    expect(state.searchValue).toBe(searchValue);
  });

  it("should handle setPageNumber()", () => {
    const pageNumber = 1;
    const action = setPageNumber(pageNumber);
    const state = searchSlices(initialState, action);

    expect(state.pageNumber).toBe(pageNumber);
  });

  it("should handle setOrder()", () => {
    const order = sortOption[1];
    const action = setOrder(order);
    const state = searchSlices(initialState, action);

    expect(state.order).toBe(order);
  });
});
