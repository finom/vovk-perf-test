import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drxes")
export default class DrxController {
  @operation({
    summary: "Get Drxes",
  })
  @get()
  static getDrxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drx",
  })
  @post("{id}")
  static createDrx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
