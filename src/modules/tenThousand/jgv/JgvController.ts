import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgvs")
export default class JgvController {
  @operation({
    summary: "Get Jgvs",
  })
  @get()
  static getJgvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgv",
  })
  @post("{id}")
  static createJgv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
