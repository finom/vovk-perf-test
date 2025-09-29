import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehcs")
export default class EhcController {
  @operation({
    summary: "Get Ehcs",
  })
  @get()
  static getEhcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehc",
  })
  @post("{id}")
  static createEhc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
