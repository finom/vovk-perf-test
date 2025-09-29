import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gaqs")
export default class GaqController {
  @operation({
    summary: "Get Gaqs",
  })
  @get()
  static getGaqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gaq",
  })
  @post("{id}")
  static createGaq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
