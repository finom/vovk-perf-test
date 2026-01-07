import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxk")
export default class FxkController {
  @operation({
    summary: "Get Fxk",
  })
  @get()
  static getFxk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxk",
  })
  @post("{id}")
  static createFxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
