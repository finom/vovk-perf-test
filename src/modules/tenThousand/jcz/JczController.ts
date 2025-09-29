import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jczs")
export default class JczController {
  @operation({
    summary: "Get Jczs",
  })
  @get()
  static getJczs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcz",
  })
  @post("{id}")
  static createJcz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
