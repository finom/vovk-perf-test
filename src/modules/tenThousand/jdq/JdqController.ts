import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdqs")
export default class JdqController {
  @operation({
    summary: "Get Jdqs",
  })
  @get()
  static getJdqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdq",
  })
  @post("{id}")
  static createJdq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
