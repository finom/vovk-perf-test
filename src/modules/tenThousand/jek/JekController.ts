import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jeks")
export default class JekController {
  @operation({
    summary: "Get Jeks",
  })
  @get()
  static getJeks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jek",
  })
  @post("{id}")
  static createJek = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
