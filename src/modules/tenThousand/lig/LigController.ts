import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ligs")
export default class LigController {
  @operation({
    summary: "Get Ligs",
  })
  @get()
  static getLigs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lig",
  })
  @post("{id}")
  static createLig = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
