import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxns")
export default class FxnController {
  @operation({
    summary: "Get Fxns",
  })
  @get()
  static getFxns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxn",
  })
  @post("{id}")
  static createFxn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
