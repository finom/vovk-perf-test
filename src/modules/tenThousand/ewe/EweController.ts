import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewes")
export default class EweController {
  @operation({
    summary: "Get Ewes",
  })
  @get()
  static getEwes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewe",
  })
  @post("{id}")
  static createEwe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
