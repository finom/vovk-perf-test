import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqns")
export default class AqnController {
  @operation({
    summary: "Get Aqns",
  })
  @get()
  static getAqns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqn",
  })
  @post("{id}")
  static createAqn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
