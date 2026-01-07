import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxj")
export default class FxjController {
  @operation({
    summary: "Get Fxj",
  })
  @get()
  static getFxj = procedure({
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
