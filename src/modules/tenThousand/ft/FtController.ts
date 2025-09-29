import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fts")
export default class FtController {
  @operation({
    summary: "Get Fts",
  })
  @get()
  static getFts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ft",
  })
  @post("{id}")
  static createFt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
