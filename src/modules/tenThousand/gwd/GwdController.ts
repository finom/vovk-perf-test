import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwds")
export default class GwdController {
  @operation({
    summary: "Get Gwds",
  })
  @get()
  static getGwds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwd",
  })
  @post("{id}")
  static createGwd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
