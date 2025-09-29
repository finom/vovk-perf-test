import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crws")
export default class CrwController {
  @operation({
    summary: "Get Crws",
  })
  @get()
  static getCrws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crw",
  })
  @post("{id}")
  static createCrw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
