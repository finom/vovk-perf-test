import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgs")
export default class LgController {
  @operation({
    summary: "Get Lgs",
  })
  @get()
  static getLgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lg",
  })
  @post("{id}")
  static createLg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
