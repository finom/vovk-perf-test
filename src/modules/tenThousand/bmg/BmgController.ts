import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmgs")
export default class BmgController {
  @operation({
    summary: "Get Bmgs",
  })
  @get()
  static getBmgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmg",
  })
  @post("{id}")
  static createBmg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
