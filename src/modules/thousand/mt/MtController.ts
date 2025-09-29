import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mts")
export default class MtController {
  @operation({
    summary: "Get Mts",
  })
  @get()
  static getMts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mt",
  })
  @post("{id}")
  static createMt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
