import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewms")
export default class EwmController {
  @operation({
    summary: "Get Ewms",
  })
  @get()
  static getEwms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewm",
  })
  @post("{id}")
  static createEwm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
