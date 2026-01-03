import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkws")
export default class BkwController {
  @operation({
    summary: "Get Bkws",
  })
  @get()
  static getBkws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkw",
  })
  @post("{id}")
  static createBkw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
