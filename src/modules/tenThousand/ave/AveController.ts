import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aves")
export default class AveController {
  @operation({
    summary: "Get Aves",
  })
  @get()
  static getAves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ave",
  })
  @post("{id}")
  static createAve = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
