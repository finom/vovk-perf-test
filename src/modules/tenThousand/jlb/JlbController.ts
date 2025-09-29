import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlbs")
export default class JlbController {
  @operation({
    summary: "Get Jlbs",
  })
  @get()
  static getJlbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlb",
  })
  @post("{id}")
  static createJlb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
