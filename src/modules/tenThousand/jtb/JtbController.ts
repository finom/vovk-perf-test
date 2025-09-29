import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtbs")
export default class JtbController {
  @operation({
    summary: "Get Jtbs",
  })
  @get()
  static getJtbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtb",
  })
  @post("{id}")
  static createJtb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
