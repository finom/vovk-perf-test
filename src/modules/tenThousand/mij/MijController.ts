import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mijs")
export default class MijController {
  @operation({
    summary: "Get Mijs",
  })
  @get()
  static getMijs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mij",
  })
  @post("{id}")
  static createMij = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
