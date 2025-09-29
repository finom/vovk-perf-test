import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwms")
export default class IwmController {
  @operation({
    summary: "Get Iwms",
  })
  @get()
  static getIwms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwm",
  })
  @post("{id}")
  static createIwm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
