import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwes")
export default class MweController {
  @operation({
    summary: "Get Mwes",
  })
  @get()
  static getMwes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwe",
  })
  @post("{id}")
  static createMwe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
