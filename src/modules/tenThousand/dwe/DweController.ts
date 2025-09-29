import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwes")
export default class DweController {
  @operation({
    summary: "Get Dwes",
  })
  @get()
  static getDwes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwe",
  })
  @post("{id}")
  static createDwe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
