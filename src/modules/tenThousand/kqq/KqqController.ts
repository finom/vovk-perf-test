import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqqs")
export default class KqqController {
  @operation({
    summary: "Get Kqqs",
  })
  @get()
  static getKqqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqq",
  })
  @post("{id}")
  static createKqq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
