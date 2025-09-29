import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("caqs")
export default class CaqController {
  @operation({
    summary: "Get Caqs",
  })
  @get()
  static getCaqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Caq",
  })
  @post("{id}")
  static createCaq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
