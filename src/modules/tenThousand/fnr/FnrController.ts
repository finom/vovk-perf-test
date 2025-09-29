import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnrs")
export default class FnrController {
  @operation({
    summary: "Get Fnrs",
  })
  @get()
  static getFnrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnr",
  })
  @post("{id}")
  static createFnr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
