import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkcs")
export default class LkcController {
  @operation({
    summary: "Get Lkcs",
  })
  @get()
  static getLkcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkc",
  })
  @post("{id}")
  static createLkc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
