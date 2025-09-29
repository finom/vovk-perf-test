import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwms")
export default class FwmController {
  @operation({
    summary: "Get Fwms",
  })
  @get()
  static getFwms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwm",
  })
  @post("{id}")
  static createFwm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
