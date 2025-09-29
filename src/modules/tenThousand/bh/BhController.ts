import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhs")
export default class BhController {
  @operation({
    summary: "Get Bhs",
  })
  @get()
  static getBhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bh",
  })
  @post("{id}")
  static createBh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
