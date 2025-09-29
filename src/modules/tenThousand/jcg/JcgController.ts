import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcgs")
export default class JcgController {
  @operation({
    summary: "Get Jcgs",
  })
  @get()
  static getJcgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcg",
  })
  @post("{id}")
  static createJcg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
