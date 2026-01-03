import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxs")
export default class FxsController {
  @operation({
    summary: "Get Fxs",
  })
  @get()
  static getFxs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxs",
  })
  @post("{id}")
  static createFxs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
