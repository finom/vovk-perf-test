import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amws")
export default class AmwController {
  @operation({
    summary: "Get Amws",
  })
  @get()
  static getAmws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amw",
  })
  @post("{id}")
  static createAmw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
