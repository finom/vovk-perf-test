import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dms")
export default class DmsController {
  @operation({
    summary: "Get Dms",
  })
  @get()
  static getDms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dms",
  })
  @post("{id}")
  static createDms = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
