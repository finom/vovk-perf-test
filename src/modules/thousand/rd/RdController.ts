import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rds")
export default class RdController {
  @operation({
    summary: "Get Rds",
  })
  @get()
  static getRds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rd",
  })
  @post("{id}")
  static createRd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
