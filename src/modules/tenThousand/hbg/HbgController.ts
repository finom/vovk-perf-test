import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbgs")
export default class HbgController {
  @operation({
    summary: "Get Hbgs",
  })
  @get()
  static getHbgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbg",
  })
  @post("{id}")
  static createHbg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
