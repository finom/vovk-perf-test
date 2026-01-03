import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hs")
export default class HsController {
  @operation({
    summary: "Get Hs",
  })
  @get()
  static getHs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hs",
  })
  @post("{id}")
  static createHs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
