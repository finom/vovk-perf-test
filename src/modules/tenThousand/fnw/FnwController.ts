import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnws")
export default class FnwController {
  @operation({
    summary: "Get Fnws",
  })
  @get()
  static getFnws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnw",
  })
  @post("{id}")
  static createFnw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
