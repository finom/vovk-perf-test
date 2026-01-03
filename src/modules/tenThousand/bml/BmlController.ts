import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmls")
export default class BmlController {
  @operation({
    summary: "Get Bmls",
  })
  @get()
  static getBmls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bml",
  })
  @post("{id}")
  static createBml = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
