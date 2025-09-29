import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eurs")
export default class EurController {
  @operation({
    summary: "Get Eurs",
  })
  @get()
  static getEurs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eur",
  })
  @post("{id}")
  static createEur = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
