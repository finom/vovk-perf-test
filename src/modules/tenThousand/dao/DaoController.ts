import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("daos")
export default class DaoController {
  @operation({
    summary: "Get Daos",
  })
  @get()
  static getDaos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dao",
  })
  @post("{id}")
  static createDao = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
