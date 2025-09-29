import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjvs")
export default class JjvController {
  @operation({
    summary: "Get Jjvs",
  })
  @get()
  static getJjvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjv",
  })
  @post("{id}")
  static createJjv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
