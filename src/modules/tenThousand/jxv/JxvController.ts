import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxvs")
export default class JxvController {
  @operation({
    summary: "Get Jxvs",
  })
  @get()
  static getJxvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxv",
  })
  @post("{id}")
  static createJxv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
