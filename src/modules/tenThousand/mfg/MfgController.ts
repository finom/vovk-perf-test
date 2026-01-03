import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfgs")
export default class MfgController {
  @operation({
    summary: "Get Mfgs",
  })
  @get()
  static getMfgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfg",
  })
  @post("{id}")
  static createMfg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
