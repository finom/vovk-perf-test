import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxq")
export default class FxqController {
  @operation({
    summary: "Get Fxq",
  })
  @get()
  static getFxq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxq",
  })
  @post("{id}")
  static createFxq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
