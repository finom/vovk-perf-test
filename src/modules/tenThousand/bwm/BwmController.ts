import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwms")
export default class BwmController {
  @operation({
    summary: "Get Bwms",
  })
  @get()
  static getBwms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwm",
  })
  @post("{id}")
  static createBwm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
