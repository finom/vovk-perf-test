import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iaqs")
export default class IaqController {
  @operation({
    summary: "Get Iaqs",
  })
  @get()
  static getIaqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iaq",
  })
  @post("{id}")
  static createIaq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
