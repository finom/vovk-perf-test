import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmrs")
export default class GmrController {
  @operation({
    summary: "Get Gmrs",
  })
  @get()
  static getGmrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmr",
  })
  @post("{id}")
  static createGmr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
