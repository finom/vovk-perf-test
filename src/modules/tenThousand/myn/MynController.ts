import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myns")
export default class MynController {
  @operation({
    summary: "Get Myns",
  })
  @get()
  static getMyns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myn",
  })
  @post("{id}")
  static createMyn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
