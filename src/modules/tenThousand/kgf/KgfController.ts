import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgfs")
export default class KgfController {
  @operation({
    summary: "Get Kgfs",
  })
  @get()
  static getKgfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgf",
  })
  @post("{id}")
  static createKgf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
