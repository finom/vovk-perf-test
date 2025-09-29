import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqls")
export default class AqlController {
  @operation({
    summary: "Get Aqls",
  })
  @get()
  static getAqls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aql",
  })
  @post("{id}")
  static createAql = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
