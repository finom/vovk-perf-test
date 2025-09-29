import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfqs")
export default class JfqController {
  @operation({
    summary: "Get Jfqs",
  })
  @get()
  static getJfqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfq",
  })
  @post("{id}")
  static createJfq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
