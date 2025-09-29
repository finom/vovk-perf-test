import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqqs")
export default class IqqController {
  @operation({
    summary: "Get Iqqs",
  })
  @get()
  static getIqqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqq",
  })
  @post("{id}")
  static createIqq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
