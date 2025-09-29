import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecds")
export default class EcdController {
  @operation({
    summary: "Get Ecds",
  })
  @get()
  static getEcds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecd",
  })
  @post("{id}")
  static createEcd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
