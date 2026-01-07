import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmm")
export default class BmmController {
  @operation({
    summary: "Get Bmm",
  })
  @get()
  static getBmm = procedure({
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
