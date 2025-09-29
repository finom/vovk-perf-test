import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krls")
export default class KrlController {
  @operation({
    summary: "Get Krls",
  })
  @get()
  static getKrls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krl",
  })
  @post("{id}")
  static createKrl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
