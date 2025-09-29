import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsgs")
export default class LsgController {
  @operation({
    summary: "Get Lsgs",
  })
  @get()
  static getLsgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsg",
  })
  @post("{id}")
  static createLsg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
