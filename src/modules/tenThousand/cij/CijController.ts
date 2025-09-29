import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cijs")
export default class CijController {
  @operation({
    summary: "Get Cijs",
  })
  @get()
  static getCijs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cij",
  })
  @post("{id}")
  static createCij = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
