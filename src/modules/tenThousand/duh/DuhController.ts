import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("duhs")
export default class DuhController {
  @operation({
    summary: "Get Duhs",
  })
  @get()
  static getDuhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Duh",
  })
  @post("{id}")
  static createDuh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
