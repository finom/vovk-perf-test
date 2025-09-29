import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyms")
export default class KymController {
  @operation({
    summary: "Get Kyms",
  })
  @get()
  static getKyms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kym",
  })
  @post("{id}")
  static createKym = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
