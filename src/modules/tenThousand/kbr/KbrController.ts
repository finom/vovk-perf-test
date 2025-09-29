import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbrs")
export default class KbrController {
  @operation({
    summary: "Get Kbrs",
  })
  @get()
  static getKbrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbr",
  })
  @post("{id}")
  static createKbr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
