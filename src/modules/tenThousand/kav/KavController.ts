import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kavs")
export default class KavController {
  @operation({
    summary: "Get Kavs",
  })
  @get()
  static getKavs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kav",
  })
  @post("{id}")
  static createKav = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
