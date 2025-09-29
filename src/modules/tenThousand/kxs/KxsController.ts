import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxs")
export default class KxsController {
  @operation({
    summary: "Get Kxs",
  })
  @get()
  static getKxs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxs",
  })
  @post("{id}")
  static createKxs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
