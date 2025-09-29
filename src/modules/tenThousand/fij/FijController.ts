import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fijs")
export default class FijController {
  @operation({
    summary: "Get Fijs",
  })
  @get()
  static getFijs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fij",
  })
  @post("{id}")
  static createFij = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
