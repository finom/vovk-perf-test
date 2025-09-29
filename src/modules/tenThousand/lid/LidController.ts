import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lids")
export default class LidController {
  @operation({
    summary: "Get Lids",
  })
  @get()
  static getLids = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lid",
  })
  @post("{id}")
  static createLid = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
