import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwds")
export default class KwdController {
  @operation({
    summary: "Get Kwds",
  })
  @get()
  static getKwds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwd",
  })
  @post("{id}")
  static createKwd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
