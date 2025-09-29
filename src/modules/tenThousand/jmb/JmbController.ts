import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmbs")
export default class JmbController {
  @operation({
    summary: "Get Jmbs",
  })
  @get()
  static getJmbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmb",
  })
  @post("{id}")
  static createJmb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
