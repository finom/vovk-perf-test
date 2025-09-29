import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llos")
export default class LloController {
  @operation({
    summary: "Get Llos",
  })
  @get()
  static getLlos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llo",
  })
  @post("{id}")
  static createLlo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
