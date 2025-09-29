import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfvs")
export default class JfvController {
  @operation({
    summary: "Get Jfvs",
  })
  @get()
  static getJfvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfv",
  })
  @post("{id}")
  static createJfv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
