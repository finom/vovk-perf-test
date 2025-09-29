import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("laqs")
export default class LaqController {
  @operation({
    summary: "Get Laqs",
  })
  @get()
  static getLaqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Laq",
  })
  @post("{id}")
  static createLaq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
