import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxu")
export default class FxuController {
  @operation({
    summary: "Get Fxu",
  })
  @get()
  static getFxu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxu",
  })
  @post("{id}")
  static createFxu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
