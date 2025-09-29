import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbzs")
export default class KbzController {
  @operation({
    summary: "Get Kbzs",
  })
  @get()
  static getKbzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbz",
  })
  @post("{id}")
  static createKbz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
