import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kffs")
export default class KffController {
  @operation({
    summary: "Get Kffs",
  })
  @get()
  static getKffs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kff",
  })
  @post("{id}")
  static createKff = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
