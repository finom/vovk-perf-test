import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bm")
export default class BmController {
  @operation({
    summary: "Get Bm",
  })
  @get()
  static getBm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bm",
  })
  @post("{id}")
  static createBm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
