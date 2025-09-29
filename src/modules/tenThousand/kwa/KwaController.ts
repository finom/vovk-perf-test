import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kwas")
export default class KwaController {
  @operation({
    summary: "Get Kwas",
  })
  @get()
  static getKwas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kwa",
  })
  @post("{id}")
  static createKwa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
