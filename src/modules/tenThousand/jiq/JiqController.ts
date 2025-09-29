import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jiqs")
export default class JiqController {
  @operation({
    summary: "Get Jiqs",
  })
  @get()
  static getJiqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jiq",
  })
  @post("{id}")
  static createJiq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
