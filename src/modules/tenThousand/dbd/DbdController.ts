import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbds")
export default class DbdController {
  @operation({
    summary: "Get Dbds",
  })
  @get()
  static getDbds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbd",
  })
  @post("{id}")
  static createDbd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
