import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyys")
export default class JyyController {
  @operation({
    summary: "Get Jyys",
  })
  @get()
  static getJyys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyy",
  })
  @post("{id}")
  static createJyy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
