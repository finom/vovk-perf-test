import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akts")
export default class AktController {
  @operation({
    summary: "Get Akts",
  })
  @get()
  static getAkts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akt",
  })
  @post("{id}")
  static createAkt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
