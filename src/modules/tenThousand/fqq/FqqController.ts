import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqqs")
export default class FqqController {
  @operation({
    summary: "Get Fqqs",
  })
  @get()
  static getFqqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqq",
  })
  @post("{id}")
  static createFqq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
