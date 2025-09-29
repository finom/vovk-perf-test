import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("baqs")
export default class BaqController {
  @operation({
    summary: "Get Baqs",
  })
  @get()
  static getBaqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Baq",
  })
  @post("{id}")
  static createBaq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
