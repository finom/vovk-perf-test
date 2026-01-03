import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmzs")
export default class BmzController {
  @operation({
    summary: "Get Bmzs",
  })
  @get()
  static getBmzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmz",
  })
  @post("{id}")
  static createBmz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
