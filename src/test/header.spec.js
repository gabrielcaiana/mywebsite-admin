import Header from "../components/Header/index.vue";
import { mount } from "@vue/test-utils";

describe("Header", () => {
  it("should correctly render", () => {
    const wrapper = mount(Header);
    expect(wrapper).toBeTruthy();
  });
});
