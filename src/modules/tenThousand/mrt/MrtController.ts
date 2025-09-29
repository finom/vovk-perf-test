import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrts")
export default class MrtController {
  @operation({
    summary: "Get Mrts",
  })
  @get()
  static getMrts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrt",
  })
  @post("{id}")
  static createMrt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
