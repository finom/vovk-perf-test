import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlzs")
export default class JlzController {
  @operation({
    summary: "Get Jlzs",
  })
  @get()
  static getJlzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlz",
  })
  @post("{id}")
  static createJlz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
