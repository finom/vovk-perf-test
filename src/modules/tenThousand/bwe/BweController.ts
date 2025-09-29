import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwes")
export default class BweController {
  @operation({
    summary: "Get Bwes",
  })
  @get()
  static getBwes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwe",
  })
  @post("{id}")
  static createBwe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
