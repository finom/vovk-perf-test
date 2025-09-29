import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyps")
export default class CypController {
  @operation({
    summary: "Get Cyps",
  })
  @get()
  static getCyps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyp",
  })
  @post("{id}")
  static createCyp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
