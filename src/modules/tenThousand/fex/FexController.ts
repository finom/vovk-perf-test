import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fexes")
export default class FexController {
  @operation({
    summary: "Get Fexes",
  })
  @get()
  static getFexes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fex",
  })
  @post("{id}")
  static createFex = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
