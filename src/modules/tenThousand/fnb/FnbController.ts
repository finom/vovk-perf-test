import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnbs")
export default class FnbController {
  @operation({
    summary: "Get Fnbs",
  })
  @get()
  static getFnbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnb",
  })
  @post("{id}")
  static createFnb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
