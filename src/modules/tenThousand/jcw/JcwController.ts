import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcws")
export default class JcwController {
  @operation({
    summary: "Get Jcws",
  })
  @get()
  static getJcws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcw",
  })
  @post("{id}")
  static createJcw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
