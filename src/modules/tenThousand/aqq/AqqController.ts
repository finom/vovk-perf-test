import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqqs")
export default class AqqController {
  @operation({
    summary: "Get Aqqs",
  })
  @get()
  static getAqqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqq",
  })
  @post("{id}")
  static createAqq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
