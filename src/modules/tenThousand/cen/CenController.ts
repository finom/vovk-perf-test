import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cens")
export default class CenController {
  @operation({
    summary: "Get Cens",
  })
  @get()
  static getCens = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cen",
  })
  @post("{id}")
  static createCen = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
