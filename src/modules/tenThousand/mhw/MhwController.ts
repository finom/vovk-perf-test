import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhws")
export default class MhwController {
  @operation({
    summary: "Get Mhws",
  })
  @get()
  static getMhws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhw",
  })
  @post("{id}")
  static createMhw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
