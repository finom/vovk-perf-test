import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqqs")
export default class HqqController {
  @operation({
    summary: "Get Hqqs",
  })
  @get()
  static getHqqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqq",
  })
  @post("{id}")
  static createHqq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
