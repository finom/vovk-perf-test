import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmrs")
export default class BmrController {
  @operation({
    summary: "Get Bmrs",
  })
  @get()
  static getBmrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmr",
  })
  @post("{id}")
  static createBmr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
