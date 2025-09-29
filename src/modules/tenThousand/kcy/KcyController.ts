import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcies")
export default class KcyController {
  @operation({
    summary: "Get Kcies",
  })
  @get()
  static getKcies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcy",
  })
  @post("{id}")
  static createKcy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
