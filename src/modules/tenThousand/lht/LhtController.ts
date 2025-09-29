import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhts")
export default class LhtController {
  @operation({
    summary: "Get Lhts",
  })
  @get()
  static getLhts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lht",
  })
  @post("{id}")
  static createLht = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
