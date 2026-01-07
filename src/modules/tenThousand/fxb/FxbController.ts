import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxb")
export default class FxbController {
  @operation({
    summary: "Get Fxb",
  })
  @get()
  static getFxb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxb",
  })
  @post("{id}")
  static createFxb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
