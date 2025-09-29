import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnns")
export default class GnnController {
  @operation({
    summary: "Get Gnns",
  })
  @get()
  static getGnns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnn",
  })
  @post("{id}")
  static createGnn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
