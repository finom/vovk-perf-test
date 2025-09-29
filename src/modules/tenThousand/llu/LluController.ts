import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llus")
export default class LluController {
  @operation({
    summary: "Get Llus",
  })
  @get()
  static getLlus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Llu",
  })
  @post("{id}")
  static createLlu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
