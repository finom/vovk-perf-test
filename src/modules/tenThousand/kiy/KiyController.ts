import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kiys")
export default class KiyController {
  @operation({
    summary: "Get Kiys",
  })
  @get()
  static getKiys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kiy",
  })
  @post("{id}")
  static createKiy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
