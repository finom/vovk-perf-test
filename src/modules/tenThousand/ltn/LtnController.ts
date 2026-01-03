import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltns")
export default class LtnController {
  @operation({
    summary: "Get Ltns",
  })
  @get()
  static getLtns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltn",
  })
  @post("{id}")
  static createLtn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
