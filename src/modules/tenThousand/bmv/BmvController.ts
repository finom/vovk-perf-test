import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmv")
export default class BmvController {
  @operation({
    summary: "Get Bmv",
  })
  @get()
  static getBmv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmv",
  })
  @post("{id}")
  static createBmv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
