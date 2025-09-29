import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcns")
export default class BcnController {
  @operation({
    summary: "Get Bcns",
  })
  @get()
  static getBcns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcn",
  })
  @post("{id}")
  static createBcn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
