import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwms")
export default class LwmController {
  @operation({
    summary: "Get Lwms",
  })
  @get()
  static getLwms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwm",
  })
  @post("{id}")
  static createLwm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
