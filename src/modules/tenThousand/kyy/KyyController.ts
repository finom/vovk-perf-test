import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyys")
export default class KyyController {
  @operation({
    summary: "Get Kyys",
  })
  @get()
  static getKyys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyy",
  })
  @post("{id}")
  static createKyy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
