import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxzs")
export default class JxzController {
  @operation({
    summary: "Get Jxzs",
  })
  @get()
  static getJxzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxz",
  })
  @post("{id}")
  static createJxz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
