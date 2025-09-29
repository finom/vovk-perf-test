import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("leas")
export default class LeaController {
  @operation({
    summary: "Get Leas",
  })
  @get()
  static getLeas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lea",
  })
  @post("{id}")
  static createLea = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
