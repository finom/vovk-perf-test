import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klls")
export default class KllController {
  @operation({
    summary: "Get Klls",
  })
  @get()
  static getKlls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kll",
  })
  @post("{id}")
  static createKll = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
