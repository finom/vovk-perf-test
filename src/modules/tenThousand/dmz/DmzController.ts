import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmzs")
export default class DmzController {
  @operation({
    summary: "Get Dmzs",
  })
  @get()
  static getDmzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmz",
  })
  @post("{id}")
  static createDmz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
