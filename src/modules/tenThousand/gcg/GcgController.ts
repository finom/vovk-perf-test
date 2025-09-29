import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcgs")
export default class GcgController {
  @operation({
    summary: "Get Gcgs",
  })
  @get()
  static getGcgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcg",
  })
  @post("{id}")
  static createGcg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
