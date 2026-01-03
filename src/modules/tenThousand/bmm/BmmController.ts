import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmms")
export default class BmmController {
  @operation({
    summary: "Get Bmms",
  })
  @get()
  static getBmms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmm",
  })
  @post("{id}")
  static createBmm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
