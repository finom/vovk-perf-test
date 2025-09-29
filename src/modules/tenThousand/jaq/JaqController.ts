import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jaqs")
export default class JaqController {
  @operation({
    summary: "Get Jaqs",
  })
  @get()
  static getJaqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jaq",
  })
  @post("{id}")
  static createJaq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
