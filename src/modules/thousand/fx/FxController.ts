import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxes")
export default class FxController {
  @operation({
    summary: "Get Fxes",
  })
  @get()
  static getFxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fx",
  })
  @post("{id}")
  static createFx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
