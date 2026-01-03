import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxis")
export default class FxiController {
  @operation({
    summary: "Get Fxis",
  })
  @get()
  static getFxis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxi",
  })
  @post("{id}")
  static createFxi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
