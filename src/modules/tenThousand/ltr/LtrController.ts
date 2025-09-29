import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltrs")
export default class LtrController {
  @operation({
    summary: "Get Ltrs",
  })
  @get()
  static getLtrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltr",
  })
  @post("{id}")
  static createLtr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
