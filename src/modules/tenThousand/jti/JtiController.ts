import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtis")
export default class JtiController {
  @operation({
    summary: "Get Jtis",
  })
  @get()
  static getJtis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jti",
  })
  @post("{id}")
  static createJti = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
