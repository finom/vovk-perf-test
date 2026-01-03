import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxjs")
export default class FxjController {
  @operation({
    summary: "Get Fxjs",
  })
  @get()
  static getFxjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxj",
  })
  @post("{id}")
  static createFxj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
