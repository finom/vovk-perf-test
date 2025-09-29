import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwms")
export default class GwmController {
  @operation({
    summary: "Get Gwms",
  })
  @get()
  static getGwms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwm",
  })
  @post("{id}")
  static createGwm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
