import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejos")
export default class EjoController {
  @operation({
    summary: "Get Ejos",
  })
  @get()
  static getEjos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejo",
  })
  @post("{id}")
  static createEjo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
