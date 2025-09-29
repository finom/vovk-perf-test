import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fics")
export default class FicController {
  @operation({
    summary: "Get Fics",
  })
  @get()
  static getFics = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fic",
  })
  @post("{id}")
  static createFic = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
