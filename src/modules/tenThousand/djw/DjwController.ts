import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djws")
export default class DjwController {
  @operation({
    summary: "Get Djws",
  })
  @get()
  static getDjws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djw",
  })
  @post("{id}")
  static createDjw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
