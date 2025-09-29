import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlvs")
export default class JlvController {
  @operation({
    summary: "Get Jlvs",
  })
  @get()
  static getJlvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlv",
  })
  @post("{id}")
  static createJlv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
