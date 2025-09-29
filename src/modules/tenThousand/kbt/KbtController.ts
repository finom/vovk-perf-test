import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbts")
export default class KbtController {
  @operation({
    summary: "Get Kbts",
  })
  @get()
  static getKbts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbt",
  })
  @post("{id}")
  static createKbt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
