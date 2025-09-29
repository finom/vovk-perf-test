import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqqs")
export default class BqqController {
  @operation({
    summary: "Get Bqqs",
  })
  @get()
  static getBqqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqq",
  })
  @post("{id}")
  static createBqq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
