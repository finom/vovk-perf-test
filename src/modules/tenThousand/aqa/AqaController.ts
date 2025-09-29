import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqas")
export default class AqaController {
  @operation({
    summary: "Get Aqas",
  })
  @get()
  static getAqas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqa",
  })
  @post("{id}")
  static createAqa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
