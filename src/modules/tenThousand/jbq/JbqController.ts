import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbqs")
export default class JbqController {
  @operation({
    summary: "Get Jbqs",
  })
  @get()
  static getJbqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbq",
  })
  @post("{id}")
  static createJbq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
