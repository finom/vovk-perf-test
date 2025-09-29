import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fuis")
export default class FuiController {
  @operation({
    summary: "Get Fuis",
  })
  @get()
  static getFuis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fui",
  })
  @post("{id}")
  static createFui = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
