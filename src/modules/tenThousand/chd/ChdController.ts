import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chd")
export default class ChdController {
  @operation({
    summary: "Get Chd",
  })
  @get()
  static getChd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chd",
  })
  @post("{id}")
  static createChd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
