import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghxes")
export default class GhxController {
  @operation({
    summary: "Get Ghxes",
  })
  @get()
  static getGhxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghx",
  })
  @post("{id}")
  static createGhx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
