import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcbs")
export default class JcbController {
  @operation({
    summary: "Get Jcbs",
  })
  @get()
  static getJcbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcb",
  })
  @post("{id}")
  static createJcb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
