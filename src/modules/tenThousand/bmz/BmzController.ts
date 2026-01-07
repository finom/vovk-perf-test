import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmz")
export default class BmzController {
  @operation({
    summary: "Get Bmz",
  })
  @get()
  static getBmz = procedure({
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
