import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghk")
export default class GhkController {
  @operation({
    summary: "Get Ghk",
  })
  @get()
  static getGhk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghk",
  })
  @post("{id}")
  static createGhk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
