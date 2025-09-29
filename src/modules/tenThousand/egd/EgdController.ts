import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egds")
export default class EgdController {
  @operation({
    summary: "Get Egds",
  })
  @get()
  static getEgds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egd",
  })
  @post("{id}")
  static createEgd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
