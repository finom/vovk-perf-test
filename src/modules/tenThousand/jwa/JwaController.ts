import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwas")
export default class JwaController {
  @operation({
    summary: "Get Jwas",
  })
  @get()
  static getJwas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwa",
  })
  @post("{id}")
  static createJwa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
