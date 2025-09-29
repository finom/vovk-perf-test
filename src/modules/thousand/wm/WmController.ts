import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wms")
export default class WmController {
  @operation({
    summary: "Get Wms",
  })
  @get()
  static getWms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wm",
  })
  @post("{id}")
  static createWm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
