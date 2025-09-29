import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkts")
export default class GktController {
  @operation({
    summary: "Get Gkts",
  })
  @get()
  static getGkts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkt",
  })
  @post("{id}")
  static createGkt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
