import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxe")
export default class FxeController {
  @operation({
    summary: "Get Fxe",
  })
  @get()
  static getFxe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxe",
  })
  @post("{id}")
  static createFxe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
