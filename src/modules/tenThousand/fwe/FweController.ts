import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwes")
export default class FweController {
  @operation({
    summary: "Get Fwes",
  })
  @get()
  static getFwes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwe",
  })
  @post("{id}")
  static createFwe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
