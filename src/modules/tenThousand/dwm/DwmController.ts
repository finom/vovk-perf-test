import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwms")
export default class DwmController {
  @operation({
    summary: "Get Dwms",
  })
  @get()
  static getDwms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwm",
  })
  @post("{id}")
  static createDwm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
