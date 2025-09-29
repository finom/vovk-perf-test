import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("klis")
export default class KliController {
  @operation({
    summary: "Get Klis",
  })
  @get()
  static getKlis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kli",
  })
  @post("{id}")
  static createKli = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
