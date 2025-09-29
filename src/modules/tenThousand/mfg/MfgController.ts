import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfgs")
export default class MfgController {
  @operation({
    summary: "Get Mfgs",
  })
  @get()
  static getMfgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfg",
  })
  @post("{id}")
  static createMfg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
