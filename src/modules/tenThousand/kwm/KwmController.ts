import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwms")
export default class KwmController {
  @operation({
    summary: "Get Kwms",
  })
  @get()
  static getKwms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwm",
  })
  @post("{id}")
  static createKwm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
