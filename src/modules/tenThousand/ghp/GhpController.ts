import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghps")
export default class GhpController {
  @operation({
    summary: "Get Ghps",
  })
  @get()
  static getGhps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghp",
  })
  @post("{id}")
  static createGhp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
