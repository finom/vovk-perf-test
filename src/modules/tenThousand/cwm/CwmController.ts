import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwms")
export default class CwmController {
  @operation({
    summary: "Get Cwms",
  })
  @get()
  static getCwms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwm",
  })
  @post("{id}")
  static createCwm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
