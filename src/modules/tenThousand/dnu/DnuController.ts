import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnus")
export default class DnuController {
  @operation({
    summary: "Get Dnus",
  })
  @get()
  static getDnus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnu",
  })
  @post("{id}")
  static createDnu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
