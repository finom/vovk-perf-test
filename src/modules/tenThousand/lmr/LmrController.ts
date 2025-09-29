import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmrs")
export default class LmrController {
  @operation({
    summary: "Get Lmrs",
  })
  @get()
  static getLmrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmr",
  })
  @post("{id}")
  static createLmr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
