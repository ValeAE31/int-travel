import { describe, beforeEach, test, expect } from "vitest";
import Accommodation from "../accommodation.ts";

describe("Accommodation", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = new Accommodation(21,"TestA");
    void accommodation;
  });

  describe("Accommodation name", () => {
    test("should get name correctly", () => {
      expect(accommodation.getName()).toBe("TestA");
    });
    test("should set name correctly", () => {
      accommodation.setName("TestB");
      expect(accommodation.getName()).toBe("TestB");
    });
    test("should set name throw error", () => {
      expect(() => accommodation.setName("")).toThrow();
    });

    // TODO: agregar más tests para el nombre
  });

  describe("Accommodation cost", () => {
    test("should get cost correctly", () => {
      expect(accommodation.getCost()).toBe(21);
    });
    test("should set cost correctly", () => {
      accommodation.setCost(30);
      expect(accommodation.getCost()).toBe(30);
    });
    test("should set cost throw error", () => {
      expect(() => accommodation.setCost("")).toThrow();
    });

    test.todo("agregar tests para el costo");
  });
});
