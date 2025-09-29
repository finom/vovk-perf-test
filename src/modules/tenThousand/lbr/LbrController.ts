import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbrs")
export default class LbrController {
  @operation({
    summary: "Get Lbrs",
  })
  @get()
  static getLbrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbr",
  })
  @post("{id}")
  static createLbr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
