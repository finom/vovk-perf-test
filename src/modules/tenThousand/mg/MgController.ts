import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgs")
export default class MgController {
  @operation({
    summary: "Get Mgs",
  })
  @get()
  static getMgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mg",
  })
  @post("{id}")
  static createMg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
