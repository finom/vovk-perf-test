import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("duis")
export default class DuiController {
  @operation({
    summary: "Get Duis",
  })
  @get()
  static getDuis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dui",
  })
  @post("{id}")
  static createDui = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
