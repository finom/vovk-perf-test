import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxqs")
export default class JxqController {
  @operation({
    summary: "Get Jxqs",
  })
  @get()
  static getJxqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxq",
  })
  @post("{id}")
  static createJxq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
