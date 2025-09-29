import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdzs")
export default class JdzController {
  @operation({
    summary: "Get Jdzs",
  })
  @get()
  static getJdzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdz",
  })
  @post("{id}")
  static createJdz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
