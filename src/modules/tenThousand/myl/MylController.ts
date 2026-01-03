import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myls")
export default class MylController {
  @operation({
    summary: "Get Myls",
  })
  @get()
  static getMyls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myl",
  })
  @post("{id}")
  static createMyl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
