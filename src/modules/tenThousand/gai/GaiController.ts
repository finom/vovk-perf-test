import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gais")
export default class GaiController {
  @operation({
    summary: "Get Gais",
  })
  @get()
  static getGais = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gai",
  })
  @post("{id}")
  static createGai = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
