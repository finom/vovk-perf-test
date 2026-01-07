import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdx")
export default class BdxController {
  @operation({
    summary: "Get Bdx",
  })
  @get()
  static getBdx = procedure({
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
