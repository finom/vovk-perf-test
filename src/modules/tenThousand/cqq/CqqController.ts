import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqqs")
export default class CqqController {
  @operation({
    summary: "Get Cqqs",
  })
  @get()
  static getCqqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqq",
  })
  @post("{id}")
  static createCqq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
