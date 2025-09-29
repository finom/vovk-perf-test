import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwms")
export default class MwmController {
  @operation({
    summary: "Get Mwms",
  })
  @get()
  static getMwms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwm",
  })
  @post("{id}")
  static createMwm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
