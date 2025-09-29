import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idws")
export default class IdwController {
  @operation({
    summary: "Get Idws",
  })
  @get()
  static getIdws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idw",
  })
  @post("{id}")
  static createIdw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
