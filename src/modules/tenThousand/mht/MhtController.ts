import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhts")
export default class MhtController {
  @operation({
    summary: "Get Mhts",
  })
  @get()
  static getMhts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mht",
  })
  @post("{id}")
  static createMht = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
