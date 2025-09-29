import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pgs")
export default class PgController {
  @operation({
    summary: "Get Pgs",
  })
  @get()
  static getPgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pg",
  })
  @post("{id}")
  static createPg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
