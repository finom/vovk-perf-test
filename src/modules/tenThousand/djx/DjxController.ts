import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djxes")
export default class DjxController {
  @operation({
    summary: "Get Djxes",
  })
  @get()
  static getDjxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djx",
  })
  @post("{id}")
  static createDjx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
