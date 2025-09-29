import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvws")
export default class FvwController {
  @operation({
    summary: "Get Fvws",
  })
  @get()
  static getFvws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvw",
  })
  @post("{id}")
  static createFvw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
