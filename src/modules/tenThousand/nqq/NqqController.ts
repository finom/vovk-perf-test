import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqqs")
export default class NqqController {
  @operation({
    summary: "Get Nqqs",
  })
  @get()
  static getNqqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqq",
  })
  @post("{id}")
  static createNqq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
