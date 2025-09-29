import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wls")
export default class WlController {
  @operation({
    summary: "Get Wls",
  })
  @get()
  static getWls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wl",
  })
  @post("{id}")
  static createWl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
