import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lijs")
export default class LijController {
  @operation({
    summary: "Get Lijs",
  })
  @get()
  static getLijs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lij",
  })
  @post("{id}")
  static createLij = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
