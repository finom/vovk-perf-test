import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghx")
export default class GhxController {
  @operation({
    summary: "Get Ghx",
  })
  @get()
  static getGhx = procedure({
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
