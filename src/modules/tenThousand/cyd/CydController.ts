import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyds")
export default class CydController {
  @operation({
    summary: "Get Cyds",
  })
  @get()
  static getCyds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyd",
  })
  @post("{id}")
  static createCyd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
