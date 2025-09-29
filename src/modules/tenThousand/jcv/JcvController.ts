import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcvs")
export default class JcvController {
  @operation({
    summary: "Get Jcvs",
  })
  @get()
  static getJcvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcv",
  })
  @post("{id}")
  static createJcv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
