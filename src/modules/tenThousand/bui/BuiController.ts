import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("buis")
export default class BuiController {
  @operation({
    summary: "Get Buis",
  })
  @get()
  static getBuis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bui",
  })
  @post("{id}")
  static createBui = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
