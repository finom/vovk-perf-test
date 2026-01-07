import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoc")
export default class AocController {
  @operation({
    summary: "Get Aoc",
  })
  @get()
  static getAoc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aoc",
  })
  @post("{id}")
  static createAoc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
