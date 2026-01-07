import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmp")
export default class CmpController {
  @operation({
    summary: "Get Cmp",
  })
  @get()
  static getCmp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmp",
  })
  @post("{id}")
  static createCmp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
