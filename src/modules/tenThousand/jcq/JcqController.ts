import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcqs")
export default class JcqController {
  @operation({
    summary: "Get Jcqs",
  })
  @get()
  static getJcqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcq",
  })
  @post("{id}")
  static createJcq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
