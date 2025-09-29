import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcxes")
export default class JcxController {
  @operation({
    summary: "Get Jcxes",
  })
  @get()
  static getJcxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcx",
  })
  @post("{id}")
  static createJcx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
