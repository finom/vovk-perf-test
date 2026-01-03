import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxcs")
export default class FxcController {
  @operation({
    summary: "Get Fxcs",
  })
  @get()
  static getFxcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxc",
  })
  @post("{id}")
  static createFxc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
