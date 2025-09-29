import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwes")
export default class IweController {
  @operation({
    summary: "Get Iwes",
  })
  @get()
  static getIwes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwe",
  })
  @post("{id}")
  static createIwe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
