import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gats")
export default class GatController {
  @operation({
    summary: "Get Gats",
  })
  @get()
  static getGats = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gat",
  })
  @post("{id}")
  static createGat = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
