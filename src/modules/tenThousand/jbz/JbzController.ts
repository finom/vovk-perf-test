import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbzs")
export default class JbzController {
  @operation({
    summary: "Get Jbzs",
  })
  @get()
  static getJbzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbz",
  })
  @post("{id}")
  static createJbz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
