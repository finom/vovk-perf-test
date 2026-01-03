import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdxes")
export default class BdxController {
  @operation({
    summary: "Get Bdxes",
  })
  @get()
  static getBdxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdx",
  })
  @post("{id}")
  static createBdx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
