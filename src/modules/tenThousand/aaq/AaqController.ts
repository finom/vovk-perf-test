import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aaqs")
export default class AaqController {
  @operation({
    summary: "Get Aaqs",
  })
  @get()
  static getAaqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aaq",
  })
  @post("{id}")
  static createAaq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
