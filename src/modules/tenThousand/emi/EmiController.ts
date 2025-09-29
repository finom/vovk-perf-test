import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emis")
export default class EmiController {
  @operation({
    summary: "Get Emis",
  })
  @get()
  static getEmis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emi",
  })
  @post("{id}")
  static createEmi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
