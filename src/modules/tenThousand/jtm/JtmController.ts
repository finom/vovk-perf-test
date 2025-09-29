import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtms")
export default class JtmController {
  @operation({
    summary: "Get Jtms",
  })
  @get()
  static getJtms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtm",
  })
  @post("{id}")
  static createJtm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
