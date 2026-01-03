import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvzs")
export default class FvzController {
  @operation({
    summary: "Get Fvzs",
  })
  @get()
  static getFvzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvz",
  })
  @post("{id}")
  static createFvz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
