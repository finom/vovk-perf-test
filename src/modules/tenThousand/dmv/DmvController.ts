import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmvs")
export default class DmvController {
  @operation({
    summary: "Get Dmvs",
  })
  @get()
  static getDmvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmv",
  })
  @post("{id}")
  static createDmv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
