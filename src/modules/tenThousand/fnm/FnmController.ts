import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnms")
export default class FnmController {
  @operation({
    summary: "Get Fnms",
  })
  @get()
  static getFnms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnm",
  })
  @post("{id}")
  static createFnm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
