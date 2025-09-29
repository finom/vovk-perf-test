import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqts")
export default class JqtController {
  @operation({
    summary: "Get Jqts",
  })
  @get()
  static getJqts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqt",
  })
  @post("{id}")
  static createJqt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
