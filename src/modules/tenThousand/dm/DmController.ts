import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dms")
export default class DmController {
  @operation({
    summary: "Get Dms",
  })
  @get()
  static getDms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dm",
  })
  @post("{id}")
  static createDm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
