import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghqs")
export default class GhqController {
  @operation({
    summary: "Get Ghqs",
  })
  @get()
  static getGhqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghq",
  })
  @post("{id}")
  static createGhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
