import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhus")
export default class MhuController {
  @operation({
    summary: "Get Mhus",
  })
  @get()
  static getMhus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhu",
  })
  @post("{id}")
  static createMhu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
