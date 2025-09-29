import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbzs")
export default class HbzController {
  @operation({
    summary: "Get Hbzs",
  })
  @get()
  static getHbzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbz",
  })
  @post("{id}")
  static createHbz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
