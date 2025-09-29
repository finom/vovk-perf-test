import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpts")
export default class DptController {
  @operation({
    summary: "Get Dpts",
  })
  @get()
  static getDpts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpt",
  })
  @post("{id}")
  static createDpt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
