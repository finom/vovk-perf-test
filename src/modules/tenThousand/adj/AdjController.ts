import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adjs")
export default class AdjController {
  @operation({
    summary: "Get Adjs",
  })
  @get()
  static getAdjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adj",
  })
  @post("{id}")
  static createAdj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
