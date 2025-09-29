import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwos")
export default class MwoController {
  @operation({
    summary: "Get Mwos",
  })
  @get()
  static getMwos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwo",
  })
  @post("{id}")
  static createMwo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
