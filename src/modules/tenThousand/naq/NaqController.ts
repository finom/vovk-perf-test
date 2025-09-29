import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("naqs")
export default class NaqController {
  @operation({
    summary: "Get Naqs",
  })
  @get()
  static getNaqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Naq",
  })
  @post("{id}")
  static createNaq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
