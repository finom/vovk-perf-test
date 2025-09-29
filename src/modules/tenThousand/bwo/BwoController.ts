import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwos")
export default class BwoController {
  @operation({
    summary: "Get Bwos",
  })
  @get()
  static getBwos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwo",
  })
  @post("{id}")
  static createBwo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
