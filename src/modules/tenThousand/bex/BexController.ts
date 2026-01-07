import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bex")
export default class BexController {
  @operation({
    summary: "Get Bex",
  })
  @get()
  static getBex = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bex",
  })
  @post("{id}")
  static createBex = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
