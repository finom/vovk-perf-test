import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wrs")
export default class WrController {
  @operation({
    summary: "Get Wrs",
  })
  @get()
  static getWrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wr",
  })
  @post("{id}")
  static createWr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
