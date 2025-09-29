import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jaas")
export default class JaaController {
  @operation({
    summary: "Get Jaas",
  })
  @get()
  static getJaas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jaa",
  })
  @post("{id}")
  static createJaa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
