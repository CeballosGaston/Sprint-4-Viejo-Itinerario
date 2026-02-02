import { describe, it, expect, vi, beforeEach } from "vitest";
import { fetchApi } from "./dist/apiService.js";

beforeEach(() => {
  vi.restoreAllMocks();
});

describe("fetchApi", () => {
  it("devuelve un objeto JSON", async () => {
    const mockData = { joke: "Hola mundo" };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const result = await fetchApi("https://fake.api");

    expect(typeof result).toBe("object");

    expect(result).toHaveProperty("joke");
  });
});
