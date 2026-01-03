import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmvs")
export default class BmvController {
  @operation({
    summary: "Get Bmvs",
  })
  @get()
  static getBmvs = procedure({
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
