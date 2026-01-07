import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmg")
export default class BmgController {
  @operation({
    summary: "Get Bmg",
  })
  @get()
  static getBmg = procedure({
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
